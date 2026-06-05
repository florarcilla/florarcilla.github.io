import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withNoHttpTransferCache,
  withViewTransitions
} from "./chunk-CEKISYYO.js";
import {
  AnalyticsService
} from "./chunk-P2MAUDGB.js";
import {
  Component,
  ConfigService,
  DOCUMENT,
  ElementRef,
  HostListener,
  Injectable,
  LanguageService,
  Renderer2,
  SUPPORTED_LANGS,
  filter,
  inject,
  map,
  provideAppInitializer,
  provideHttpClient,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MNI4DMSU.js";

// src/app/core/guards/unsaved-enquiry.guard.ts
var unsavedEnquiryGuard = (component) => {
  if (!component.hasUnsavedMessage())
    return true;
  return window.confirm(component.leaveConfirmMessage);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-4L6P265A.js").then((m) => m.HomeComponent),
    data: {
      title: "Home",
      description: "Flor D. Arcilla \u2013 licensed insurance agent and real estate sales associate. Protecting families and growing wealth across the region."
    }
  },
  {
    path: "services",
    loadComponent: () => import("./chunk-BZ3IIIFK.js").then((m) => m.ServicesComponent),
    data: {
      title: "Services",
      description: "Life, health, home and auto insurance plus full-service home buying, selling, and investment real estate. See all services offered by Flor D. Arcilla."
    }
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-XJXVR7ZM.js").then((m) => m.AboutComponent),
    data: {
      title: "About Flor D. Arcilla",
      description: "Learn about Flor D. Arcilla \u2013 10+ years of combined insurance and real estate experience, CFP\xAE, and ABR\xAE credentials."
    }
  },
  {
    path: "enquire",
    loadComponent: () => import("./chunk-N4CR6VYB.js").then((m) => m.EnquireComponent),
    canDeactivate: [unsavedEnquiryGuard],
    data: {
      title: "Enquire",
      description: "Get in touch with Flor D. Arcilla for insurance or real estate enquiries. Quick response guaranteed within one business day."
    }
  },
  {
    path: "gallery",
    loadComponent: () => import("./chunk-766V42C6.js").then((m) => m.GalleryComponent),
    data: {
      title: "Gallery",
      description: "A visual journey through milestones in insurance and real estate."
    }
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideClientHydration(withNoHttpTransferCache()),
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.load();
    })
  ]
};

// src/app/core/services/seo.service.ts
var PATH_TO_KEY = {
  "": "home",
  "services": "services",
  "about": "about",
  "enquire": "enquire",
  "gallery": "gallery"
};
var SeoService = class _SeoService {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.router = inject(Router);
    this.cfgSvc = inject(ConfigService);
    this.langSvc = inject(LanguageService);
  }
  init() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map((e) => {
      const urlPath = e.urlAfterRedirects.replace(/^[/#]+/, "").split("?")[0].split("/")[0];
      return {
        pageKey: PATH_TO_KEY[urlPath] ?? "home",
        url: e.urlAfterRedirects
      };
    })).subscribe(({ pageKey, url }) => {
      this.applyMeta(pageKey);
      this.trackPageView(url);
    });
  }
  // ─── Apply all meta tags for the current page ─────────────────────────────
  applyMeta(pageKey) {
    const c = this.cfgSvc.config;
    const lang = this.langSvc.current;
    const seoPage = c.seoPages?.[pageKey] ?? c.metaDefaults;
    const title = seoPage.title;
    const desc = seoPage.description;
    const siteUrl = (c.siteUrl ?? "").replace(/\/$/, "");
    const canonical = pageKey === "home" ? `${siteUrl}/` : `${siteUrl}/${pageKey}`;
    const ogImage = `${siteUrl}/${c.profilePictureUrl}`;
    const keywords = (c.keywords ?? []).join(", ");
    this.doc.title = title;
    this.setMeta("name", "description", desc);
    this.setMeta("name", "keywords", keywords);
    this.setMeta("name", "author", c.agentName);
    this.setMeta("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    this.setMeta("name", "theme-color", "#7459ca");
    this.setMeta("name", "application-name", c.agentName);
    this.setMeta("name", "geo.region", "PH");
    this.setMeta("name", "geo.country", "Philippines");
    this.setMeta("name", "geo.placename", "Philippines");
    this.setMeta("name", "ICBM", "12.8797, 121.7740");
    this.setMeta("property", "og:type", "website");
    this.setMeta("property", "og:site_name", c.agentName);
    this.setMeta("property", "og:title", title);
    this.setMeta("property", "og:description", desc);
    this.setMeta("property", "og:url", canonical);
    this.setMeta("property", "og:image", ogImage);
    this.setMeta("property", "og:image:width", "1200");
    this.setMeta("property", "og:image:height", "630");
    this.setMeta("property", "og:image:alt", c.profilePictureAlt);
    const ogLocaleMap = { en: "en_PH", tl: "tl_PH", ceb: "ceb_PH", zh: "zh_CN" };
    this.setMeta("property", "og:locale", ogLocaleMap[lang] ?? "en_PH");
    this.setMeta("name", "twitter:card", "summary_large_image");
    this.setMeta("name", "twitter:title", title);
    this.setMeta("name", "twitter:description", desc);
    this.setMeta("name", "twitter:image", ogImage);
    this.setMeta("name", "twitter:image:alt", c.profilePictureAlt);
    if (c.twitterHandle) {
      this.setMeta("name", "twitter:site", c.twitterHandle);
      this.setMeta("name", "twitter:creator", c.twitterHandle);
    }
    this.setLink("canonical", canonical);
    this.setHreflang("en", `${siteUrl}/`);
    this.setHreflang("tl", `${siteUrl}/`);
    this.setHreflang("ceb", `${siteUrl}/`);
    this.setHreflang("zh-CN", `${siteUrl}/`);
    this.setHreflang("x-default", `${siteUrl}/`);
  }
  // ─── GA4 page-view tracking ───────────────────────────────────────────────
  trackPageView(url) {
    if (typeof gtag === "undefined")
      return;
    const c = this.cfgSvc.config;
    const siteUrl = (c.siteUrl ?? "").replace(/\/$/, "");
    const pageKey = url.replace(/^[/#]+/, "").split("?")[0].split("/")[0];
    const seoPage = c.seoPages?.[PATH_TO_KEY[pageKey] ?? "home"] ?? c.metaDefaults;
    gtag("event", "page_view", {
      page_title: seoPage.title,
      page_location: `${siteUrl}${url}`,
      page_path: url
    });
  }
  // ─── DOM helpers ──────────────────────────────────────────────────────────
  setMeta(attrKey, attrVal, content) {
    const sel = `meta[${attrKey}="${attrVal}"]`;
    let el = this.doc.querySelector(sel);
    if (!el) {
      el = this.doc.createElement("meta");
      el.setAttribute(attrKey, attrVal);
      this.doc.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }
  setLink(rel, href) {
    const sel = `link[rel="${rel}"]:not([hreflang])`;
    let el = this.doc.querySelector(sel);
    if (!el) {
      el = this.doc.createElement("link");
      el.setAttribute("rel", rel);
      this.doc.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }
  setHreflang(hreflang, href) {
    const sel = `link[rel="alternate"][hreflang="${hreflang}"]`;
    let el = this.doc.querySelector(sel);
    if (!el) {
      el = this.doc.createElement("link");
      el.setAttribute("rel", "alternate");
      el.setAttribute("hreflang", hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }
  static {
    this.\u0275fac = function SeoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/header/header.component.ts
var _c0 = () => ({ exact: true });
var _forTrack0 = ($index, $item) => $item.code;
function HeaderComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function HeaderComponent_For_31_Template_button_click_0_listener() {
      const lang_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchLang(lang_r2.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("drawer-lang__btn--active", ctx_r2.langService.current === lang_r2.code);
    \u0275\u0275attribute("aria-pressed", ctx_r2.langService.current === lang_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r2.label);
  }
}
function HeaderComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", lang_r4.code)("selected", lang_r4.code === ctx_r2.langService.current);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r4.label);
  }
}
function HeaderComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMenu());
    });
    \u0275\u0275elementEnd();
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.configService = inject(ConfigService);
    this.analytics = inject(AnalyticsService);
    this.langService = inject(LanguageService);
    this.config = this.configService.config;
    this.ui = this.config.ui;
    this.menuOpen = signal(false);
    this.scrolled = signal(false);
    this.langs = SUPPORTED_LANGS;
  }
  onScroll() {
    this.scrolled.set(window.scrollY > 10);
  }
  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
  trackBookConsultation() {
    this.analytics.trackCta({
      cta_name: "Book Consultation",
      cta_location: "header",
      cta_type: "navigation"
    });
  }
  switchLang(code) {
    this.langService.switch(code);
  }
  switchLangFromEvent(event) {
    const value = event.target.value;
    this.langService.switch(value);
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function HeaderComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 39, vars: 15, consts: [[1, "header"], [1, "container", "header__inner"], ["type", "button", "aria-controls", "primary-nav", "aria-label", "Toggle navigation menu", 1, "header__burger", 3, "click"], [1, "burger-bar"], ["routerLink", "/", 1, "header__logo", 3, "click"], ["viewBox", "0 0 600 200", "width", "108", "height", "36", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", "focusable", "false", 1, "header__logo-svg"], ["x", "300", "y", "158", "text-anchor", "middle", "font-family", "'Playfair Display', 'Georgia', 'Times New Roman', serif", "font-weight", "900", "font-size", "140", "letter-spacing", "-4", "fill", "currentColor"], ["fill", "currentColor", 1, "logo-dot"], ["id", "primary-nav", "aria-label", "Primary navigation", 1, "header__nav"], ["role", "list"], ["routerLink", "/", "routerLinkActive", "is-active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/about", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/gallery", "routerLinkActive", "is-active", 3, "click"], [1, "drawer-lang"], [1, "drawer-lang__label"], ["role", "group", "aria-label", "Select language", 1, "drawer-lang__buttons"], ["type", "button", 1, "drawer-lang__btn", 3, "drawer-lang__btn--active"], [1, "header__actions"], [1, "lang-select", "lang-select--desktop", 3, "change"], [3, "value", "selected"], ["routerLink", "/enquire", 1, "btn", "btn--accent", "header__cta", 3, "click"], ["aria-hidden", "true", 1, "header__overlay"], ["type", "button", 1, "drawer-lang__btn", 3, "click"], ["aria-hidden", "true", 1, "header__overlay", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_2_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(3, "span", 3)(4, "span", 3)(5, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "a", 4);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_6_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 5)(8, "text", 6);
        \u0275\u0275text(9, "Flor");
        \u0275\u0275elementStart(10, "tspan", 7);
        \u0275\u0275text(11, ".");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "nav", 8)(13, "ul", 9)(14, "li")(15, "a", 10);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_15_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li")(18, "a", 11);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_18_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li")(21, "a", 12);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_21_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li")(24, "a", 13);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_24_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 14)(27, "span", 15);
        \u0275\u0275text(28, "Language");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 16);
        \u0275\u0275repeaterCreate(30, HeaderComponent_For_31_Template, 2, 4, "button", 17, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 18)(33, "select", 19);
        \u0275\u0275listener("change", function HeaderComponent_Template_select_change_33_listener($event) {
          return ctx.switchLangFromEvent($event);
        });
        \u0275\u0275repeaterCreate(34, HeaderComponent_For_35_Template, 2, 3, "option", 20, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "a", 21);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_36_listener() {
          ctx.closeMenu();
          return ctx.trackBookConsultation();
        });
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, HeaderComponent_Conditional_38_Template, 1, 0, "div", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("header--scrolled", ctx.scrolled());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-expanded", ctx.menuOpen());
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", ctx.config.agentName + " - Home");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("header__nav--open", ctx.menuOpen());
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(14, _c0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.ui.nav.home);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.ui.nav.services);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.ui.nav.about);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.ui.nav.gallery);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.langs);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", "Language: " + ctx.langService.current.toUpperCase());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.langs);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.ui.nav.bookConsultation, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.menuOpen() ? 38 : -1);
      }
    }, dependencies: [RouterLink, RouterLinkActive], styles: [`

.header[_ngcontent-%COMP%] {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background-color: var(--color-surface);
  border-bottom: 1px solid transparent;
  transition:
    border-color 250ms ease,
    box-shadow 250ms ease,
    background-color 250ms ease;
}
.header--scrolled[_ngcontent-%COMP%] {
  border-color: var(--color-border);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}
.header__inner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
}
.header__burger[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0.5rem;
  border-radius: 8px;
  flex-shrink: 0;
  order: -1;
}
.header__burger[_ngcontent-%COMP%]:hover {
  background-color: var(--color-surface-alt);
}
.header__logo[_ngcontent-%COMP%] {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.header__logo-svg[_ngcontent-%COMP%] {
  height: 44px;
  width: auto;
  display: block;
}
.header__nav[_ngcontent-%COMP%] {
  flex: 1;
}
.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: var(--color-text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 150ms ease, background-color 150ms ease;
}
.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  text-decoration: none;
}
.header__nav[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {
  color: var(--color-primary);
  font-weight: 600;
}
.header__actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  margin-left: auto;
}
.header__cta[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  white-space: nowrap;
}
.header__overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: var(--header-height) 0 0 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
}
.drawer-lang[_ngcontent-%COMP%] {
  display: none;
}
.lang-select[_ngcontent-%COMP%] {
  appearance: none;
  -webkit-appearance: none;
  padding: 0.25rem 2rem 0.25rem 0.75rem;
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-surface);
  color: var(--color-text);
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 14px;
  transition: border-color 150ms ease;
}
.lang-select[_ngcontent-%COMP%]:hover {
  border-color: var(--color-primary);
}
.lang-select[_ngcontent-%COMP%]:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 1px;
  border-color: var(--color-primary);
}
.lang-select--desktop[_ngcontent-%COMP%] {
  display: block;
}
.burger-bar[_ngcontent-%COMP%] {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition: transform 150ms ease, opacity 150ms ease;
}
@media (max-width: 767px) {
  .header__burger[_ngcontent-%COMP%] {
    display: flex;
  }
  .header__nav[_ngcontent-%COMP%] {
    position: fixed;
    top: var(--header-height);
    left: 0;
    bottom: 0;
    width: min(320px, 85vw);
    background-color: var(--color-surface);
    border-right: 1px solid var(--color-border);
    z-index: 100;
    transform: translateX(-100%);
    transition: transform 250ms ease;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }
  .header__nav--open[_ngcontent-%COMP%] {
    transform: translateX(0);
  }
  .header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: stretch;
  }
  .header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
    font-size: 1.1rem;
    padding: 1rem;
  }
  .lang-select--desktop[_ngcontent-%COMP%] {
    display: none;
  }
  .drawer-lang[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }
  .drawer-lang__label[_ngcontent-%COMP%] {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-muted);
  }
  .drawer-lang__buttons[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .drawer-lang__btn[_ngcontent-%COMP%] {
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1.5px solid var(--color-border);
    background-color: var(--color-surface-alt);
    color: var(--color-text-muted);
    font-size: 0.85rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition:
      border-color 150ms ease,
      background-color 150ms ease,
      color 150ms ease;
  }
  .drawer-lang__btn[_ngcontent-%COMP%]:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  .drawer-lang__btn--active[_ngcontent-%COMP%] {
    border-color: var(--color-primary);
    background-color: var(--color-primary-light);
    color: var(--color-primary);
  }
}
/*# sourceMappingURL=header.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [RouterLink, RouterLinkActive], template: `<!-- src/app/shared/components/header/header.component.html -->
<header class="header" [class.header--scrolled]="scrolled()">
  <div class="container header__inner">

    <!-- \u2500\u2500 Burger (leftmost on mobile) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <button
      class="header__burger"
      type="button"
      [attr.aria-expanded]="menuOpen()"
      aria-controls="primary-nav"
      aria-label="Toggle navigation menu"
      (click)="toggleMenu()"
    >
      <span class="burger-bar"></span>
      <span class="burger-bar"></span>
      <span class="burger-bar"></span>
    </button>

    <!-- \u2500\u2500 Logo \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <a class="header__logo" routerLink="/" (click)="closeMenu()" [attr.aria-label]="config.agentName + ' - Home'">
      <svg class="header__logo-svg" viewBox="0 0 600 200" width="108" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <text
          x="300" y="158"
          text-anchor="middle"
          font-family="'Playfair Display', 'Georgia', 'Times New Roman', serif"
          font-weight="900"
          font-size="140"
          letter-spacing="-4"
          fill="currentColor"
        >Flor<tspan class="logo-dot" fill="currentColor">.</tspan></text>
      </svg>
    </a>

    <!-- \u2500\u2500 Primary nav + mobile drawer lang buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <nav id="primary-nav" class="header__nav" aria-label="Primary navigation" [class.header__nav--open]="menuOpen()">
      <ul role="list">
        <li>
          <a routerLink="/" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">{{ ui.nav.home }}</a>
        </li>
        <li>
          <a routerLink="/services" routerLinkActive="is-active" (click)="closeMenu()">{{ ui.nav.services }}</a>
        </li>
        <li>
          <a routerLink="/about" routerLinkActive="is-active" (click)="closeMenu()">{{ ui.nav.about }}</a>
        </li>
        <li>
          <a routerLink="/gallery" routerLinkActive="is-active" (click)="closeMenu()">{{ ui.nav.gallery }}</a>
        </li>
      </ul>

      <!--
        Mobile drawer language picker \u2014 pill buttons, no dropdown.
        Buttons sit above the viewport fold so they never need to expand downward.
        Only visible in mobile via CSS.
      -->
      <div class="drawer-lang">
        <span class="drawer-lang__label">Language</span>
        <div class="drawer-lang__buttons" role="group" aria-label="Select language">
          @for (lang of langs; track lang.code) {
            <button
              class="drawer-lang__btn"
              type="button"
              [class.drawer-lang__btn--active]="langService.current === lang.code"
              [attr.aria-pressed]="langService.current === lang.code"
              (click)="switchLang(lang.code)"
            >{{ lang.label }}</button>
          }
        </div>
      </div>
    </nav>

    <!-- \u2500\u2500 Right-side actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="header__actions">
      <!--
        Desktop language dropdown \u2014 <select> with [selected] on each <option>
        so Angular correctly reflects the active lang without FormsModule.
      -->
      <select
        class="lang-select lang-select--desktop"
        (change)="switchLangFromEvent($event)"
        [attr.aria-label]="'Language: ' + langService.current.toUpperCase()"
      >
        @for (lang of langs; track lang.code) {
          <option [value]="lang.code" [selected]="lang.code === langService.current">{{ lang.label }}</option>
        }
      </select>

      <a class="btn btn--accent header__cta" routerLink="/enquire" (click)="closeMenu(); trackBookConsultation()">
        {{ ui.nav.bookConsultation }}
      </a>
    </div>

  </div>

  @if (menuOpen()) {
    <div class="header__overlay" (click)="closeMenu()" aria-hidden="true"></div>
  }
</header>
`, styles: [`/* src/app/shared/components/header/header.component.scss */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background-color: var(--color-surface);
  border-bottom: 1px solid transparent;
  transition:
    border-color 250ms ease,
    box-shadow 250ms ease,
    background-color 250ms ease;
}
.header--scrolled {
  border-color: var(--color-border);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}
.header__inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
}
.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0.5rem;
  border-radius: 8px;
  flex-shrink: 0;
  order: -1;
}
.header__burger:hover {
  background-color: var(--color-surface-alt);
}
.header__logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.header__logo-svg {
  height: 44px;
  width: auto;
  display: block;
}
.header__nav {
  flex: 1;
}
.header__nav ul {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.header__nav a {
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: var(--color-text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 150ms ease, background-color 150ms ease;
}
.header__nav a:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
  text-decoration: none;
}
.header__nav a.is-active {
  color: var(--color-primary);
  font-weight: 600;
}
.header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  margin-left: auto;
}
.header__cta {
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  white-space: nowrap;
}
.header__overlay {
  position: fixed;
  inset: var(--header-height) 0 0 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
}
.drawer-lang {
  display: none;
}
.lang-select {
  appearance: none;
  -webkit-appearance: none;
  padding: 0.25rem 2rem 0.25rem 0.75rem;
  border: 1.5px solid var(--color-border);
  border-radius: 8px;
  background-color: var(--color-surface);
  color: var(--color-text);
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 14px;
  transition: border-color 150ms ease;
}
.lang-select:hover {
  border-color: var(--color-primary);
}
.lang-select:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 1px;
  border-color: var(--color-primary);
}
.lang-select--desktop {
  display: block;
}
.burger-bar {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition: transform 150ms ease, opacity 150ms ease;
}
@media (max-width: 767px) {
  .header__burger {
    display: flex;
  }
  .header__nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    bottom: 0;
    width: min(320px, 85vw);
    background-color: var(--color-surface);
    border-right: 1px solid var(--color-border);
    z-index: 100;
    transform: translateX(-100%);
    transition: transform 250ms ease;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }
  .header__nav--open {
    transform: translateX(0);
  }
  .header__nav ul {
    flex-direction: column;
    align-items: stretch;
  }
  .header__nav a {
    font-size: 1.1rem;
    padding: 1rem;
  }
  .lang-select--desktop {
    display: none;
  }
  .drawer-lang {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }
  .drawer-lang__label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-muted);
  }
  .drawer-lang__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .drawer-lang__btn {
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1.5px solid var(--color-border);
    background-color: var(--color-surface-alt);
    color: var(--color-text-muted);
    font-size: 0.85rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition:
      border-color 150ms ease,
      background-color 150ms ease,
      color 150ms ease;
  }
  .drawer-lang__btn:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  .drawer-lang__btn--active {
    border-color: var(--color-primary);
    background-color: var(--color-primary-light);
    color: var(--color-primary);
  }
}
/*# sourceMappingURL=header.component.css.map */
`] }]
  }], null, { onScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/shared/components/header/header.component.ts", lineNumber: 17 });
})();

// src/app/shared/components/footer/footer.component.ts
var _forTrack02 = ($index, $item) => $item.href;
function FooterComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function FooterComponent_Conditional_12_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.trackSocial("Facebook"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r1.config.facebookUrl, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function FooterComponent_Conditional_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.trackSocial("Instagram"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "rect", 28)(3, "circle", 29)(4, "circle", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r1.config.instagramUrl, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275listener("click", function FooterComponent_Conditional_14_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.trackSocial("LinkedIn"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 32)(3, "rect", 33)(4, "circle", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r1.config.linkedinUrl, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_For_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", link_r5.href);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r5.label);
  }
}
function FooterComponent_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", link_r5.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r5.label);
  }
}
function FooterComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, FooterComponent_For_20_Conditional_1_Template, 2, 2, "a", 35)(2, FooterComponent_For_20_Conditional_2_Template, 2, 2, "a", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(link_r5.href.startsWith("/") ? 1 : 2);
  }
}
function FooterComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275listener("click", function FooterComponent_Conditional_29_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.trackWhatsApp());
    });
    \u0275\u0275text(1, "WhatsApp");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("href", "https://wa.me/" + ctx_r1.config.whatsappNumber, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function FooterComponent_Conditional_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    })("keydown.escape", function FooterComponent_Conditional_33_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function FooterComponent_Conditional_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 41);
    \u0275\u0275element(4, "path", 42)(5, "polyline", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 46)(11, "button", 47);
    \u0275\u0275listener("click", function FooterComponent_Conditional_33_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectService("insurance"));
    });
    \u0275\u0275elementStart(12, "span", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 49);
    \u0275\u0275element(14, "path", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "svg", 51);
    \u0275\u0275element(17, "line", 52)(18, "polyline", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 47);
    \u0275\u0275listener("click", function FooterComponent_Conditional_33_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectService("realestate"));
    });
    \u0275\u0275elementStart(20, "span", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 49);
    \u0275\u0275element(22, "path", 55)(23, "polyline", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "svg", 51);
    \u0275\u0275element(26, "line", 52)(27, "polyline", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 57);
    \u0275\u0275listener("click", function FooterComponent_Conditional_33_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.modalUi.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.modalUi.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.modalUi.subtitle);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.modalUi.insurance, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.modalUi.realestate, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.modalUi.cancel, " ");
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.configService = inject(ConfigService);
    this.analytics = inject(AnalyticsService);
    this.config = this.configService.config;
    this.ui = this.config.ui;
    this.modalUi = this.config.ui.emailModal;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.modalOpen = signal(false);
  }
  trackPhone() {
    this.analytics.trackCta({ cta_name: "Phone", cta_location: "footer", cta_type: "contact" });
  }
  trackWhatsApp() {
    this.analytics.trackCta({ cta_name: "WhatsApp", cta_location: "footer", cta_type: "contact" });
  }
  trackSocial(platform) {
    this.analytics.trackCta({ cta_name: platform, cta_location: "footer", cta_type: "social" });
  }
  openEmailModal() {
    this.analytics.trackCta({ cta_name: "Email", cta_location: "footer", cta_type: "contact" });
    this.modalOpen.set(true);
  }
  closeModal() {
    this.modalOpen.set(false);
  }
  selectService(type) {
    this.analytics.trackCta({
      cta_name: "Email Send",
      cta_location: "email_modal",
      cta_type: "contact",
      cta_detail: type
    });
    const m = this.modalUi;
    const subject = encodeURIComponent(type === "insurance" ? m.subjectInsurance : m.subjectRealestate);
    const body = encodeURIComponent(type === "insurance" ? m.bodyInsurance : m.bodyRealestate);
    const mailto = `mailto:${this.config.email}?subject=${subject}&body=${body}`;
    this.doc.defaultView?.open(mailto, "_self");
    this.closeModal();
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 34, vars: 13, consts: [["aria-label", "Site footer", 1, "footer"], [1, "container", "footer__inner"], [1, "footer__brand"], ["routerLink", "/", 1, "footer__logo"], ["viewBox", "0 0 600 200", "width", "108", "height", "36", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", "focusable", "false", 1, "footer__logo-svg"], ["x", "300", "y", "158", "text-anchor", "middle", "font-family", "'Playfair Display', 'Georgia', 'Times New Roman', serif", "font-weight", "900", "font-size", "140", "letter-spacing", "-4", "fill", "currentColor"], ["fill", "currentColor", 1, "logo-dot"], [1, "footer__tagline"], ["aria-label", "Social media links", 1, "footer__social"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Facebook", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Instagram", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", 3, "href"], ["aria-label", "Footer navigation", 1, "footer__nav"], [1, "footer__nav-heading"], ["role", "list"], [1, "footer__contact"], [3, "click", "href"], ["type", "button", 1, "footer__email-btn", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "footer__bottom"], [1, "container"], [3, "innerHTML"], ["role", "dialog", "aria-modal", "true", 1, "email-modal-backdrop"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Facebook", 3, "click", "href"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Instagram", 3, "click", "href"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor", "stroke", "none"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", 3, "click", "href"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], [3, "routerLink"], [3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 3, "click", "href"], ["role", "dialog", "aria-modal", "true", 1, "email-modal-backdrop", 3, "click", "keydown.escape"], [1, "email-modal", 3, "click"], ["aria-hidden", "true", 1, "email-modal__icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "email-modal__title"], [1, "email-modal__subtitle"], [1, "email-modal__options"], ["type", "button", 1, "email-modal__option", 3, "click"], ["aria-hidden", "true", 1, "email-modal__option-icon", "email-modal__option-icon--insurance"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "email-modal__option-arrow"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], ["aria-hidden", "true", 1, "email-modal__option-icon", "email-modal__option-icon--realestate"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], ["type", "button", 1, "email-modal__cancel", 3, "click"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4)(5, "text", 5);
        \u0275\u0275text(6, "Flor");
        \u0275\u0275elementStart(7, "tspan", 6);
        \u0275\u0275text(8, ".");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275template(12, FooterComponent_Conditional_12_Template, 3, 1, "a", 9)(13, FooterComponent_Conditional_13_Template, 5, 1, "a", 10)(14, FooterComponent_Conditional_14_Template, 5, 1, "a", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "nav", 12)(16, "h3", 13);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "ul", 14);
        \u0275\u0275repeaterCreate(19, FooterComponent_For_20_Template, 3, 1, "li", null, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 15)(22, "h3", 13);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "address")(25, "a", 16);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_25_listener() {
          return ctx.trackPhone();
        });
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275listener("click", function FooterComponent_Template_button_click_27_listener() {
          return ctx.openEmailModal();
        });
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, FooterComponent_Conditional_29_Template, 2, 1, "a", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 19)(31, "div", 20);
        \u0275\u0275element(32, "p", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(33, FooterComponent_Conditional_33_Template, 30, 6, "div", 22);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", ctx.config.agentName + " \u2013 Home");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.config.tagline);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.config.facebookUrl ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.config.instagramUrl ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.config.linkedinUrl ? 14 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.ui.footer.quickLinksHeading);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.config.footerLinks);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.footer.contactHeading);
        \u0275\u0275advance(2);
        \u0275\u0275property("href", "tel:" + ctx.config.phone, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.config.phone);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.config.email, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.config.whatsappNumber ? 29 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", ctx.config.copyrightText, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.modalOpen() ? 33 : -1);
      }
    }, dependencies: [RouterLink], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-alt);\n  border-top: 1px solid var(--color-border);\n  margin-top: auto;\n}\n.footer__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 3rem;\n  padding-block: 3rem;\n}\n@media (max-width: 768px) {\n  .footer__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n  }\n}\n@media (max-width: 480px) {\n  .footer__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.footer__brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.footer__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.footer__logo-svg[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n  display: block;\n}\n.footer__tagline[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  max-width: 28ch;\n  line-height: 1.5;\n}\n.footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: var(--color-text-muted);\n  border: 1px solid var(--color-border);\n  transition:\n    color 150ms ease,\n    border-color 150ms ease,\n    background-color 150ms ease;\n}\n.footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n  background-color: var(--color-primary-light);\n  text-decoration: none;\n}\n.footer__nav-heading[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-muted);\n  margin-bottom: 1rem;\n}\n.footer__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  transition: color 150ms ease;\n}\n.footer__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.footer__contact[_ngcontent-%COMP%]   address[_ngcontent-%COMP%] {\n  font-style: normal;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  transition: color 150ms ease;\n}\n.footer__contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-block: 1.25rem;\n}\n.footer__bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.footer__email-btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  text-align: left;\n  transition: color 150ms ease;\n}\n.footer__email-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.email-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_emailFadeIn 150ms ease both;\n}\n@keyframes _ngcontent-%COMP%_emailFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.email-modal[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 2rem;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  animation: _ngcontent-%COMP%_emailSlideUp 250ms ease both;\n}\n@media (max-width: 480px) {\n  .email-modal[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.email-modal__icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: var(--color-primary);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.email-modal__title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  color: var(--color-text);\n  margin: 0;\n}\n.email-modal__subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  text-align: center;\n  line-height: 1.7;\n  max-width: 30ch;\n  margin-top: -0.5rem;\n}\n.email-modal__options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.email-modal__option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n  border: 1.5px solid var(--color-border);\n  text-align: left;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    color 150ms ease,\n    transform 150ms ease;\n  cursor: pointer;\n}\n.email-modal__option[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-light);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(4px);\n  text-decoration: none;\n}\n.email-modal__option[_ngcontent-%COMP%]:active {\n  transform: translateX(2px);\n}\n.email-modal__option-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.email-modal__option-icon--insurance[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.email-modal__option-icon--realestate[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  color: var(--color-accent);\n}\n.email-modal__option-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n  transition: transform 150ms ease;\n}\n.email-modal__option[_ngcontent-%COMP%]:hover   .email-modal__option-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n  color: var(--color-primary);\n}\n.email-modal__cancel[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: color 150ms ease, background-color 150ms ease;\n  margin-top: -0.25rem;\n}\n.email-modal__cancel[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n}\n@keyframes _ngcontent-%COMP%_emailSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterLink], template: `<!-- src/app/shared/components/footer/footer.component.html -->
<footer class="footer" aria-label="Site footer">
  <div class="container footer__inner">

    <div class="footer__brand">
      <a class="footer__logo" routerLink="/" [attr.aria-label]="config.agentName + ' \u2013 Home'">
        <svg class="footer__logo-svg" viewBox="0 0 600 200" width="108" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <text
            x="300" y="158"
            text-anchor="middle"
            font-family="'Playfair Display', 'Georgia', 'Times New Roman', serif"
            font-weight="900"
            font-size="140"
            letter-spacing="-4"
            fill="currentColor"
          >Flor<tspan class="logo-dot" fill="currentColor">.</tspan></text>
        </svg>
      </a>
      <p class="footer__tagline">{{ config.tagline }}</p>
      <div class="footer__social" aria-label="Social media links">
        @if (config.facebookUrl) {
          <a [href]="config.facebookUrl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" (click)="trackSocial('Facebook')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        }
        @if (config.instagramUrl) {
          <a [href]="config.instagramUrl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" (click)="trackSocial('Instagram')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        }
        @if (config.linkedinUrl) {
          <a [href]="config.linkedinUrl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" (click)="trackSocial('LinkedIn')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        }
      </div>
    </div>

    <nav class="footer__nav" aria-label="Footer navigation">
      <h3 class="footer__nav-heading">{{ ui.footer.quickLinksHeading }}</h3>
      <ul role="list">
        @for (link of config.footerLinks; track link.href) {
          <li>
            @if (link.href.startsWith('/')) {
              <a [routerLink]="link.href">{{ link.label }}</a>
            } @else {
              <a [href]="link.href">{{ link.label }}</a>
            }
          </li>
        }
      </ul>
    </nav>

    <div class="footer__contact">
      <h3 class="footer__nav-heading">{{ ui.footer.contactHeading }}</h3>
      <address>
        <a [href]="'tel:' + config.phone" (click)="trackPhone()">{{ config.phone }}</a>
        <!-- Email opens service-picker modal instead of bare mailto -->
        <button class="footer__email-btn" type="button" (click)="openEmailModal()">
          {{ config.email }}
        </button>
        @if (config.whatsappNumber) {
          <a [href]="'https://wa.me/' + config.whatsappNumber" target="_blank" rel="noopener noreferrer" (click)="trackWhatsApp()">WhatsApp</a>
        }
      </address>
    </div>

  </div>

  <div class="footer__bottom">
    <div class="container">
      <p [innerHTML]="config.copyrightText"></p>
    </div>
  </div>
</footer>

<!-- \u2500\u2500 Email service-picker modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (modalOpen()) {
  <div
    class="email-modal-backdrop"
    role="dialog"
    aria-modal="true"
    [attr.aria-label]="modalUi.title"
    (click)="closeModal()"
    (keydown.escape)="closeModal()"
  >
    <div class="email-modal" (click)="$event.stopPropagation()">

      <div class="email-modal__icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>

      <h2 class="email-modal__title">{{ modalUi.title }}</h2>
      <p class="email-modal__subtitle">{{ modalUi.subtitle }}</p>

      <div class="email-modal__options">

        <button class="email-modal__option" type="button" (click)="selectService('insurance')">
          <span class="email-modal__option-icon email-modal__option-icon--insurance" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </span>
          {{ modalUi.insurance }}
          <svg class="email-modal__option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>

        <button class="email-modal__option" type="button" (click)="selectService('realestate')">
          <span class="email-modal__option-icon email-modal__option-icon--realestate" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </span>
          {{ modalUi.realestate }}
          <svg class="email-modal__option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>

      </div>

      <button class="email-modal__cancel" type="button" (click)="closeModal()">
        {{ modalUi.cancel }}
      </button>

    </div>
  </div>
}
`, styles: ["/* src/app/shared/components/footer/footer.component.scss */\n.footer {\n  background-color: var(--color-surface-alt);\n  border-top: 1px solid var(--color-border);\n  margin-top: auto;\n}\n.footer__inner {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 3rem;\n  padding-block: 3rem;\n}\n@media (max-width: 768px) {\n  .footer__inner {\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n  }\n}\n@media (max-width: 480px) {\n  .footer__inner {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.footer__brand {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.footer__logo {\n  display: inline-flex;\n}\n.footer__logo-svg {\n  height: 36px;\n  width: auto;\n  display: block;\n}\n.footer__tagline {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  max-width: 28ch;\n  line-height: 1.5;\n}\n.footer__social {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.footer__social a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: var(--color-text-muted);\n  border: 1px solid var(--color-border);\n  transition:\n    color 150ms ease,\n    border-color 150ms ease,\n    background-color 150ms ease;\n}\n.footer__social a:hover {\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n  background-color: var(--color-primary-light);\n  text-decoration: none;\n}\n.footer__nav-heading {\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-muted);\n  margin-bottom: 1rem;\n}\n.footer__nav ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer__nav a {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  transition: color 150ms ease;\n}\n.footer__nav a:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.footer__contact address {\n  font-style: normal;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.footer__contact a {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  transition: color 150ms ease;\n}\n.footer__contact a:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.footer__bottom {\n  border-top: 1px solid var(--color-border);\n  padding-block: 1.25rem;\n}\n.footer__bottom p {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  text-align: center;\n}\n.footer__email-btn {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  text-align: left;\n  transition: color 150ms ease;\n}\n.footer__email-btn:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.email-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: emailFadeIn 150ms ease both;\n}\n@keyframes emailFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.email-modal {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 2rem;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  animation: emailSlideUp 250ms ease both;\n}\n@media (max-width: 480px) {\n  .email-modal {\n    padding: 1.5rem;\n  }\n}\n.email-modal__icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: var(--color-primary);\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.email-modal__title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  color: var(--color-text);\n  margin: 0;\n}\n.email-modal__subtitle {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  text-align: center;\n  line-height: 1.7;\n  max-width: 30ch;\n  margin-top: -0.5rem;\n}\n.email-modal__options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.email-modal__option {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n  border: 1.5px solid var(--color-border);\n  text-align: left;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    color 150ms ease,\n    transform 150ms ease;\n  cursor: pointer;\n}\n.email-modal__option:hover {\n  background-color: var(--color-primary-light);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(4px);\n  text-decoration: none;\n}\n.email-modal__option:active {\n  transform: translateX(2px);\n}\n.email-modal__option-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.email-modal__option-icon--insurance {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.email-modal__option-icon--realestate {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  color: var(--color-accent);\n}\n.email-modal__option-arrow {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n  transition: transform 150ms ease;\n}\n.email-modal__option:hover .email-modal__option-arrow {\n  transform: translateX(3px);\n  color: var(--color-primary);\n}\n.email-modal__cancel {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: color 150ms ease, background-color 150ms ease;\n  margin-top: -0.25rem;\n}\n.email-modal__cancel:hover {\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n}\n@keyframes emailSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 18 });
})();

// src/app/shared/components/accessibility-widget/accessibility-widget.component.ts
var _forTrack03 = ($index, $item) => $item.value;
function AccessibilityWidgetComponent_Conditional_5_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AccessibilityWidgetComponent_Conditional_5_For_6_Template_button_click_0_listener() {
      const t_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setTheme(t_r3.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("seg-control__btn--active", ctx_r3.theme() === t_r3.value);
    \u0275\u0275attribute("aria-pressed", ctx_r3.theme() === t_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getLabel(t_r3.labelKey));
  }
}
function AccessibilityWidgetComponent_Conditional_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AccessibilityWidgetComponent_Conditional_5_For_10_Template_button_click_0_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setFontSize(f_r6.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("seg-control__btn--active", ctx_r3.fontSize() === f_r6.value);
    \u0275\u0275attribute("aria-pressed", ctx_r3.fontSize() === f_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getLabel(f_r6.labelKey));
  }
}
function AccessibilityWidgetComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8);
    \u0275\u0275repeaterCreate(5, AccessibilityWidgetComponent_Conditional_5_For_6_Template, 2, 4, "button", 9, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 10);
    \u0275\u0275repeaterCreate(9, AccessibilityWidgetComponent_Conditional_5_For_10_Template, 2, 4, "button", 9, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7)(12, "button", 11);
    \u0275\u0275listener("click", function AccessibilityWidgetComponent_Conditional_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleContrast());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 12);
    \u0275\u0275element(14, "circle", 13)(15, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r3.ui.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.ui.label);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.themes);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.fontSizes);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("a11y-widget__toggle-option--active", ctx_r3.contrast() === "high");
    \u0275\u0275attribute("aria-pressed", ctx_r3.contrast() === "high");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.ui.highContrast, " ");
  }
}
var AccessibilityWidgetComponent = class _AccessibilityWidgetComponent {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.elRef = inject(ElementRef);
    this.ui = inject(ConfigService).config.ui.accessibility;
    this.panelOpen = signal(false);
    this.theme = signal("auto");
    this.fontSize = signal("default");
    this.contrast = signal("normal");
    this.themes = [
      { value: "light", labelKey: "lightMode" },
      { value: "dark", labelKey: "darkMode" },
      { value: "auto", labelKey: "autoTheme" }
    ];
    this.fontSizes = [
      { value: "small", labelKey: "smallText" },
      { value: "default", labelKey: "defaultText" },
      { value: "large", labelKey: "largeText" }
    ];
  }
  getLabel(key) {
    return this.ui[key];
  }
  ngOnInit() {
    const t = localStorage.getItem("theme");
    const f = localStorage.getItem("fontSize");
    const c = localStorage.getItem("contrast");
    if (t)
      this.applyTheme(t);
    if (f)
      this.applyFontSize(f);
    if (c)
      this.applyContrast(c);
  }
  onDocumentClick(event) {
    if (!this.panelOpen())
      return;
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.panelOpen.set(false);
    }
  }
  togglePanel() {
    this.panelOpen.update((v) => !v);
  }
  setTheme(value) {
    this.applyTheme(value);
  }
  setFontSize(value) {
    this.applyFontSize(value);
  }
  toggleContrast() {
    this.applyContrast(this.contrast() === "normal" ? "high" : "normal");
  }
  applyTheme(value) {
    this.theme.set(value);
    const html = this.doc.documentElement;
    if (value === "auto") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", value);
    }
    localStorage.setItem("theme", value);
  }
  applyFontSize(value) {
    this.fontSize.set(value);
    const html = this.doc.documentElement;
    if (value === "default") {
      html.removeAttribute("data-font-size");
    } else {
      html.setAttribute("data-font-size", value);
    }
    localStorage.setItem("fontSize", value);
  }
  applyContrast(value) {
    this.contrast.set(value);
    const html = this.doc.documentElement;
    if (value === "high") {
      html.setAttribute("data-contrast", "high");
    } else {
      html.removeAttribute("data-contrast");
    }
    localStorage.setItem("contrast", value);
  }
  static {
    this.\u0275fac = function AccessibilityWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccessibilityWidgetComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityWidgetComponent, selectors: [["app-accessibility-widget"]], hostBindings: function AccessibilityWidgetComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AccessibilityWidgetComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 6, vars: 3, consts: [[1, "a11y-widget"], ["type", "button", "aria-haspopup", "true", 1, "a11y-widget__toggle", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.07 4.93a10 10 0 0 1 1.41 13.54M4.93 4.93a10 10 0 0 0-1.41 13.54M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"], ["role", "dialog", 1, "a11y-widget__panel"], [1, "a11y-widget__section-label"], [1, "a11y-widget__group"], ["role", "group", "aria-label", "Color scheme", 1, "seg-control"], ["type", "button", 1, "seg-control__btn", 3, "seg-control__btn--active"], ["role", "group", "aria-label", "Text size", 1, "seg-control"], ["type", "button", 1, "a11y-widget__toggle-option", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 2a10 10 0 0 1 0 20z", "fill", "currentColor", "stroke", "none"], ["type", "button", 1, "seg-control__btn", 3, "click"]], template: function AccessibilityWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function AccessibilityWidgetComponent_Template_button_click_1_listener() {
          return ctx.togglePanel();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2);
        \u0275\u0275element(3, "circle", 3)(4, "path", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, AccessibilityWidgetComponent_Conditional_5_Template, 17, 6, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-pressed", ctx.panelOpen())("aria-label", ctx.panelOpen() ? ctx.ui.closeMenu : ctx.ui.openMenu);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.panelOpen() ? 5 : -1);
      }
    }, styles: ["\n\n.a11y-widget[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.5rem;\n  left: 1.5rem;\n  z-index: 200;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.a11y-widget__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: var(--color-surface-raised);\n  color: var(--color-text-muted);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-card);\n  transition: color 150ms ease, background-color 150ms ease;\n}\n.a11y-widget__toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  background-color: var(--color-primary-light);\n}\n.a11y-widget__panel[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  box-shadow: var(--shadow-card-hover);\n  padding: 1rem;\n  min-width: 210px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.a11y-widget__section-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.a11y-widget__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.a11y-widget__toggle-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text);\n  border: 1.5px solid var(--color-border);\n  background-color: var(--color-surface-alt);\n  transition:\n    background-color 150ms ease,\n    color 150ms ease,\n    border-color 150ms ease;\n}\n.a11y-widget__toggle-option[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.a11y-widget__toggle-option--active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: var(--color-text-inverse);\n  border-color: var(--color-primary);\n}\n.a11y-widget__toggle-option--active[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-dark);\n  color: var(--color-text-inverse);\n  border-color: var(--color-primary-dark);\n}\n.seg-control[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1.5px solid var(--color-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-control__btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem 0.5rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  background-color: var(--color-surface-alt);\n  transition: background-color 150ms ease, color 150ms ease;\n  border-radius: 0;\n}\n.seg-control__btn[_ngcontent-%COMP%]    + .seg-control__btn[_ngcontent-%COMP%] {\n  border-left: 1.5px solid var(--color-border);\n}\n.seg-control__btn[_ngcontent-%COMP%]:hover:not(.seg-control__btn--active) {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.seg-control__btn--active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n/*# sourceMappingURL=accessibility-widget.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessibilityWidgetComponent, [{
    type: Component,
    args: [{ selector: "app-accessibility-widget", standalone: true, template: `<!-- src/app/shared/components/accessibility-widget/accessibility-widget.component.html -->
<div class="a11y-widget">

  <button
    class="a11y-widget__toggle"
    type="button"
    (click)="togglePanel()"
    [attr.aria-pressed]="panelOpen()"
    [attr.aria-label]="panelOpen() ? ui.closeMenu : ui.openMenu"
    aria-haspopup="true"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93a10 10 0 0 1 1.41 13.54M4.93 4.93a10 10 0 0 0-1.41 13.54M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
    </svg>
  </button>

  @if (panelOpen()) {
    <div class="a11y-widget__panel" role="dialog" [attr.aria-label]="ui.label">

      <!-- Color Scheme -->
      <p class="a11y-widget__section-label">{{ ui.label }}</p>

      <div class="a11y-widget__group">
        <div class="seg-control" role="group" aria-label="Color scheme">
          @for (t of themes; track t.value) {
            <button
              class="seg-control__btn"
              type="button"
              [class.seg-control__btn--active]="theme() === t.value"
              [attr.aria-pressed]="theme() === t.value"
              (click)="setTheme(t.value)"
            >{{ getLabel(t.labelKey) }}</button>
          }
        </div>
      </div>

      <!-- Text Size -->
      <div class="a11y-widget__group">
        <div class="seg-control" role="group" aria-label="Text size">
          @for (f of fontSizes; track f.value) {
            <button
              class="seg-control__btn"
              type="button"
              [class.seg-control__btn--active]="fontSize() === f.value"
              [attr.aria-pressed]="fontSize() === f.value"
              (click)="setFontSize(f.value)"
            >{{ getLabel(f.labelKey) }}</button>
          }
        </div>
      </div>

      <!-- High Contrast -->
      <div class="a11y-widget__group">
        <button
          class="a11y-widget__toggle-option"
          type="button"
          [class.a11y-widget__toggle-option--active]="contrast() === 'high'"
          [attr.aria-pressed]="contrast() === 'high'"
          (click)="toggleContrast()"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" stroke="none"/>
          </svg>
          {{ ui.highContrast }}
        </button>
      </div>

    </div>
  }
</div>
`, styles: ["/* src/app/shared/components/accessibility-widget/accessibility-widget.component.scss */\n.a11y-widget {\n  position: fixed;\n  bottom: 1.5rem;\n  left: 1.5rem;\n  z-index: 200;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.a11y-widget__toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: var(--color-surface-raised);\n  color: var(--color-text-muted);\n  border: 1px solid var(--color-border);\n  box-shadow: var(--shadow-card);\n  transition: color 150ms ease, background-color 150ms ease;\n}\n.a11y-widget__toggle:hover {\n  color: var(--color-primary);\n  background-color: var(--color-primary-light);\n}\n.a11y-widget__panel {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  box-shadow: var(--shadow-card-hover);\n  padding: 1rem;\n  min-width: 210px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.a11y-widget__section-label {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.a11y-widget__group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.a11y-widget__toggle-option {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text);\n  border: 1.5px solid var(--color-border);\n  background-color: var(--color-surface-alt);\n  transition:\n    background-color 150ms ease,\n    color 150ms ease,\n    border-color 150ms ease;\n}\n.a11y-widget__toggle-option:hover {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n.a11y-widget__toggle-option--active {\n  background-color: var(--color-primary);\n  color: var(--color-text-inverse);\n  border-color: var(--color-primary);\n}\n.a11y-widget__toggle-option--active:hover {\n  background-color: var(--color-primary-dark);\n  color: var(--color-text-inverse);\n  border-color: var(--color-primary-dark);\n}\n.seg-control {\n  display: flex;\n  border: 1.5px solid var(--color-border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg-control__btn {\n  flex: 1;\n  padding: 0.5rem 0.5rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  background-color: var(--color-surface-alt);\n  transition: background-color 150ms ease, color 150ms ease;\n  border-radius: 0;\n}\n.seg-control__btn + .seg-control__btn {\n  border-left: 1.5px solid var(--color-border);\n}\n.seg-control__btn:hover:not(.seg-control__btn--active) {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.seg-control__btn--active {\n  background-color: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n/*# sourceMappingURL=accessibility-widget.component.css.map */\n"] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityWidgetComponent, { className: "AccessibilityWidgetComponent", filePath: "src/app/shared/components/accessibility-widget/accessibility-widget.component.ts", lineNumber: 19 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.configService = inject(ConfigService);
    this.seoService = inject(SeoService);
    this.router = inject(Router);
    this.document = inject(DOCUMENT);
    this.renderer = inject(Renderer2);
  }
  get config() {
    return this.configService.config;
  }
  ngOnInit() {
    this.seoService.init();
    this.injectJsonLd();
    this.initScrollToTop();
  }
  /** Scroll window to top on every completed navigation */
  initScrollToTop() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.document.defaultView?.scrollTo({ top: 0, behavior: "instant" });
    });
  }
  injectJsonLd() {
    const c = this.config;
    const origin = (c.siteUrl ?? this.document.location.origin).replace(/\/$/, "");
    const imgUrl = `${origin}/${c.profilePictureUrl}`;
    const sameAs = [
      c.facebookUrl,
      c.linkedinUrl,
      c.instagramUrl,
      c.twitterHandle ? `https://twitter.com/${c.twitterHandle.replace("@", "")}` : null
    ].filter(Boolean);
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Person", "ProfessionalService"],
          "@id": `${origin}/#agent`,
          name: c.agentName,
          alternateName: c.nickname,
          jobTitle: "Licensed Insurance Agent & Real Estate Sales Associate",
          description: c.bio,
          email: c.email,
          telephone: c.phone,
          url: `${origin}/`,
          image: { "@type": "ImageObject", url: imgUrl, caption: c.profilePictureAlt },
          sameAs,
          knowsAbout: [
            "Life Insurance",
            "Health Insurance",
            "VUL Insurance",
            "PruLife UK",
            "Real Estate Philippines",
            "ProFriends Properties",
            "Pre-selling",
            "OFW Property Investment",
            "Pag-IBIG Loans",
            "Pasalo Properties"
          ],
          areaServed: { "@type": "Country", name: "Philippines" },
          nationality: { "@type": "Country", name: "Philippines" },
          hasCredential: c.licences?.map((l) => ({
            "@type": "EducationalOccupationalCredential",
            name: l
          }))
        },
        {
          "@type": "WebSite",
          "@id": `${origin}/#website`,
          url: `${origin}/`,
          name: c.agentName,
          description: c.metaDefaults?.description,
          inLanguage: ["en-PH", "tl-PH"],
          potentialAction: {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${origin}/#/services` },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${origin}/services` },
            { "@type": "ListItem", position: 3, name: "About", item: `${origin}/about` },
            { "@type": "ListItem", position: 4, name: "Gallery", item: `${origin}/gallery` },
            { "@type": "ListItem", position: 5, name: "Enquire", item: `${origin}/enquire` }
          ]
        }
      ]
    };
    const script = this.renderer.createElement("script");
    this.renderer.setAttribute(script, "type", "application/ld+json");
    script.textContent = JSON.stringify(schema, null, 0);
    this.renderer.appendChild(this.document.head, script);
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["href", "#main-content", 1, "skip-link"], ["id", "main-content", "tabindex", "-1"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275text(1, "Skip to main content");
        \u0275\u0275elementEnd();
        \u0275\u0275element(2, "app-header");
        \u0275\u0275elementStart(3, "main", 1);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "app-footer")(6, "app-accessibility-widget");
      }
    }, dependencies: [
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      AccessibilityWidgetComponent
    ], styles: ["\n\n.skip-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100%;\n  left: 1rem;\n  z-index: 9999;\n  background: var(--color-primary);\n  color: var(--color-text-inverse);\n  padding: 0.75rem 1.25rem;\n  border-radius: 0 0 8px 8px;\n  font-weight: 600;\n  transition: top 150ms ease;\n}\n.skip-link[_ngcontent-%COMP%]:focus {\n  top: 0;\n  text-decoration: none;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: calc(100vh - var(--header-height) - 280px);\n  outline: none;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      AccessibilityWidgetComponent
    ], template: '<!-- src/app/app.component.html -->\n<a class="skip-link" href="#main-content">Skip to main content</a>\n\n<app-header />\n\n<main id="main-content" tabindex="-1">\n  <router-outlet />\n</main>\n\n<app-footer />\n<app-accessibility-widget />\n', styles: ["/* src/app/app.component.scss */\n.skip-link {\n  position: absolute;\n  top: -100%;\n  left: 1rem;\n  z-index: 9999;\n  background: var(--color-primary);\n  color: var(--color-text-inverse);\n  padding: 0.75rem 1.25rem;\n  border-radius: 0 0 8px 8px;\n  font-weight: 600;\n  transition: top 150ms ease;\n}\n.skip-link:focus {\n  top: 0;\n  text-decoration: none;\n}\nmain {\n  min-height: calc(100vh - var(--header-height) - 280px);\n  outline: none;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 25 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
