// src/app/core/services/language.service.ts

import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Lang } from '../../shared/models/config.model';

export const SUPPORTED_LANGS: { code: Lang; label: string; htmlLang: string }[] = [
  { code: 'en',  label: 'English', htmlLang: 'en' },
  { code: 'tl',  label: 'Tagalog', htmlLang: 'tl' },
  { code: 'ceb', label: 'Bisaya',  htmlLang: 'ceb' },
  { code: 'zh',  label: '中文',    htmlLang: 'zh-CN' },
];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject<Document>(DOCUMENT);

  readonly supported = SUPPORTED_LANGS;

  get current(): Lang {
    const stored = localStorage.getItem('lang') as Lang | null;
    return stored && this.supported.some((l) => l.code === stored)
      ? stored
      : 'en';
  }

  switch(lang: Lang): void {
    localStorage.setItem('lang', lang);
    this.document.location.reload();
  }

  applyHtmlLang(): void {
    const entry = this.supported.find((l) => l.code === this.current);
    if (entry) {
      this.document.documentElement.setAttribute('lang', entry.htmlLang);
    }
  }
}
