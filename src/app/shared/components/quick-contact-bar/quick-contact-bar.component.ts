// src/app/shared/components/quick-contact-bar/quick-contact-bar.component.ts

import { Component, inject, signal } from '@angular/core';
import { ConfigService } from '../../../core/services/config.service';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-quick-contact-bar',
  standalone: true,
  templateUrl: './quick-contact-bar.component.html',
  styleUrl: './quick-contact-bar.component.scss',
})
export class QuickContactBarComponent {
  private readonly configService = inject(ConfigService);
  private readonly analytics     = inject(AnalyticsService);
  readonly config = this.configService.config;
  readonly ui = this.config.ui.quickContact;
  readonly modalUi = this.config.ui.whatsappModal;

  readonly modalOpen = signal(false);

  get telUrl(): string { return `tel:${this.config.phone}`; }

  openWhatsAppModal(): void {
    this.analytics.trackCta({ cta_name: 'WhatsApp', cta_location: 'quick_contact', cta_type: 'contact' });
    this.modalOpen.set(true);
  }

  trackMessenger(): void {
    this.analytics.trackCta({ cta_name: 'Messenger', cta_location: 'quick_contact', cta_type: 'contact' });
  }

  trackCall(): void {
    this.analytics.trackCta({ cta_name: 'Call', cta_location: 'quick_contact', cta_type: 'contact' });
  }

  closeModal(): void { this.modalOpen.set(false); }

  selectService(type: 'insurance' | 'realestate'): void {
    this.analytics.trackCta({
      cta_name:     'WhatsApp Send Message',
      cta_location: 'whatsapp_modal',
      cta_type:     'contact',
      cta_detail:   type,
    });
    const message = type === 'insurance'
      ? this.modalUi.messageInsurance
      : this.modalUi.messageRealestate;

    const url = `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    this.closeModal();
  }
}
