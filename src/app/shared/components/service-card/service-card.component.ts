// src/app/shared/components/service-card/service-card.component.ts

import { Component, Input, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceConfig } from '../../models/config.model';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceConfig;
  readonly ui = inject(ConfigService).config.ui.services;

  // Treat a blank URL the same as a broken image
  get imageError(): boolean {
    return !this.service.imageUrl || this._imageLoadError();
  }

  private readonly _imageLoadError = signal(false);

  onImageError(): void {
    this._imageLoadError.set(true);
  }
}
