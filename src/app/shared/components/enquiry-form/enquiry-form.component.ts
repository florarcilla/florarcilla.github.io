// src/app/shared/components/enquiry-form/enquiry-form.component.ts

import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../../../core/services/config.service';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { UiStrings } from '../../models/config.model';

type EnquiryType = 'insurance' | 'realestate' | 'general';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.scss',
})
export class EnquiryFormComponent implements OnInit {
  @Input() defaultType: EnquiryType = 'general';
  /** Pre-filled text for the message field (e.g. from a service card click). */
  @Input() prefillMessage = '';
  /** When true, focus the Full Name field after init. */
  @Input() autoFocus = false;

  @ViewChild('fullNameInput') fullNameInput?: ElementRef<HTMLInputElement>;

  private readonly fb            = inject(FormBuilder);
  private readonly configService = inject(ConfigService);
  private readonly analytics     = inject(AnalyticsService);

  readonly submitted = signal(false);
  readonly formError = signal('');

  get ui(): UiStrings['enquire'] { return this.configService.config.ui.enquire; }

  get enquiryTypes(): { value: EnquiryType; label: string }[] {
    return [
      { value: 'general',     label: this.ui.enquiryTypes.general },
      { value: 'insurance',   label: this.ui.enquiryTypes.insurance },
      { value: 'realestate',  label: this.ui.enquiryTypes.realestate },
    ];
  }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName:    ['', [Validators.required, Validators.minLength(2)]],
      email:       ['', [Validators.required, Validators.email]],
      phone:       ['', [Validators.pattern(/^[\d\s\+\-\(\)]{7,20}$/)]],
      enquiryType: [this.defaultType, Validators.required],
      message:     [
        this.prefillMessage,
        [Validators.required, Validators.minLength(10), Validators.maxLength(2000)],
      ],
    });

    if (this.autoFocus) {
      // Defer so the element is rendered before we try to focus it
      setTimeout(() => this.fullNameInput?.nativeElement.focus(), 0);
    }
  }

  /** Returns true when the message field has user-entered content. */
  hasUnsavedMessage(): boolean {
    const msg = (this.form?.get('message')?.value as string) ?? '';
    return msg.trim().length > 0 && !this.submitted();
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.hasUnsavedMessage()) {
      event.preventDefault();
      // Modern browsers show their own generic message; setting returnValue
      // is required for compatibility with older browsers.
      event.returnValue = this.ui.leavePageWarning;
    }
  }

  hasError(field: string, error?: string): boolean {
    const control = this.form.get(field);
    if (!control || !control.touched) return false;
    return error ? control.hasError(error) : control.invalid;
  }

  getTypeLabel(value: string): string {
    return this.enquiryTypes.find((t) => t.value === value)?.label ?? value;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.formError.set(this.ui.validation.formError);
      return;
    }
    const { fullName, email, phone, enquiryType, message } = this.form.value as Record<string, string>;
    this.analytics.trackCta({
      cta_name:     'Submit Enquiry Form',
      cta_location: 'enquiry_form',
      cta_type:     'enquiry',
      cta_detail:   enquiryType,
    });
    const recipient = this.configService.config.email;
    const typeLabel = this.getTypeLabel(enquiryType);
    const subject = encodeURIComponent(`Enquiry: ${typeLabel} - ${fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nEnquiry Type: ${typeLabel}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    this.submitted.set(true);
    this.formError.set('');
  }

  resetForm(): void {
    this.submitted.set(false);
    this.form.reset({ enquiryType: this.defaultType });
  }
}
