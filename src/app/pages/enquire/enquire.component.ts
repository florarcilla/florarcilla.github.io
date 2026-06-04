// src/app/pages/enquire/enquire.component.ts

import { Component, inject, OnInit, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../core/services/config.service';
import { EnquiryFormComponent } from '../../shared/components/enquiry-form/enquiry-form.component';
import { QuickContactBarComponent } from '../../shared/components/quick-contact-bar/quick-contact-bar.component';

type EnquiryType = 'insurance' | 'realestate' | 'general';
type EmailServiceType = 'insurance' | 'realestate';
const VALID_TYPES: EnquiryType[] = ['insurance', 'realestate', 'general'];

@Component({
  selector: 'app-enquire',
  standalone: true,
  imports: [EnquiryFormComponent, QuickContactBarComponent],
  templateUrl: './enquire.component.html',
  styleUrl: './enquire.component.scss',
})
export class EnquireComponent implements OnInit {
  private readonly doc           = inject<Document>(DOCUMENT);
  private readonly route         = inject(ActivatedRoute);
  private readonly configService = inject(ConfigService);

  readonly config   = this.configService.config;
  readonly ui       = this.config.ui.enquire;
  readonly modalUi  = this.config.ui.emailModal;
  readonly defaultType = signal<EnquiryType>('general');

  // ── Email service-picker modal ──────────────────────────────────────────────
  readonly emailModalOpen = signal(false);

  openEmailModal(): void  { this.emailModalOpen.set(true); }
  closeEmailModal(): void { this.emailModalOpen.set(false); }

  selectEmailService(type: EmailServiceType): void {
    const m       = this.modalUi;
    const subject = encodeURIComponent(type === 'insurance' ? m.subjectInsurance : m.subjectRealestate);
    const body    = encodeURIComponent(type === 'insurance' ? m.bodyInsurance    : m.bodyRealestate);
    const mailto  = `mailto:${this.config.email}?subject=${subject}&body=${body}`;
    this.doc.defaultView?.open(mailto, '_self');
    this.closeEmailModal();
  }

  ngOnInit(): void {
    const typeParam = this.route.snapshot.queryParamMap.get('type') as EnquiryType;
    if (typeParam && VALID_TYPES.includes(typeParam)) {
      this.defaultType.set(typeParam);
    }
  }
}
