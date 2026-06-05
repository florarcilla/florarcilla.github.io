# CLAUDE.md — ia-marketing project context

> Keep this file updated as the project evolves. It is the single source of truth for AI assistants continuing work on this codebase.
>
> **⚠️ MANDATORY: Before any context compaction, update this file.** Add all changed files to §17, update stale facts in any section, and tick off completed items in §15. Never let the file go stale — the next session depends on it.

---

## 1. What this project is

A static Angular 19 SPA for **Flor D. Arcilla** — a dual-role professional:

| Role | Company |
|------|---------|
| Licensed Insurance Agent | PruLife UK (License #70111974, since 2020) |
| Real Estate Sales Associate | ProFriends (License #RE-2014-77302, since 2019) |

The site is hosted on **GitHub Pages with a custom domain `florarcilla.com`** via `PathLocationStrategy`. All dynamic content is driven by JSON config files (no backend, no API). The build output is fully static.

**Target audiences:** Filipino families locally and OFWs abroad looking for insurance or real estate investment.

---

## 2. Key constraints & decisions

- **Never modify existing text content in `app.config.*.json`** — only ADD new fields unless explicitly asked to fix grammar/copy.
- **No em dashes (`—`) in any user-facing strings** across the entire system. Use a regular hyphen-minus (`-`) or reword. This applies to config JSON values, HTML templates, TypeScript strings, and SCSS `content` properties.
- **No backend / SSR** — everything must work as a static SPA.
- **`PathLocationStrategy`** — routes are `/route` (no hash). GitHub Pages SPA routing is handled by `404.html` + decode script in `index.html`. `segmentCount = 0` in `404.html` for custom domain.
- **Angular emulated view encapsulation** — component SCSS gets `[_ngcontent-xxx]` scoping. SVG child elements (`<text>`, `<tspan>`) cannot be targeted from component SCSS. Global SCSS partials (`src/styles/`) are unscoped and must be used for SVG styling.
- **Dart Sass 3** — use `@use`/`@forward`, never `@import`. SCSS variables live in `src/styles/_vars.scss`.
- **Angular 19 signals** — prefer `signal()`, `computed()`, `@HostListener` over `Observable` chains where practical.
- **Standalone components** — no NgModules; every component declares its own `imports: []`.
- **`service-card` overflow** — `.service-card` must NOT have `overflow: hidden`. The tag overflow panel must escape the card. Image corner rounding is handled by `__image-zone` and `__image-wrap` border-radius.

---

## 3. Project structure

```
src/
├── app/
│   ├── app.component.ts          # Root: SEO init, JSON-LD injection, scroll-to-top
│   ├── app.routes.ts             # 5 routes: /, /services, /about, /enquire, /gallery
│   ├── app.config.ts             # provideRouter, provideHttpClient, PathLocationStrategy
│   ├── core/services/
│   │   ├── config.service.ts     # Loads app.config.{lang}.json via APP_INITIALIZER
│   │   ├── seo.service.ts        # Updates meta/OG/Twitter tags + fires GA4 page_view on NavigationEnd
│   │   ├── language.service.ts   # Manages EN/TL/CEB/ZH language switching
│   │   └── analytics.service.ts  # Centralised GA4 CTA event tracking (cta_click events)
│   ├── pages/
│   │   ├── home/
│   │   ├── services/
│   │   ├── about/
│   │   ├── enquire/              # Includes <app-quick-contact-bar />, email modal
│   │   └── gallery/             # Manifest-driven photo/video gallery
│   └── shared/
│       ├── components/
│       │   ├── header/           # Burger (left), inline SVG logo, desktop nav, mobile drawer
│       │   ├── footer/           # Email modal (service picker), social links, quick links
│       │   ├── accessibility-widget/  # Theme/font/contrast panel, click-outside to close
│       │   ├── quick-contact-bar/    # Fixed FABs on mobile (WhatsApp, Messenger, Call)
│       │   ├── service-card/         # Tags feature, __image-zone wrapper (no overflow:hidden on card)
│       │   ├── testimonial-card/
│       │   ├── star-rating/
│       │   └── enquiry-form/
│       └── models/
│           └── config.model.ts   # Full TypeScript types for AppConfig, UiStrings, etc.
├── assets/
│   ├── config/
│   │   ├── app.config.en.json    # English content (source of truth for translations)
│   │   ├── app.config.tl.json   # Tagalog content
│   │   ├── app.config.ceb.json  # Cebuano/Bisaya content
│   │   └── app.config.zh.json   # Mandarin Chinese content
│   └── gallery/                 # Media files + manifest.json (auto-generated)
├── styles/
│   ├── styles.scss               # Entry: @use 'tokens'; @use 'reset'; @use 'logo';
│   ├── _vars.scss                # SCSS variables ($space-*, $font-size-*, $bp-*, etc.)
│   ├── _tokens.scss              # CSS custom properties (--color-*, --shadow-*, etc.)
│   ├── _reset.scss               # Base reset
│   └── _logo.scss                # ⚠️ GLOBAL unscoped SVG logo color rules (see §6)
├── index.html                    # Full static meta fallbacks, OG, Twitter, hreflang, GA4 snippet
├── robots.txt                    # Allows 20+ crawlers, disallows assets/config/
├── sitemap.xml                   # 5 URLs × 4 hreflang alternates (en, tl, ceb, zh-CN)
└── site.webmanifest              # PWA manifest
404.html                          # GitHub Pages SPA fallback (segmentCount=0 for custom domain)
scripts/
└── generate-gallery-manifest.js  # Pre-build: scans assets/gallery/, writes manifest.json
```

---

## 4. Config files

### Location
```
src/assets/config/app.config.en.json   ← source of truth for all translations
src/assets/config/app.config.tl.json
src/assets/config/app.config.ceb.json
src/assets/config/app.config.zh.json
```

### How they load
`ConfigService` fetches the correct file via `APP_INITIALIZER` based on `LanguageService.current` (persisted in `localStorage` as `'lang'`). After load, `this.configService.config` is the typed `AppConfig` object.

### Supported languages
| Code | Label | File |
|------|-------|------|
| `en` | English | `app.config.en.json` |
| `tl` | Tagalog | `app.config.tl.json` |
| `ceb` | Bisaya | `app.config.ceb.json` |
| `zh` | 中文 | `app.config.zh.json` |

### Key top-level fields
| Field | Purpose |
|-------|---------|
| `agentName` | "Flor D. Arcilla" |
| `email` | fongarcilla@gmail.com |
| `phone` | +639055584891 |
| `whatsappNumber` | 639055584891 (no +) |
| `facebookMessengerUrl` | https://m.me/florarcilla |
| `siteUrl` | https://florarcilla.com |
| `twitterHandle` | `@florarcilla` |
| `keywords` | Array of SEO keywords |
| `seoPages` | Object with `home/services/about/enquire/gallery` → `{ title, description }` |
| `ui` | All user-facing strings (see `UiStrings` interface) |
| `ui.emailModal` | Pre-filled email modal strings (subjects + bodies per service type) |
| `ui.gallery` | Gallery page UI strings |
| `ui.whatsappModal` | WhatsApp service-picker modal strings |
| `services[].tags` | Optional comma-separated tag labels shown as pills on card image |

### ⚠️ Rules for config files
- **`en.json` is the source of truth.** All other language files must mirror its structure and service IDs.
- When adding new services to `en.json`, add translated equivalents to `tl`, `ceb`, and `zh` in the same array position.
- **Never change**: `id`, `imageUrl`, `imageAlt`, `type`, `email`, `phone`, `whatsappNumber`, URLs, file paths, or HTML tags inside string values.
- **Never add** fields that don't exist in the EN file.

---

## 5. Routing

```typescript
// PathLocationStrategy — clean URLs (no hash)
''         → HomeComponent       (lazy)
'services' → ServicesComponent   (lazy)
'about'    → AboutComponent      (lazy)
'enquire'  → EnquireComponent    (lazy)
'gallery'  → GalleryComponent    (lazy)
'**'       → redirectTo: ''
```

### SPA routing on GitHub Pages
- `404.html` at repo root intercepts unmatched paths, encodes them as `?p=/path`, redirects to `/?p=/path`
- Decode script in `index.html` reads `?p=` and calls `history.replaceState` before Angular boots
- **`segmentCount = 0`** — correct for custom domain (`florarcilla.com`). Use `1` only for GitHub project pages (`username.github.io/repo/`)

---

## 6. Logo — critical SVG theming rule

**The logo is an inline SVG** in both header and footer:

```html
<svg viewBox="0 0 600 200">
  <text ...>Flor<tspan class="logo-dot">.</tspan></text>
</svg>
```

**Why a global partial?**
Angular's emulated encapsulation adds `[_ngcontent-xxx]` attributes to host elements but **not** to SVG child elements (`<text>`, `<tspan>`). Component SCSS rules like `text { fill: currentColor }` silently fail. The solution is `src/styles/_logo.scss` — a global unscoped partial imported via `styles.scss`.

```scss
// src/styles/_logo.scss  (DO NOT move these rules into component SCSS)
.header__logo, .footer__logo {
  color: #1a1a1a;
  text { fill: currentColor; }
  .logo-dot { fill: #7459ca; }   // brand purple
}
[data-theme='dark'] {
  .header__logo, .footer__logo {
    color: #f0f0f0;
    .logo-dot { fill: #9b7fda; } // lighter purple for dark bg
  }
}
// + @media (prefers-color-scheme: dark) variant for auto-theme
// + same rules for .gallery-thumb__placeholder
```

**Rule:** If you ever add another SVG element that needs theme-aware coloring, add its rules to `_logo.scss`, not to a component stylesheet.

---

## 7. Gallery page

### How it works
1. **Pre-build**: `scripts/generate-gallery-manifest.js` scans `src/assets/gallery/` and writes `src/assets/gallery/manifest.json` → `{ "files": ["insurance_june_2025.jpg", ...] }`
2. **Runtime**: `GalleryComponent.ngOnInit()` fetches `assets/gallery/manifest.json?v={timestamp}` (cache-bust)
3. Files are parsed by `parseFilename()` and grouped into `SectionGroup → YearGroup → MonthGroup`

### Filename format
```
{type}_{month}_{year}[_{sequence_or_label}].ext
```
- `type`: `general` | `insurance` | `realestate`
- `month`: full lowercase month name, e.g. `june`
- `year`: 4-digit year, e.g. `2025`
- `sequence_or_label`: optional, e.g. `01`, `award_ceremony` — used in alt text only

### Scripts
```bash
npm run generate-gallery      # manual re-scan
npm start                     # auto-runs manifest gen via prestart
npm run build                 # auto-runs manifest gen via prebuild
npm run build:gh              # production build for custom domain (--base-href /)
```

### Lightbox
- Click any thumbnail → lightbox opens, `body.overflow = 'hidden'`
- Keyboard: `Escape` close, `←/→` navigate
- `@HostListener('document:keydown')` in `GalleryComponent`
- `ngOnDestroy()` restores `body.style.overflow`

---

## 8. SEO architecture

### Static fallbacks (`src/index.html`)
All critical meta tags are hard-coded in `index.html` for bots that don't execute JS. Also contains the GA4 loader script (`G-HWV9P7HC36`).

### Dynamic updates (`SeoService`)
On every `NavigationEnd`, fires:
1. `applyMeta(pageKey)` — sets `<title>`, description, OG, Twitter, canonical, hreflang for all 4 languages
2. `trackPageView(url)` — fires `gtag('event', 'page_view', {...})` for SPA navigation tracking

### JSON-LD (`AppComponent.injectJsonLd()`)
Injected once on app init. Schema `@graph` contains:
- `Person` + `ProfessionalService` (merged type)
- `WebSite` with `SearchAction`
- `BreadcrumbList` for all 5 pages

### Other SEO files
| File | Purpose |
|------|---------|
| `src/robots.txt` | Allows Googlebot, Bingbot, GPTBot, ClaudeBot, 15+ others; blocks `assets/config/` |
| `src/sitemap.xml` | 5 URLs × 4 hreflang alternates (en, tl, ceb, zh-CN) + x-default |
| `src/site.webmanifest` | PWA manifest with brand purple `#7459ca` |

---

## 9. Analytics — GA4 (G-HWV9P7HC36)

### Setup
- GA4 loader script in `src/index.html` (async, non-blocking)
- `declare function gtag(...)` in `analytics.service.ts` for TypeScript

### Page view tracking
`SeoService.trackPageView()` fires on every `NavigationEnd` — treats SPA navigation as traditional page views in GA4.

### CTA tracking
All CTAs fire `cta_click` events via `AnalyticsService.trackCta()`. Parameters:
- `cta_name` — e.g. "Book Consultation", "WhatsApp", "Enquire Now"
- `cta_location` — e.g. "header", "hero", "service_card", "quick_contact", "footer", "whatsapp_modal", "email_modal", "enquiry_form", "enquire_page"
- `cta_type` — `navigation` | `contact` | `social` | `enquiry`
- `cta_detail` — optional extra context (service type, variant)

**Never call `gtag()` directly from components.** Always inject and use `AnalyticsService`.

---

## 10. Email modal

When the user clicks the email address in the footer or enquire page:
1. A service-picker modal appears (same UX pattern as the WhatsApp modal)
2. User picks "Insurance" or "Real Estate"
3. A `mailto:` URL is built with pre-filled `subject` and `body` from `config.ui.emailModal`
4. Opens in `_self` via `document.defaultView.open()`

Both `FooterComponent` and `EnquireComponent` have their own copy of this modal markup and `selectService()` logic.

---

## 11. Accessibility widget

**Location:** `src/app/shared/components/accessibility-widget/`

**Features:**
- Theme: `light` | `dark` | `auto` (default)
- Font size: `small` | `default` | `large`
- High contrast toggle
- All preferences persisted to `localStorage` and restored on `ngOnInit`

**HTML attributes set on `<html>`:**
- `data-theme="light|dark"` (removed for auto)
- `data-font-size="small|large"` (removed for default)
- `data-contrast="high"` (removed for normal)

**Click-outside:** `@HostListener('document:click', ['$event'])` checks `!this.elRef.nativeElement.contains(event.target)` → `panelOpen.set(false)`.

---

## 12. Header navigation

### Mobile layout
- Burger button on the **left** (leftmost item in the bar)
- "Enquire Now!" CTA always visible in the sticky top bar
- Language selector is **pill buttons** inside the mobile drawer (bottom, with top border separator) — NOT a `<select>` dropdown (avoids viewport overflow issue)
- Drawer slides in from the **left**

### Desktop layout
- Full horizontal nav: Home · Services · Gallery · About · Enquire Now!
- Language selector `<select>` in top bar (right side)
- No burger

### Language selector implementation
- **Desktop**: native `<select>` — use `[selected]="lang.code === langService.current"` on each `<option>` (NOT `[value]` on `<select>` — that doesn't work without FormsModule)
- **Mobile**: pill `<button>` elements calling `switchLang(lang.code)` directly — never use a `<select>` in the mobile drawer (it opens downward off-screen)

---

## 13. Service card — tags feature

### Tag pills
- Comma-separated string from `services[].tags` in config
- Shown as frosted-glass pills on lower-left of the card image
- Max 3 visible; if more, a `...` pill appears as the 4th
- Clicking `...` opens an overflow panel expanding upward

### Critical DOM structure
```html
<article class="service-card">              <!-- NO overflow:hidden -->
  <div class="service-card__image-zone">    <!-- position:relative, NO overflow -->
    <div class="service-card__image-wrap">  <!-- overflow:hidden for zoom clip ONLY -->
      <!-- img or placeholder -->
    </div>
    <span class="service-card__badge">...</span>   <!-- positioned to zone -->
    <div class="service-card__tags">...</div>       <!-- positioned to zone -->
  </div>
  <div class="service-card__body">...</div>
</article>
```

**Why**: If `overflow:hidden` is on `.service-card` or `.service-card__image-wrap`, the overflow panel gets clipped. The `__image-zone` is the positioning anchor; `__image-wrap` only clips the zoom effect.

### Click-outside
`@HostListener('document:click')` on the component closes the panel when clicking outside. `event.stopPropagation()` on the `...` button prevents immediate re-close.

---

## 14. Quick-contact FABs

`QuickContactBarComponent` renders:
- **Desktop**: horizontal row of buttons (WhatsApp, Messenger, Call)
- **Mobile**: `position: fixed` circular FABs in bottom-right corner

Used on both the **enquire page** and embedded in **home page**.

WhatsApp button opens a service-picker modal that sends a pre-filled WhatsApp message via `https://wa.me/{number}?text=...`.

---

## 15. SCSS conventions

```scss
// Always use @use, never @import
@use 'vars' as *;   // gives access to $space-*, $bp-*, $font-size-*, etc.

// Available spacing scale: $space-1 through $space-12 (no $space-14!)
// Breakpoints: $bp-sm, $bp-md, $bp-lg
// Font sizes: $font-size-sm, $font-size-base, $font-size-lg, etc.
// Transitions: $transition-fast, $transition-base
// Radii: $radius-btn, $radius-card
// Line heights: $line-height-base
```

CSS custom properties (defined in `_tokens.scss`):
```
--color-primary        (brand purple #7459ca)
--color-primary-light  (tint for hover backgrounds)
--color-accent         (real estate accent)
--color-surface-alt    (card backgrounds)
--color-surface-raised (modal backgrounds)
--color-border
--color-text
--color-text-muted
--shadow-card-hover
```

---

## 16. Lighthouse / performance notes

### Running accurate Lighthouse tests
`ng serve` (default) serves a **development build**. For accurate scores:

```bash
npm run start:prod    # serves production bundle on localhost
# OR
npm run build:gh      # build to dist/, serve with any static server
```

### WebP images
```bash
npm install --save-dev sharp   # one-time install
npm run generate-webp          # converts all JPEG/PNG in assets/images/ to WebP
```

### Fixed issues
| Issue | Fix applied |
|-------|------------|
| Hero image not in initial document | `<link rel="preload">` in index.html |
| Hero image modern format | `<picture>` with WebP source |
| CLS on footer/header logo | `width`/`height` on SVGs; Playfair Display uses `display=optional` |
| Network dependency chain | Config JSON preloaded before Angular boots |
| Enquire CTA contrast | `--color-accent` → `#9c520d` (5.8:1) |
| WhatsApp button contrast | `#1a7a3e` (5.4:1) |
| Messenger button contrast | `#0057a8` (7.2:1) |

---

## 17. Known issues / future work

### Suggested improvements (not yet built)
- [ ] **Contact form backend** — enquiry form opens `mailto:` but has no Formspree/serverless handler
- [ ] **Gallery video support** — `.mp4`/`.webm` files handled in TS but verify template renders `<video>`
- [ ] **Gallery lazy loading** — thumbnails could use `IntersectionObserver` for large collections
- [ ] **OG image** — currently uses portrait photo; dedicated 1200×630 image would perform better on social
- [ ] **Language-aware canonical** — all hreflang alternates point to root `/`; per-page language URLs not implemented
- [ ] **Animation on gallery filter change** — no transition when filters change
- [ ] **app.routes.ts `data` fields** — stale scaffolding placeholders; `SeoService` uses `config.seoPages` instead

### Content status
- Copy is considered final — grammar and accuracy pass completed in last session

---

## 18. Running the project

```bash
# Development
npm start                  # generates gallery manifest then ng serve

# Production build (custom domain)
npm run build:gh           # generates manifest + ng build --base-href /

# Manual gallery manifest regeneration
npm run generate-gallery
```

**Adding gallery images:**
1. Drop files into `src/assets/gallery/`
2. Use the filename format: `{type}_{month}_{year}[_{seq}].{ext}`
3. Run `npm run generate-gallery` (or `npm start` which does it automatically)

---

## 19. File change log (current session)

| File | What changed |
|------|-------------|
| `src/app/core/services/analytics.service.ts` | NEW — centralised GA4 `cta_click` event wrapper |
| `src/app/core/services/seo.service.ts` | Added `trackPageView()` firing `gtag page_view` on every `NavigationEnd` |
| `src/app/shared/components/header/header.component.ts` | Added `switchLang(code)` for mobile pills; `trackBookConsultation()` via AnalyticsService |
| `src/app/shared/components/header/header.component.html` | Mobile drawer: `<select>` replaced with pill `<button>` elements; desktop `[selected]` fix |
| `src/app/shared/components/header/header.component.scss` | Added `.drawer-lang__buttons` flex layout + `.drawer-lang__btn` pill styles |
| `src/app/shared/components/service-card/service-card.component.ts` | Tags feature: `tagList`, `visibleTags`, `overflowTags`, `toggleOverflow`, `@HostListener`; `trackEnquire()` |
| `src/app/shared/components/service-card/service-card.component.html` | Added `__image-zone` wrapper; badge + tags moved outside `__image-wrap`; `trackEnquire()` on CTA |
| `src/app/shared/components/service-card/service-card.component.scss` | Removed `overflow:hidden` from card; added `__image-zone`; fixed `__tag-more-wrap` to flex |
| `src/app/shared/components/quick-contact-bar/quick-contact-bar.component.ts` | `trackMessenger()`, `trackCall()`, analytics in `openWhatsAppModal()` and `selectService()` |
| `src/app/shared/components/quick-contact-bar/quick-contact-bar.component.html` | Added `(click)` analytics to Messenger and Call links |
| `src/app/shared/components/footer/footer.component.ts` | `trackPhone()`, `trackWhatsApp()`, `trackSocial()`, analytics in `openEmailModal()` + `selectService()` |
| `src/app/shared/components/footer/footer.component.html` | Added `(click)` analytics to phone, WhatsApp, all social links |
| `src/app/pages/home/home.component.ts` | Added `trackHeroCta()` via AnalyticsService |
| `src/app/pages/home/home.component.html` | Added `(click)` analytics to hero primary and secondary CTAs |
| `src/app/pages/enquire/enquire.component.ts` | `trackPhone()`, analytics in `openEmailModal()` + `selectEmailService()` |
| `src/app/pages/enquire/enquire.component.html` | Added `(click)="trackPhone()"` to phone link |
| `src/app/shared/components/enquiry-form/enquiry-form.component.ts` | Analytics in `onSubmit()` |
| `src/app/core/services/language.service.ts` | Added `ceb` and `zh` to `SUPPORTED_LANGS` |
| `src/app/app.config.ts` | Removed `withHashLocation()` — now uses `PathLocationStrategy` |
| `src/app/shared/models/config.model.ts` | `Lang` type updated to `'en' \| 'tl' \| 'ceb' \| 'zh'`; added `tags?: string` to `ServiceConfig` |
| `src/index.html` | Added GA4 loader script; added `ceb`/`zh-CN` hreflang; SPA decode script |
| `src/sitemap.xml` | Updated to 4 hreflang alternates (en, tl, ceb, zh-CN) + x-default for all 5 pages |
| `404.html` | `segmentCount` changed from `1` → `0` (critical fix for custom domain SPA routing) |
| `src/assets/config/app.config.en.json` | Grammar fixes; added `tags` to all services; 4-language config; `ceb`+`zh` hreflang |
| `src/assets/config/app.config.tl.json` | Updated bio/SEO copy; added `accident-insurance` and `condo-living` services; copyright fix |
| `src/assets/config/app.config.ceb.json` | NEW full Cebuano translation; added missing services in this session |
| `src/assets/config/app.config.zh.json` | NEW full Chinese translation; added missing services in this session |
| `CLAUDE.md` | Updated to reflect current state of project (this file) |
