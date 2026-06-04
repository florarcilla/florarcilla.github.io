// src/app/shared/components/footer/footer.component.ts

import { Component, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';

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

  readonly config      = this.configService.config;
  readonly ui          = this.config.ui;
  readonly modalUi     = this.config.ui.emailModal;
  readonly currentYear = new Date().getFullYear();

  readonly modalOpen = signal(false);

  openEmailModal(): void  { this.modalOpen.set(true); }
  closeModal(): void      { this.modalOpen.set(false); }

  selectService(type: EmailServiceType): void {
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
