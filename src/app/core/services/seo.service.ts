// src/app/core/services/seo.service.ts

import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { LanguageService } from './language.service';

// gtag global declared in analytics.service.ts (shared across the app)
declare function gtag(...args: unknown[]): void;

type PageKey = 'home' | 'services' | 'about' | 'enquire' | 'gallery';

const PATH_TO_KEY: Record<string, PageKey> = {
  '':        'home',
  'services':'services',
  'about':   'about',
  'enquire': 'enquire',
  'gallery': 'gallery',
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc     = inject<Document>(DOCUMENT);
  private readonly router  = inject(Router);
  private readonly cfgSvc  = inject(ConfigService);
  private readonly langSvc = inject(LanguageService);

  init(): void {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map((e: NavigationEnd) => {
          const urlPath = e.urlAfterRedirects.replace(/^[/#]+/, '').split('?')[0].split('/')[0];
          return {
            pageKey: PATH_TO_KEY[urlPath] ?? 'home' as PageKey,
            url: e.urlAfterRedirects,
          };
        })
      )
      .subscribe(({ pageKey, url }) => {
        this.applyMeta(pageKey);
        this.trackPageView(url);
      });
  }

  // ─── Apply all meta tags for the current page ─────────────────────────────

  private applyMeta(pageKey: PageKey): void {
    const c    = this.cfgSvc.config;
    const lang = this.langSvc.current;

    const seoPage   = c.seoPages?.[pageKey] ?? c.metaDefaults;
    const title     = seoPage.title;
    const desc      = seoPage.description;
    const siteUrl   = (c.siteUrl ?? '').replace(/\/$/, '');
    const canonical = pageKey === 'home' ? `${siteUrl}/` : `${siteUrl}/${pageKey}`;
    const ogImage   = `${siteUrl}/${c.profilePictureUrl}`;
    const keywords  = (c.keywords ?? []).join(', ');

    // ── Title ────────────────────────────────────────────────────────────
    this.doc.title = title;

    // ── Core meta ─────────────────────────────────────────────────────────
    this.setMeta('name', 'description',      desc);
    this.setMeta('name', 'keywords',         keywords);
    this.setMeta('name', 'author',           c.agentName);
    this.setMeta('name', 'robots',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    this.setMeta('name', 'theme-color',      '#7459ca');
    this.setMeta('name', 'application-name', c.agentName);

    // Geo signals (helpful for local/regional SEO in the Philippines)
    this.setMeta('name', 'geo.region',    'PH');
    this.setMeta('name', 'geo.country',   'Philippines');
    this.setMeta('name', 'geo.placename', 'Philippines');
    this.setMeta('name', 'ICBM',          '12.8797, 121.7740');

    // ── Open Graph ─────────────────────────────────────────────────────────
    this.setMeta('property', 'og:type',             'website');
    this.setMeta('property', 'og:site_name',        c.agentName);
    this.setMeta('property', 'og:title',            title);
    this.setMeta('property', 'og:description',      desc);
    this.setMeta('property', 'og:url',              canonical);
    this.setMeta('property', 'og:image',            ogImage);
    this.setMeta('property', 'og:image:width',      '1200');
    this.setMeta('property', 'og:image:height',     '630');
    this.setMeta('property', 'og:image:alt',        c.profilePictureAlt);
    const ogLocaleMap: Record<string, string> = { en: 'en_PH', tl: 'tl_PH', ceb: 'ceb_PH', zh: 'zh_CN' };
    this.setMeta('property', 'og:locale', ogLocaleMap[lang] ?? 'en_PH');

    // ── Twitter / X Card ──────────────────────────────────────────────────
    this.setMeta('name', 'twitter:card',        'summary_large_image');
    this.setMeta('name', 'twitter:title',       title);
    this.setMeta('name', 'twitter:description', desc);
    this.setMeta('name', 'twitter:image',       ogImage);
    this.setMeta('name', 'twitter:image:alt',   c.profilePictureAlt);
    if (c.twitterHandle) {
      this.setMeta('name', 'twitter:site',    c.twitterHandle);
      this.setMeta('name', 'twitter:creator', c.twitterHandle);
    }

    // ── Canonical + hreflang alternates ───────────────────────────────────
    this.setLink('canonical', canonical);
    this.setHreflang('en',        `${siteUrl}/`);
    this.setHreflang('tl',        `${siteUrl}/`);
    this.setHreflang('ceb',       `${siteUrl}/`);
    this.setHreflang('zh-CN',     `${siteUrl}/`);
    this.setHreflang('x-default', `${siteUrl}/`);
  }

  // ─── GA4 page-view tracking ───────────────────────────────────────────────

  private trackPageView(url: string): void {
    if (typeof gtag === 'undefined') return;
    const c        = this.cfgSvc.config;
    const siteUrl  = (c.siteUrl ?? '').replace(/\/$/, '');
    const pageKey  = url.replace(/^[/#]+/, '').split('?')[0].split('/')[0];
    const seoPage  = c.seoPages?.[PATH_TO_KEY[pageKey] ?? 'home'] ?? c.metaDefaults;

    gtag('event', 'page_view', {
      page_title:    seoPage.title,
      page_location: `${siteUrl}${url}`,
      page_path:     url,
    });
  }

  // ─── DOM helpers ──────────────────────────────────────────────────────────

  private setMeta(attrKey: 'name' | 'property', attrVal: string, content: string): void {
    const sel = `meta[${attrKey}="${attrVal}"]`;
    let el = this.doc.querySelector<HTMLMetaElement>(sel);
    if (!el) {
      el = this.doc.createElement('meta');
      el.setAttribute(attrKey, attrVal);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  private setLink(rel: string, href: string): void {
    const sel = `link[rel="${rel}"]:not([hreflang])`;
    let el = this.doc.querySelector<HTMLLinkElement>(sel);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  private setHreflang(hreflang: string, href: string): void {
    const sel = `link[rel="alternate"][hreflang="${hreflang}"]`;
    let el = this.doc.querySelector<HTMLLinkElement>(sel);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', 'alternate');
      el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
