// src/app/shared/components/service-card/service-card.component.ts

import { Component, Input, inject, signal, HostListener, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceConfig } from '../../models/config.model';
import { ConfigService } from '../../../core/services/config.service';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceConfig;
  readonly ui = inject(ConfigService).config.ui.services;
  private readonly analytics = inject(AnalyticsService);
  private readonly elRef = inject(ElementRef);

  // ── Image fallback ───────────────────────────────────────────────────────
  private readonly _imageLoadError = signal(false);

  get imageError(): boolean {
    return !this.service.imageUrl || this._imageLoadError();
  }

  onImageError(): void {
    this._imageLoadError.set(true);
  }

  // ── Tags ─────────────────────────────────────────────────────────────────
  readonly overflowOpen = signal(false);

  /** Parsed, trimmed, non-empty tag strings from the comma-separated config value. */
  get tagList(): string[] {
    if (!this.service.tags?.trim()) return [];
    return this.service.tags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);
  }

  /** First 3 tags — always visible. */
  get visibleTags(): string[] {
    return this.tagList.slice(0, 3);
  }

  /** Tags beyond the first 3 — revealed when overflow panel is open. */
  get overflowTags(): string[] {
    return this.tagList.slice(3);
  }

  get hasOverflow(): boolean {
    return this.tagList.length > 3;
  }

  trackEnquire(): void {
    this.analytics.trackCta({
      cta_name:     'Enquire Now',
      cta_location: 'service_card',
      cta_type:     'enquiry',
      cta_detail:   `${this.service.title} (${this.service.type})`,
    });
  }

  toggleOverflow(event: Event): void {
    event.stopPropagation();
    this.overflowOpen.update(v => !v);
  }

  /** Close the overflow panel when the user clicks anywhere outside this card. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.overflowOpen() && !this.elRef.nativeElement.contains(event.target)) {
      this.overflowOpen.set(false);
    }
  }
}
