// src/app/pages/gallery/gallery.component.ts

import {
  Component, computed, inject, signal, OnInit, OnDestroy, HostListener,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../../core/services/config.service';
import { GalleryItemType } from '../../shared/models/config.model';

// ─── Filename parsing ─────────────────────────────────────────────────────────

const MONTH_MAP: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4,
  may: 5, june: 6, july: 7, august: 8,
  september: 9, october: 10, november: 11, december: 12,
};

const MONTH_LABEL: Record<number, string> = {
  1: 'January', 2: 'February', 3: 'March', 4: 'April',
  5: 'May', 6: 'June', 7: 'July', 8: 'August',
  9: 'September', 10: 'October', 11: 'November', 12: 'December',
};

const VIDEO_EXTS   = new Set(['mp4', 'webm', 'mov', 'avi', 'ogg']);
const TYPE_ORDER: GalleryItemType[] = ['general', 'insurance', 'realestate'];

// ─── Internal models ──────────────────────────────────────────────────────────

export interface ParsedItem {
  filename: string;
  path: string;
  type: GalleryItemType;
  month: number;
  monthLabel: string;
  year: number;
  isVideo: boolean;
  alt: string;
}

interface MonthGroup   { month: number; label: string; items: ParsedItem[]; }
interface YearGroup    { year: number; months: MonthGroup[]; }
interface SectionGroup { type: GalleryItemType; label: string; years: YearGroup[]; }

function parseFilename(filename: string): ParsedItem | null {
  const ext  = filename.split('.').pop()?.toLowerCase() ?? '';
  const base = filename.replace(/\.[^.]+$/, '').toLowerCase();
  // format: {type}_{month}_{year}[_{sequence_or_label}]
  // Parts beyond index 2 are joined as an optional human-readable suffix.
  const parts = base.split('_');
  if (parts.length < 3) return null;

  const type     = parts[0] as GalleryItemType;
  const monthStr = parts[1];
  const yearNum  = parseInt(parts[2], 10);
  const month    = MONTH_MAP[monthStr];

  if (!TYPE_ORDER.includes(type) || !month || isNaN(yearNum)) return null;

  // Any trailing parts become a readable label (e.g. "01", "award ceremony")
  const suffix = parts.slice(3).join(' ').trim();
  const alt    = suffix
    ? `${type} – ${MONTH_LABEL[month]} ${yearNum} (${suffix})`
    : `${type} – ${MONTH_LABEL[month]} ${yearNum}`;

  return {
    filename,
    path: `assets/gallery/${filename}`,
    type,
    month,
    monthLabel: MONTH_LABEL[month],
    year: yearNum,
    isVideo: VIDEO_EXTS.has(ext),
    alt,
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit, OnDestroy {
  private readonly http   = inject(HttpClient);
  private readonly doc    = inject<Document>(DOCUMENT);
  private readonly cfgSvc = inject(ConfigService);

  readonly config = this.cfgSvc.config;
  readonly ui     = this.config.ui.gallery;

  // ── Manifest loading state ───────────────────────────────────────────────────
  readonly loading = signal(true);
  readonly error   = signal(false);

  /** Raw filenames from assets/gallery/manifest.json */
  private readonly manifestFiles = signal<string[]>([]);

  /** All successfully-parsed items */
  readonly allItems = computed<ParsedItem[]>(() =>
    this.manifestFiles()
      .map(parseFilename)
      .filter((i): i is ParsedItem => i !== null)
  );

  // ── Filters ──────────────────────────────────────────────────────────────────
  readonly filterType = signal<GalleryItemType | 'all'>('all');
  readonly filterYear = signal<number | 'all'>('all');

  readonly availableYears = computed<number[]>(() => {
    const years = [...new Set(this.allItems().map(i => i.year))];
    return years.sort((a, b) => b - a);
  });

  // ── Grouped & filtered display data ─────────────────────────────────────────
  readonly sections = computed<SectionGroup[]>(() => {
    const ft = this.filterType();
    const fy = this.filterYear();

    const filtered = this.allItems().filter(item =>
      (ft === 'all' || item.type === ft) &&
      (fy === 'all' || item.year === fy)
    );

    const sectionLabels: Record<GalleryItemType, string> = {
      general:    this.ui.sections.general,
      insurance:  this.ui.sections.insurance,
      realestate: this.ui.sections.realestate,
    };

    const map = new Map<GalleryItemType, Map<number, Map<number, ParsedItem[]>>>();
    for (const item of filtered) {
      if (!map.has(item.type))  map.set(item.type, new Map());
      const ym = map.get(item.type)!;
      if (!ym.has(item.year))   ym.set(item.year, new Map());
      const mm = ym.get(item.year)!;
      if (!mm.has(item.month))  mm.set(item.month, []);
      mm.get(item.month)!.push(item);
    }

    return TYPE_ORDER
      .filter(t => map.has(t))
      .map(t => ({
        type: t,
        label: sectionLabels[t],
        years: [...map.get(t)!.entries()]
          .sort(([a], [b]) => b - a)                // newest year first
          .map(([year, mm]) => ({
            year,
            months: [...mm.entries()]
              .sort(([a], [b]) => b - a)             // newest month first
              .map(([month, items]) => ({
                month,
                label: MONTH_LABEL[month],
                items,
              })),
          })),
      }));
  });

  /** Flat list of visible items — used for lightbox prev/next */
  readonly flatItems = computed<ParsedItem[]>(() =>
    this.sections().flatMap(s =>
      s.years.flatMap(y =>
        y.months.flatMap(m => m.items)
      )
    )
  );

  // ── Image error handling ─────────────────────────────────────────────────────
  /** Paths of images that failed to load — shown with placeholder instead */
  readonly erroredPaths = signal(new Set<string>());

  markError(path: string): void {
    this.erroredPaths.update(s => new Set([...s, path]));
  }

  // ── Lightbox ─────────────────────────────────────────────────────────────────
  readonly lightboxOpen  = signal(false);
  readonly lightboxIndex = signal(0);
  readonly lightboxItem  = computed<ParsedItem | null>(() =>
    this.lightboxOpen() ? (this.flatItems()[this.lightboxIndex()] ?? null) : null
  );

  openLightbox(item: ParsedItem): void {
    const idx = this.flatItems().indexOf(item);
    this.lightboxIndex.set(idx >= 0 ? idx : 0);
    this.lightboxOpen.set(true);
    this.doc.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    this.doc.body.style.overflow = '';
  }

  prev(): void {
    const len = this.flatItems().length;
    this.lightboxIndex.update(i => (i - 1 + len) % len);
  }

  next(): void {
    const len = this.flatItems().length;
    this.lightboxIndex.update(i => (i + 1) % len);
  }

  downloadCurrent(): void {
    const item = this.lightboxItem();
    if (!item) return;
    const a = this.doc.createElement('a');
    a.href = item.path;
    a.download = item.filename;
    a.click();
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape')     { e.preventDefault(); this.closeLightbox(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
  }

  // ── Filter helpers ───────────────────────────────────────────────────────────
  setType(val: string): void {
    this.filterType.set(val as GalleryItemType | 'all');
    this.filterYear.set('all');
  }

  setYear(val: string): void {
    this.filterYear.set(val === 'all' ? 'all' : parseInt(val, 10));
  }

  // ── Lifecycle ────────────────────────────────────────────────────────────────
  ngOnInit(): void {
    // Bust cache on each page visit so newly added images appear immediately
    this.http.get<{ files: string[] }>(`assets/gallery/manifest.json?v=${Date.now()}`)
      .subscribe({
        next: data => {
          this.manifestFiles.set(data.files ?? []);
          this.loading.set(false);
        },
        error: () => {
          // manifest doesn't exist yet (no images added) — show empty state
          this.manifestFiles.set([]);
          this.loading.set(false);
          this.error.set(false); // not an error, just empty
        },
      });
  }

  ngOnDestroy(): void {
    this.doc.body.style.overflow = '';
  }

  // ── Track fns ────────────────────────────────────────────────────────────────
  trackSection(_: number, s: SectionGroup): string { return s.type; }
  trackYear(_: number, y: YearGroup): number       { return y.year; }
  trackMonth(_: number, m: MonthGroup): number     { return m.month; }
  trackItem(_: number, i: ParsedItem): string      { return i.path; }
}
