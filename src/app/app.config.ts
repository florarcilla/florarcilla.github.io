// src/app/app.config.ts

import {
  ApplicationConfig,
  provideAppInitializer,
  inject,
} from '@angular/core';
import {
  provideRouter,
  withViewTransitions,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {
  provideClientHydration,
  withNoHttpTransferCache,
} from '@angular/platform-browser';
import { routes } from './app.routes';
import { ConfigService } from './core/services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideClientHydration(withNoHttpTransferCache()),
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.load();
    }),
  ],
};
