// src/app/shared/components/accessibility-widget/accessibility-widget.component.ts

import { Component, inject, signal, OnInit, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from '../../../core/services/config.service';
import { UiStrings } from '../../../shared/models/config.model';

type Theme    = 'light' | 'dark' | 'auto';
type FontSize = 'small' | 'default' | 'large';
type Contrast = 'normal' | 'high';
type A11yKey  = keyof UiStrings['accessibility'];

@Component({
  selector: 'app-accessibility-widget',
  standalone: true,
  templateUrl: './accessibility-widget.component.html',
  styleUrl: './accessibility-widget.component.scss',
})
export class AccessibilityWidgetComponent implements OnInit {
  private readonly doc     = inject<Document>(DOCUMENT);
  private readonly elRef   = inject(ElementRef);
  readonly ui = inject(ConfigService).config.ui.accessibility;

  readonly panelOpen = signal(false);
  readonly theme     = signal<Theme>('auto');
  readonly fontSize  = signal<FontSize>('default');
  readonly contrast  = signal<Contrast>('normal');

  readonly themes: { value: Theme; labelKey: A11yKey }[] = [
    { value: 'light', labelKey: 'lightMode' },
    { value: 'dark',  labelKey: 'darkMode'  },
    { value: 'auto',  labelKey: 'autoTheme' },
  ];

  readonly fontSizes: { value: FontSize; labelKey: A11yKey }[] = [
    { value: 'small',   labelKey: 'smallText'   },
    { value: 'default', labelKey: 'defaultText'  },
    { value: 'large',   labelKey: 'largeText'    },
  ];

  getLabel(key: A11yKey): string { return this.ui[key]; }

  ngOnInit(): void {
    const t = localStorage.getItem('theme')   as Theme    | null;
    const f = localStorage.getItem('fontSize') as FontSize | null;
    const c = localStorage.getItem('contrast') as Contrast | null;
    if (t) this.applyTheme(t);
    if (f) this.applyFontSize(f);
    if (c) this.applyContrast(c);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.panelOpen()) return;
    if (!this.elRef.nativeElement.contains(event.target as Node)) {
      this.panelOpen.set(false);
    }
  }

  togglePanel(): void { this.panelOpen.update((v) => !v); }

  setTheme(value: Theme): void    { this.applyTheme(value); }
  setFontSize(value: FontSize): void { this.applyFontSize(value); }
  toggleContrast(): void {
    this.applyContrast(this.contrast() === 'normal' ? 'high' : 'normal');
  }

  private applyTheme(value: Theme): void {
    this.theme.set(value);
    const html = this.doc.documentElement;
    if (value === 'auto') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', value);
    }
    localStorage.setItem('theme', value);
  }

  private applyFontSize(value: FontSize): void {
    this.fontSize.set(value);
    const html = this.doc.documentElement;
    if (value === 'default') {
      html.removeAttribute('data-font-size');
    } else {
      html.setAttribute('data-font-size', value);
    }
    localStorage.setItem('fontSize', value);
  }

  private applyContrast(value: Contrast): void {
    this.contrast.set(value);
    const html = this.doc.documentElement;
    if (value === 'high') {
      html.setAttribute('data-contrast', 'high');
    } else {
      html.removeAttribute('data-contrast');
    }
    localStorage.setItem('contrast', value);
  }
}
