// src/app/shared/components/footer/footer.component.ts

import { Component, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';
import { AnalyticsService } from '../../../core/services/analytics.service';

type EmailServiceType = 'insurance' | 'realestate';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly doc           = inject<Document>(DOCUMENT);
  private readonly configService = inject(ConfigService);
  private readonly analytics     = inject(AnalyticsService);

  readonly config      = this.configService.config;
  readonly ui          = this.config.ui;
  readonly modalUi     = this.config.ui.emailModal;
  readonly currentYear = new Date().getFullYear();

  readonly modalOpen = signal(false);

  trackPhone(): void {
    this.analytics.trackCta({ cta_name: 'Phone', cta_location: 'footer', cta_type: 'contact' });
  }

  trackWhatsApp(): void {
    this.analytics.trackCta({ cta_name: 'WhatsApp', cta_location: 'footer', cta_type: 'contact' });
  }

  trackSocial(platform: string): void {
    this.analytics.trackCta({ cta_name: platform, cta_location: 'footer', cta_type: 'social' });
  }

  openEmailModal(): void {
    this.analytics.trackCta({ cta_name: 'Email', cta_location: 'footer', cta_type: 'contact' });
    this.modalOpen.set(true);
  }

  closeModal(): void { this.modalOpen.set(false); }

  selectService(type: EmailServiceType): void {
    this.analytics.trackCta({
      cta_name:     'Email Send',
      cta_location: 'email_modal',
      cta_type:     'contact',
      cta_detail:   type,
    });
    const m = this.modalUi;
    const subject = encodeURIComponent(
      type === 'insurance' ? m.subjectInsurance : m.subjectRealestate
    );
    const body = encodeURIComponent(
      type === 'insurance' ? m.bodyInsurance : m.bodyRealestate
    );
    const mailto = `mailto:${this.config.email}?subject=${subject}&body=${body}`;
    this.doc.defaultView?.open(mailto, '_self');
    this.closeModal();
  }
}
