// src/app/pages/services/services.component.ts

import { Component, inject } from '@angular/core';
import { ConfigService } from '../../core/services/config.service';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private readonly configService = inject(ConfigService);
  readonly config = this.configService.config;
  readonly ui = this.config.ui;
}
