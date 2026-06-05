// src/app/core/services/analytics.service.ts
//
// Centralised GA4 wrapper — all CTA event tracking goes through here.
// The gtag script is loaded in index.html; this service just calls it.

import { Injectable } from '@angular/core';

// Global gtag function declared by the inline script in index.html
declare function gtag(...args: unknown[]): void;

export interface CtaEventParams {
  /** Human-readable label shown in GA4 reports, e.g. "Book Consultation" */
  cta_name: string;
  /** Where on the page: 'header' | 'hero' | 'service_card' | 'quick_contact' | 'footer' | 'enquire_page' | 'enquiry_form' | 'whatsapp_modal' | 'email_modal' */
  cta_location: string;
  /** Broad category: 'navigation' | 'contact' | 'social' | 'enquiry' */
  cta_type: string;
  /** Optional extra detail, e.g. service name or enquiry type */
  cta_detail?: string;
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  /** Fire a cta_click event. Safe to call even if gtag hasn't loaded yet. */
  trackCta(params: CtaEventParams): void {
    if (typeof gtag === 'undefined') return;
    gtag('event', 'cta_click', {
      cta_name:     params.cta_name,
      cta_location: params.cta_location,
      cta_type:     params.cta_type,
      ...(params.cta_detail ? { cta_detail: params.cta_detail } : {}),
    });
  }
}
