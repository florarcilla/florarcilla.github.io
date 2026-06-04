# CLAUDE.md — ia-marketing project context

> Keep this file updated as the project evolves. It is the single source of truth for AI assistants continuing work on this codebase.

---

## 1. What this project is

A static Angular 19 SPA for **Flor D. Arcilla** — a dual-role professional:

| Role | Company |
|------|---------|
| Licensed Insurance Agent | PruLife UK (License #70111974, since 2020) |
| Real Estate Sales Associate | ProFriends (License #RE-2014-77302, since 2019) |

The site is hosted on **GitHub Pages** via `HashLocationStrategy`. All dynamic content is driven by two JSON config files (no backend, no API). The build output is fully static.

**Target audiences:** Filipino families locally and OFWs abroad looking for insurance or real estate investment.

---

## 2. Key constraints & decisions

- **Never modify existing text content in `app.config.*.json`** — the agent is still writing copy. Only ADD new fields.
- **No em dashes (`—`) in any user-facing strings** across the entire system. Use a regular hyphen-minus (`-`) or reword the sentence instead. This applies to config JSON values, HTML templates, TypeScript strings, and SCSS `content` properties.
- **No backend / SSR** — everything must work as a static SPA.
- **`HashLocationStrategy`** — all routes are `/#/route`. This affects canonical URLs, hreflang, and sitemap entries.
- **Angular emulated view encapsulation** — component SCSS gets `[_ngcontent-xxx]` scoping. SVG child elements (`<text>`, `<tspan>`) cannot be targeted from component SCSS. Global SCSS partials (`src/styles/`) are unscoped and must be used for SVG styling.
- **Dart Sass 3** — use `@use`/`@forward`, never `@import`. SCSS variables live in `src/styles/_vars.scss`.
- **Angular 19 signals** — prefer `signal()`, `computed()`, `@HostListener` over `Observable` chains where practical.
- **Standalone components** — no NgModules; every component declares its own `imports: []`.

---

## 3. Project structure

```
src/
├── app/
│   ├── app.component.ts          # Root: SEO init, JSON-LD injection, scroll-to-top
│   ├── app.routes.ts             # 5 routes: /, /services, /about, /enquire, /gallery
│   ├── app.config.ts             # provideRouter, provideHttpClient, HashLocationStrategy
│   ├── core/services/
│   │   ├── config.service.ts     # Loads app.config.{lang}.json via APP_INITIALIZER
│   │   ├── seo.service.ts        # Updates all meta/OG/Twitter tags on NavigationEnd
│   │   └── language.service.ts  # Manages EN/TL language switching
│   ├── pages/
│   │   ├── home/
│   │   ├── services/
│   │   ├── about/
│   │   ├── enquire/              # Includes <app-quick-contact-bar /> for WA/Messenger/Call
│   │   └── gallery/             # Manifest-driven photo/video gallery
│   └── shared/
│       ├── components/
│       │   ├── header/           # Burger (left), inline SVG logo, desktop nav, mobile drawer
│       │   ├── footer/           # Email modal (service picker), social links, quick links
│       │   ├── accessibility-widget/  # Theme/font/contrast panel, click-outside to close
│       │   ├── quick-contact-bar/    # Fixed FABs on mobile (WhatsApp, Messenger, Call)
│       │   ├── service-card/
│       │   ├── testimonial-card/
│       │   ├── star-rating/
│       │   └── enquiry-form/
│       └── models/
│           └── config.model.ts   # Full TypeScript types for AppConfig, UiStrings, etc.
├── assets/
│   ├── config/
│   │   ├── app.config.en.json    # English content
│   │   └── app.config.tl.json   # Tagalog content
│   └── gallery/                 # Media files + manifest.json (auto-generated)
├── styles/
│   ├── styles.scss               # Entry: @use 'tokens'; @use 'reset'; @use 'logo';
│   ├── _vars.scss                # SCSS variables ($space-*, $font-size-*, $bp-*, etc.)
│   ├── _tokens.scss              # CSS custom properties (--color-*, --shadow-*, etc.)
│   ├── _reset.scss               # Base reset
│   └── _logo.scss                # ⚠️ GLOBAL unscoped SVG logo color rules (see §6)
├── index.html                    # Full static meta fallbacks, OG, Twitter, hreflang
├── robots.txt                    # Allows 20+ crawlers, disallows assets/config/
├── sitemap.xml                   # 5 URLs with hreflang alternates
└── site.webmanifest              # PWA manifest
scripts/
└── generate-gallery-manifest.js  # Pre-build: scans assets/gallery/, writes manifest.json
```

---

## 4. Config files

### Location
```
src/assets/config/app.config.en.json
src/assets/config/app.config.tl.json
```

### How they load
`ConfigService` fetches the correct file via `APP_INITIALIZER` based on `LanguageService.current` (persisted in `localStorage` as `'lang'`). After load, `this.configService.config` is the typed `AppConfig` object.

### Key top-level fields
| Field | Purpose |
|-------|---------|
| `agentName` | "Flor D. Arcilla" |
| `email` | fongarcilla@gmail.com |
| `phone` | +639055584891 |
| `whatsappNumber` | 639055584891 (no +) |
| `facebookMessengerUrl` | https://m.me/florarcilla |
| `siteUrl` | Used for canonical/OG/hreflang URLs |
| `twitterHandle` | Optional `@handle` |
| `keywords` | Array of SEO keywords |
| `seoPages` | Object with `home/services/about/enquire/gallery` → `{ title, description }` |
| `ui` | All user-facing strings (see `UiStrings` interface) |
| `ui.emailModal` | Pre-filled email modal strings (subjects + bodies per service type) |
| `ui.gallery` | Gallery page UI strings |
| `ui.whatsappModal` | WhatsApp service-picker modal strings |

### ⚠️ Rule: never change existing text values
Only **add new keys**. The agent is actively editing the copy.

---

## 5. Routing

```typescript
// HashLocationStrategy — all URLs are /#/path
''         → HomeComponent       (lazy)
'services' → ServicesComponent   (lazy)
'about'    → AboutComponent      (lazy)
'enquire'  → EnquireComponent    (lazy)
'gallery'  → GalleryComponent    (lazy)
'**'       → redirectTo: ''
```

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

**Examples:**
```
insurance_june_2025.jpg
realestate_march_2025_01.jpg
realestate_march_2025_02.jpg
general_december_2024_teambuilding.jpg
```

### Scripts
```bash
npm run generate-gallery      # manual re-scan
npm start                     # auto-runs manifest gen via prestart
npm run build                 # auto-runs manifest gen via prebuild
npm run build:gh              # GitHub Pages build with --base-href /ia-marketing/
```

### Lightbox
- Click any thumbnail → lightbox opens, `body.overflow = 'hidden'`
- Keyboard: `Escape` close, `←/→` navigate
- `@HostListener('document:keydown')` in `GalleryComponent`
- `ngOnDestroy()` restores `body.style.overflow`

### Placeholder
Failed/missing images show an inline SVG logo placeholder styled via `_logo.scss` (`.gallery-thumb__placeholder`).

---

## 8. SEO architecture

### Static fallbacks (`src/index.html`)
All critical meta tags are hard-coded in `index.html` for bots that don't execute JS.

### Dynamic updates (`SeoService`)
On every `NavigationEnd`, `SeoService.applyMeta(pageKey)` sets:
- `<title>`
- `description`, `keywords`, `author`, `robots`, `theme-color`
- Geo signals: `geo.region=PH`, `geo.country=Philippines`, `ICBM` coordinates
- Open Graph: `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`
- Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="en/tl/x-default">`

### JSON-LD (`AppComponent.injectJsonLd()`)
Injected once on app init into `<head>` as `application/ld+json`. Schema `@graph` contains:
- `Person` + `ProfessionalService` (merged type)
- `WebSite` with `SearchAction`
- `BreadcrumbList` for all 5 pages

### SEO page data
```json
"seoPages": {
  "home":     { "title": "...", "description": "..." },
  "services": { "title": "...", "description": "..." },
  "about":    { "title": "...", "description": "..." },
  "enquire":  { "title": "...", "description": "..." },
  "gallery":  { "title": "...", "description": "..." }
}
```

### Other SEO files
| File | Purpose |
|------|---------|
| `src/robots.txt` | Allows Googlebot, Bingbot, GPTBot, ClaudeBot, 15+ others; blocks `assets/config/` |
| `src/sitemap.xml` | 5 URLs × 2 hreflang alternates (en + tl) |
| `src/site.webmanifest` | PWA manifest with brand purple `#7459ca` |

---

## 9. Email modal (footer)

When the user clicks the email address in the footer:
1. A service-picker modal appears (same UX pattern as the WhatsApp modal)
2. User picks "Insurance" or "Real Estate"
3. A `mailto:` URL is built with pre-filled `subject` and `body` from `config.ui.emailModal`
4. Opens in `_self` via `document.defaultView.open()`

**Config keys needed** (both EN and TL):
```json
"ui": {
  "emailModal": {
    "title": "...",
    "subtitle": "...",
    "insurance": "...",
    "realestate": "...",
    "cancel": "...",
    "subjectInsurance": "...",
    "subjectRealestate": "...",
    "bodyInsurance": "...",
    "bodyRealestate": "..."
  }
}
```

---

## 10. Accessibility widget

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

## 11. Header navigation

### Mobile layout
- Burger button on the **left** (leftmost item in the bar)
- "Book Consultation" CTA always visible in the sticky top bar
- Language selector lives **only inside the mobile drawer** (bottom-right, with top border separator)
- Drawer slides in from the **left**

### Desktop layout
- Full horizontal nav: Home · Services · Gallery · About · Book Consultation
- Language selector in top bar (right side)
- No burger

### Language toggle
Two separate elements in the HTML with different CSS classes:
- `.lang-toggle--desktop` — hidden on mobile, shown on desktop
- `.drawer-lang` — hidden on desktop, shown at bottom of mobile drawer

This avoids the double-selector CSS specificity bug.

---

## 12. Scroll to top

`AppComponent.initScrollToTop()` subscribes to `NavigationEnd` events and calls:
```typescript
this.document.defaultView?.scrollTo({ top: 0, behavior: 'instant' });
```
Called in `ngOnInit()` once.

---

## 13. Quick-contact FABs

`QuickContactBarComponent` renders:
- **Desktop**: horizontal row of buttons (WhatsApp, Messenger, Call)
- **Mobile**: `position: fixed` circular FABs in bottom-right corner

Used on both the **enquire page** and embedded in **home page**.

WhatsApp button opens a service-picker modal (insurance vs realestate) that sends a pre-filled WhatsApp message via `https://wa.me/{number}?text=...`.

---

## 14. SCSS conventions

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

## 15. Lighthouse / performance notes

### Running accurate Lighthouse tests
`ng serve` (default) serves a **development build** — unminified JS, no tree-shaking.
Lighthouse on localhost dev build will always flag "Minify JS / reduce unused JS" because that is expected.
For an accurate score, test against the production build:

```bash
npm run start:prod    # serves production bundle on localhost
# OR
npm run build:gh      # build to dist/, serve with any static server
```

Production build enables: minification, tree-shaking, code-splitting, source-map-free output.

### WebP images
The hero uses a `<picture>` element with a WebP `<source>` and JPEG fallback.
WebP files are NOT auto-generated — you must run this manually when adding/updating images:

```bash
npm install --save-dev sharp   # one-time install
npm run generate-webp          # converts all JPEG/PNG in assets/images/ to WebP
```

The script only re-converts files newer than their `.webp` counterpart, so it's safe to run repeatedly.

### Fixed in last Lighthouse pass
| Issue | Fix applied |
|-------|------------|
| Hero image not in initial document | Added `<link rel="preload" as="image" href="assets/images/flor_banner.jpg" fetchpriority="high">` to index.html |
| Hero image modern format | Switched to `<picture>` with WebP source; `generate-webp.js` creates WebP files |
| CLS 0.340 on footer/header logo | Added `width="108" height="36"` to both logo SVGs; split Google Fonts — DM Sans uses `display=swap`, Playfair Display uses `display=optional` to prevent font-swap layout shift |
| Network dependency chain | Added `<link rel="preload" as="fetch" href="assets/config/app.config.en.json">` so config fetch starts before Angular boots |
| Enquire CTA contrast fail | Changed `--color-accent` from `#d4742e` (3.3:1) to `#9c520d` (5.8:1 vs white) |
| WhatsApp button contrast fail | Changed from `#25D366` (1.9:1) to `#1a7a3e` (5.4:1 vs white) |
| Messenger button contrast fail | Changed from `#0084FF` (3.4:1) to `#0057a8` (7.2:1 vs white) |

## 15. Known issues / future work

### Suggested improvements (not yet built)
- [ ] **Contact form backend** — enquiry form currently has no submit handler wired to an actual service (email/Formspree/etc.)
- [ ] **Gallery video support** — `gallery.component.html` may need `<video>` element rendering for `.mp4`/`.webm` files (the TS handles them but verify the template)
- [ ] **Gallery lazy loading** — thumbnails could use `loading="lazy"` and/or `IntersectionObserver` for large collections
- [ ] **OG image** — currently uses `profilePictureUrl` (portrait photo). A dedicated 1200×630 OG image would perform better on social shares
- [ ] **Sitemap hash URLs** — `sitemap.xml` uses `/#/` hash URLs which some crawlers treat as fragments. Consider if this matters for the target use case
- [ ] **Language-aware canonical** — hreflang currently points all alternates to the root `/`. Per-page language URLs are not implemented
- [ ] **Animation on gallery filter change** — sections/items reappear with no transition when filters change
- [ ] **app.routes.ts `data` fields** — route-level `data.title` / `data.description` are stale placeholders (original scaffolding). `SeoService` uses `config.seoPages` instead — the route data fields can be cleaned up

### Content still in progress (agent is editing)
- `app.config.en.json` — text copy being refined
- `app.config.tl.json` — Tagalog translation being refined

---

## 16. Running the project

```bash
# Development
npm start                  # generates gallery manifest then ng serve

# Production build (GitHub Pages)
npm run build:gh           # generates manifest + ng build --base-href /ia-marketing/

# Manual gallery manifest regeneration
npm run generate-gallery
```

**Adding gallery images:**
1. Drop files into `src/assets/gallery/`
2. Use the filename format: `{type}_{month}_{year}[_{seq}].{ext}`
3. Run `npm run generate-gallery` (or just `npm start` which does it automatically)

---

## 17. File change log (last session)

| File | What changed |
|------|-------------|
| `src/app/app.component.ts` | Added `initScrollToTop()`, full JSON-LD `@graph` schema |
| `src/app/app.routes.ts` | Added `/gallery` route |
| `src/app/core/services/seo.service.ts` | Full rewrite — config-driven meta for all 5 pages |
| `src/app/pages/gallery/gallery.component.ts` | New component — manifest-driven gallery |
| `src/app/pages/gallery/gallery.component.html` | New template |
| `src/app/pages/gallery/gallery.component.scss` | New styles |
| `src/app/pages/enquire/enquire.component.ts` | Added `QuickContactBarComponent` |
| `src/app/shared/components/header/header.component.html` | Burger left, inline SVG, dual lang selectors, Gallery nav link |
| `src/app/shared/components/header/header.component.scss` | Mobile slide-from-left, `.drawer-lang`, `.lang-toggle--desktop` rules |
| `src/app/shared/components/footer/footer.component.ts` | Email modal signals + `selectService()` |
| `src/app/shared/components/footer/footer.component.html` | Email `<a>` → `<button>`, modal markup |
| `src/app/shared/components/footer/footer.component.scss` | `.footer__email-btn`, `.email-modal-*` styles |
| `src/app/shared/components/accessibility-widget/accessibility-widget.component.ts` | Added `ElementRef` + `@HostListener` click-outside |
| `src/app/shared/models/config.model.ts` | Added `SeoPage`, `GalleryItem`, `GalleryItemType`, `emailModal` UI strings, `seoPages`, `keywords`, `siteUrl`, `twitterHandle` |
| `src/styles/_logo.scss` | NEW — global SVG logo + gallery placeholder color rules |
| `src/styles/styles.scss` | Added `@use 'logo'` |
| `src/assets/config/app.config.en.json` | Added `siteUrl`, `keywords`, `seoPages`, `ui.emailModal`, `ui.gallery`, `ui.nav.gallery` |
| `src/assets/config/app.config.tl.json` | Same additions in Tagalog |
| `src/index.html` | Full rewrite — static meta, OG, Twitter, hreflang, webmanifest link |
| `src/robots.txt` | NEW |
| `src/sitemap.xml` | NEW |
| `src/site.webmanifest` | NEW |
| `angular.json` | Added robots.txt, sitemap.xml, site.webmanifest to assets array |
| `package.json` | Added `generate-gallery`, `prestart`, `prebuild`, `build:gh` scripts |
| `scripts/generate-gallery-manifest.js` | NEW — pre-build manifest generator |
