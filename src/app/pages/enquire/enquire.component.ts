// src/app/pages/enquire/enquire.component.ts

import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../core/services/config.service';
import { AnalyticsService } from '../../core/services/analytics.service';
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
export class EnquireComponent implements AfterViewInit {
  @ViewChild(EnquiryFormComponent) private enquiryForm?: EnquiryFormComponent;
  @ViewChild('formSection') private formSection?: ElementRef<HTMLElement>;

  private readonly doc           = inject<Document>(DOCUMENT);
  private readonly route         = inject(ActivatedRoute);
  private readonly configService = inject(ConfigService);
  private readonly analytics     = inject(AnalyticsService);

  readonly config   = this.configService.config;
  readonly ui       = this.config.ui.enquire;
  readonly modalUi  = this.config.ui.emailModal;

  readonly defaultType    = signal<EnquiryType>('general');
  readonly prefillMessage = signal('');
  readonly autoFocus      = signal(false);

  // ── Email service-picker modal ──────────────────────────────────────────────
  readonly emailModalOpen = signal(false);

  /** Used by unsavedEnquiryGuard */
  get leaveConfirmMessage(): string { return this.ui.leavePageWarning; }

  /** Delegates to the child form; used by unsavedEnquiryGuard */
  hasUnsavedMessage(): boolean {
    return this.enquiryForm?.hasUnsavedMessage() ?? false;
  }

  constructor() {
    // Read query params synchronously in constructor (snapshot is available immediately)
    const snap        = inject(ActivatedRoute).snapshot;
    const typeParam   = snap.queryParamMap.get('type') as EnquiryType;
    const serviceId   = snap.queryParamMap.get('service') ?? '';

    if (typeParam && VALID_TYPES.includes(typeParam)) {
      this.defaultType.set(typeParam);
    }

    if (serviceId) {
      const svc = this.config.services.find((s) => s.id === serviceId);
      if (svc) {
        const template = this.ui.servicePrefilledMessage ?? '';
        this.prefillMessage.set(template.replace('{service}', svc.title));
        this.autoFocus.set(true);
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.autoFocus() && this.formSection) {
      // AppComponent's scroll-to-top fires on NavigationEnd, so defer past it
      setTimeout(() => {
        this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }

  trackPhone(): void {
    this.analytics.trackCta({ cta_name: 'Phone', cta_location: 'enquire_page', cta_type: 'contact' });
  }

  openEmailModal(): void {
    this.analytics.trackCta({ cta_name: 'Email', cta_location: 'enquire_page', cta_type: 'contact' });
    this.emailModalOpen.set(true);
  }

  closeEmailModal(): void { this.emailModalOpen.set(false); }

  selectEmailService(type: EmailServiceType): void {
    this.analytics.trackCta({
      cta_name:     'Email Send',
      cta_location: 'email_modal',
      cta_type:     'contact',
      cta_detail:   type,
    });
    const m       = this.modalUi;
    const subject = encodeURIComponent(type === 'insurance' ? m.subjectInsurance : m.subjectRealestate);
    const body    = encodeURIComponent(type === 'insurance' ? m.bodyInsurance    : m.bodyRealestate);
    const mailto  = `mailto:${this.config.email}?subject=${subject}&body=${body}`;
    this.doc.defaultView?.open(mailto, '_self');
    this.closeEmailModal();
  }
}
