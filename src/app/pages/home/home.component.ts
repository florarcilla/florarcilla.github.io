// src/app/pages/home/home.component.ts

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../core/services/config.service';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import { EnquiryFormComponent } from '../../shared/components/enquiry-form/enquiry-form.component';
import { QuickContactBarComponent } from '../../shared/components/quick-contact-bar/quick-contact-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TestimonialCardComponent, EnquiryFormComponent, QuickContactBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly configService = inject(ConfigService);
  readonly config = this.configService.config;
  readonly ui = this.config.ui;
}
