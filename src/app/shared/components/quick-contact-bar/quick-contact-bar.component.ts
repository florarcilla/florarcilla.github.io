// src/app/shared/components/quick-contact-bar/quick-contact-bar.component.ts

import { Component, inject, signal } from '@angular/core';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-quick-contact-bar',
  standalone: true,
  templateUrl: './quick-contact-bar.component.html',
  styleUrl: './quick-contact-bar.component.scss',
})
export class QuickContactBarComponent {
  private readonly configService = inject(ConfigService);
  readonly config = this.configService.config;
  readonly ui = this.config.ui.quickContact;
  readonly modalUi = this.config.ui.whatsappModal;

  readonly modalOpen = signal(false);

  get telUrl(): string { return `tel:${this.config.phone}`; }

  openWhatsAppModal(): void { this.modalOpen.set(true); }
  closeModal(): void        { this.modalOpen.set(false); }

  selectService(type: 'insurance' | 'realestate'): void {
    const message = type === 'insurance'
      ? this.modalUi.messageInsurance
      : this.modalUi.messageRealestate;

    const url = `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    this.closeModal();
  }
}
