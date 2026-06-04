// src/app/core/services/config.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from '../../shared/models/config.model';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly http = inject(HttpClient);
  private readonly langService = inject(LanguageService);
  private _config!: AppConfig;

  get config(): AppConfig {
    return this._config;
  }

  async load(): Promise<void> {
    const lang = this.langService.current;
    this._config = await firstValueFrom(
      this.http.get<AppConfig>(`assets/config/app.config.${lang}.json`)
    );
    this.langService.applyHtmlLang();
  }
}
