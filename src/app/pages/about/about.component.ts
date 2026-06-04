// src/app/pages/about/about.component.ts

import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ConfigService } from '../../core/services/config.service';
import { QuickContactBarComponent } from '../../shared/components/quick-contact-bar/quick-contact-bar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, QuickContactBarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly configService = inject(ConfigService);
  readonly config = this.configService.config;
  readonly ui = this.config.ui.about;
}
