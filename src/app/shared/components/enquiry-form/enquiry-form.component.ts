// src/app/shared/components/enquiry-form/enquiry-form.component.ts

import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../../../core/services/config.service';
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

  private readonly fb = inject(FormBuilder);
  private readonly configService = inject(ConfigService);

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
      message:     ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    });
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
    const recipient = this.configService.config.email;
    const typeLabel = this.getTypeLabel(enquiryType);
    const subject = encodeURIComponent(`Enquiry: ${typeLabel} — ${fullName}`);
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
