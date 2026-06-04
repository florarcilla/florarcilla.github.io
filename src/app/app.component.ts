// src/app/app.component.ts

import { Component, OnInit, inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfigService } from './core/services/config.service';
import { SeoService } from './core/services/seo.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AccessibilityWidgetComponent } from './shared/components/accessibility-widget/accessibility-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AccessibilityWidgetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly configService = inject(ConfigService);
  private readonly seoService    = inject(SeoService);
  private readonly router        = inject(Router);
  private readonly document      = inject(DOCUMENT);
  private readonly renderer      = inject(Renderer2);

  get config() {
    return this.configService.config;
  }

  ngOnInit(): void {
    this.seoService.init();
    this.injectJsonLd();
    this.initScrollToTop();
  }

  /** Scroll window to top on every completed navigation */
  private initScrollToTop(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.document.defaultView?.scrollTo({ top: 0, behavior: 'instant' });
      });
  }

  private injectJsonLd(): void {
    const c       = this.config;
    const origin  = (c.siteUrl ?? this.document.location.origin).replace(/\/$/, '');
    const imgUrl  = `${origin}/${c.profilePictureUrl}`;
    const sameAs  = [c.facebookUrl, c.linkedinUrl, c.instagramUrl,
                     c.twitterHandle ? `https://twitter.com/${c.twitterHandle.replace('@','')}` : null]
                    .filter(Boolean) as string[];

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Person', 'ProfessionalService'],
          '@id': `${origin}/#agent`,
          name: c.agentName,
          alternateName: c.nickname,
          jobTitle: 'Licensed Insurance Agent & Real Estate Sales Associate',
          description: c.bio,
          email: c.email,
          telephone: c.phone,
          url: `${origin}/`,
          image: { '@type': 'ImageObject', url: imgUrl, caption: c.profilePictureAlt },
          sameAs,
          knowsAbout: [
            'Life Insurance', 'Health Insurance', 'VUL Insurance', 'PruLife UK',
            'Real Estate Philippines', 'ProFriends Properties', 'Pre-selling',
            'OFW Property Investment', 'Pag-IBIG Loans', 'Pasalo Properties',
          ],
          areaServed: { '@type': 'Country', name: 'Philippines' },
          nationality: { '@type': 'Country', name: 'Philippines' },
          hasCredential: c.licences?.map(l => ({
            '@type': 'EducationalOccupationalCredential',
            name: l,
          })),
        },
        {
          '@type': 'WebSite',
          '@id': `${origin}/#website`,
          url: `${origin}/`,
          name: c.agentName,
          description: c.metaDefaults?.description,
          inLanguage: ['en-PH', 'tl-PH'],
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: `${origin}/#/services` },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home',     item: `${origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${origin}/services` },
            { '@type': 'ListItem', position: 3, name: 'About',    item: `${origin}/about` },
            { '@type': 'ListItem', position: 4, name: 'Gallery',  item: `${origin}/gallery` },
            { '@type': 'ListItem', position: 5, name: 'Enquire',  item: `${origin}/enquire` },
          ],
        },
      ],
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    script.textContent = JSON.stringify(schema, null, 0);
    this.renderer.appendChild(this.document.head, script);
  }
}
