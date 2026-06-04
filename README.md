<<<<<<< HEAD
# ia-marketing — Personal Agent Website

A production-ready Angular 19 static site for a dual-role professional: licensed **insurance agent** and **real estate sales associate**. Fully configurable via a single JSON file, deployable to GitHub Pages.

---

## Tech stack

| Concern | Choice |
|---|---|
| Framework | Angular 19, standalone components, signals |
| Styling | SCSS per component, CSS custom properties |
| Routing | HashLocationStrategy (GitHub Pages compatible) |
| Images | `NgOptimizedImage` throughout |
| Forms | Reactive Forms + mailto submission |
| SEO | `SeoService`, JSON-LD structured data |
| Hosting | GitHub Pages (static, front-end only) |

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Serve locally (http://localhost:4200)
npm start

# 3. Production build (local preview)
npm run build
npx http-server dist/ia-marketing/browser
```

---

## Personalisation guide

**All personal content lives in one file:**

```
src/assets/config/app.config.json
```

Open it and update these key fields:

| Field | Description |
|---|---|
| `agentName` | Full legal name shown in headings and SEO |
| `nickname` | Informal name shown in hero section |
| `tagline` | One-line value proposition |
| `profilePictureUrl` | Path to main profile photo (place in `src/assets/images/`) |
| `bio` | Short bio paragraph on the home page |
| `richTextAbout` | Full HTML biography for the About page |
| `email` | Enquiry mailto recipient |
| `phone` | Displayed phone number |
| `whatsappNumber` | Digits only, e.g. `15551234567` |
| `facebookMessengerUrl` | Full `https://m.me/…` URL |
| `services[]` | Array of service objects (see below) |
| `testimonials[]` | Array of client testimonials |
| `licences[]` | Array of credential strings |

### Adding a service

```jsonc
{
  "id": "unique-slug",
  "title": "Service Name",
  "imageUrl": "assets/images/service-name.jpg",
  "imageAlt": "Descriptive alt text",
  "description": "Up to 500 characters of description.",
  "type": "insurance"   // or "realestate"
}
```

### Adding a testimonial

```jsonc
{
  "id": "t7",
  "name": "Client Full Name",
  "avatarUrl": "assets/images/avatar-client.jpg",
  "avatarAlt": "Client name headshot",
  "rating": 5,
  "text": "Review text up to 1000 characters.",
  "date": "June 2026"
}
```

---

## Images

Place all images in `src/assets/images/`. The config references them with relative paths like `assets/images/filename.jpg`.

Recommended sizes:

| Image | Dimensions |
|---|---|
| Profile photo (hero) | 480 × 560 px |
| Secondary profile photo | 420 × 500 px |
| Logo | SVG or 280 × 80 px PNG |
| Service card images | 800 × 480 px |
| Avatar images | 96 × 96 px |

---

## Colour customisation

Edit `src/styles/_tokens.scss` and change the CSS custom property values under `:root`:

```scss
:root {
  --color-primary: #1e6fa8;   // main brand colour
  --color-accent:  #d4742e;   // CTA button colour
}
```

Dark-mode overrides are in the `[data-theme='dark']` block in the same file.

---

## Deploying to GitHub Pages

### Automatic (GitHub Actions)

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages** and set source to **GitHub Actions**.
3. Push to `main` — the workflow at `.github/workflows/deploy.yml` builds and deploys automatically.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

> **Important:** update the `build:gh` script in `package.json` to match your repo name:
> ```json
> "build:gh": "ng build --base-href /<your-repo-name>/"
> ```

### Manual

```bash
# Build with your repo name as base href
ng build --base-href /your-repo-name/

# Deploy using the gh-pages npm package
npx gh-pages -d dist/ia-marketing/browser
```

---

## Project structure

```
src/
  app/
    core/services/        config.service.ts, seo.service.ts
    shared/
      components/         header, footer, accessibility-widget,
                          testimonial-card, service-card, star-rating,
                          enquiry-form, quick-contact-bar
      models/             config.model.ts
    pages/                home, services, about, enquire
    app.component.*
    app.routes.ts
    app.config.ts
  assets/config/          app.config.json  ← edit this
  styles/                 _tokens.scss, _reset.scss, styles.scss
```

---

## Accessibility features

- Skip-to-main link as first body element
- `[data-theme="dark"]` dark mode, persisted to `localStorage`
- `[data-font-size="large"]` large-text mode (20 px base), persisted
- All form inputs have associated `<label>`
- `StarRatingComponent` uses `role="img"` with `aria-label`
- Focus-visible outlines on all interactive elements
- Semantic HTML throughout: `<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`, `<nav>`

---

## Enquiry form

The form constructs a `mailto:` link with all fields pre-filled and opens the user's default email client. No server is required.

**Subject format:** `Enquiry: {type} — {name}`

To change the recipient, update `email` in `app.config.json`.
=======
# florarcilla.github.io
My personal website
>>>>>>> 3fcdf2ded6496ae707a02e6c89c5fb7eacc7badd
