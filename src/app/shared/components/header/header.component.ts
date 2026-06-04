// src/app/shared/components/header/header.component.ts

import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';
import { LanguageService, SUPPORTED_LANGS } from '../../../core/services/language.service';
import { Lang } from '../../models/config.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly configService = inject(ConfigService);
  readonly langService = inject(LanguageService);

  readonly config = this.configService.config;
  readonly ui = this.config.ui;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly langs = SUPPORTED_LANGS;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 10);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  switchLang(code: Lang): void {
    this.langService.switch(code);
  }
}
