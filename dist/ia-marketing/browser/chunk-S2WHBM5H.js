import {
  EnquiryFormComponent
} from "./chunk-YOVQESAB.js";
import {
  RouterLink
} from "./chunk-EGYCMOMF.js";
import {
  QuickContactBarComponent
} from "./chunk-XUG3I5SQ.js";
import {
  Component,
  ConfigService,
  Input,
  NgOptimizedImage,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PM22ZACH.js";

// src/app/shared/components/star-rating/star-rating.component.ts
function StarRatingComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filled_r1 = ctx.$implicit;
    \u0275\u0275classProp("star--filled", filled_r1);
  }
}
var StarRatingComponent = class _StarRatingComponent {
  constructor() {
    this.rating = 0;
    this.maxRating = 5;
  }
  get stars() {
    return Array.from({ length: this.maxRating }, (_, i) => i < this.rating);
  }
  get ariaLabel() {
    return `${this.rating} out of ${this.maxRating} stars`;
  }
  static {
    this.\u0275fac = function StarRatingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StarRatingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarRatingComponent, selectors: [["app-star-rating"]], inputs: { rating: "rating", maxRating: "maxRating" }, decls: 3, vars: 1, consts: [["role", "img", 1, "star-rating"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "star", 3, "star--filled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "star"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"]], template: function StarRatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275repeaterCreate(1, StarRatingComponent_For_2_Template, 2, 2, ":svg:svg", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.stars);
      }
    }, styles: ["\n\n.star-rating[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2px;\n  align-items: center;\n}\n.star[_ngcontent-%COMP%] {\n  fill: var(--color-border);\n  stroke: var(--color-border);\n  stroke-width: 1.5;\n  flex-shrink: 0;\n}\n.star--filled[_ngcontent-%COMP%] {\n  fill: var(--color-star);\n  stroke: var(--color-star);\n}\n/*# sourceMappingURL=star-rating.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRatingComponent, [{
    type: Component,
    args: [{ selector: "app-star-rating", standalone: true, template: '<!-- src/app/shared/components/star-rating/star-rating.component.html -->\n<span\n  class="star-rating"\n  role="img"\n  [attr.aria-label]="ariaLabel"\n>\n  @for (filled of stars; track $index) {\n    <svg\n      class="star"\n      [class.star--filled]="filled"\n      width="16"\n      height="16"\n      viewBox="0 0 24 24"\n      aria-hidden="true"\n    >\n      <polygon\n        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"\n      />\n    </svg>\n  }\n</span>\n', styles: ["/* src/app/shared/components/star-rating/star-rating.component.scss */\n.star-rating {\n  display: inline-flex;\n  gap: 2px;\n  align-items: center;\n}\n.star {\n  fill: var(--color-border);\n  stroke: var(--color-border);\n  stroke-width: 1.5;\n  flex-shrink: 0;\n}\n.star--filled {\n  fill: var(--color-star);\n  stroke: var(--color-star);\n}\n/*# sourceMappingURL=star-rating.component.css.map */\n"] }]
  }], null, { rating: [{
    type: Input,
    args: [{ required: true }]
  }], maxRating: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarRatingComponent, { className: "StarRatingComponent", filePath: "src/app/shared/components/star-rating/star-rating.component.ts", lineNumber: 11 });
})();

// src/app/shared/components/testimonial-card/testimonial-card.component.ts
function TestimonialCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "time", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.testimonial.date);
  }
}
var TestimonialCardComponent = class _TestimonialCardComponent {
  static {
    this.\u0275fac = function TestimonialCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestimonialCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialCardComponent, selectors: [["app-testimonial-card"]], inputs: { testimonial: "testimonial" }, decls: 11, vars: 6, consts: [[1, "testimonial-card"], [1, "testimonial-card__header"], ["width", "48", "height", "48", 1, "testimonial-card__avatar", 3, "ngSrc", "alt"], [1, "testimonial-card__meta"], [1, "testimonial-card__name"], [3, "rating"], [1, "testimonial-card__text"], [1, "testimonial-card__date"]], template: function TestimonialCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "app-star-rating", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "blockquote", 6)(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, TestimonialCardComponent_Conditional_10_Template, 2, 1, "time", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", ctx.testimonial.avatarUrl)("alt", ctx.testimonial.avatarAlt);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.testimonial.name);
        \u0275\u0275advance();
        \u0275\u0275property("rating", ctx.testimonial.rating);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.testimonial.text);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.testimonial.date ? 10 : -1);
      }
    }, dependencies: [NgOptimizedImage, StarRatingComponent], styles: ['@charset "UTF-8";\n\n\n\n.testimonial-card[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: var(--shadow-card);\n  transition: box-shadow 250ms ease, transform 250ms ease;\n}\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-card-hover);\n  transform: translateY(-2px);\n}\n.testimonial-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.testimonial-card__avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 2px solid var(--color-border);\n}\n.testimonial-card__meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.testimonial-card__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: var(--color-text);\n  line-height: 1.3;\n}\n.testimonial-card__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.testimonial-card__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  font-style: italic;\n}\n.testimonial-card__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: "\\201c";\n  color: var(--color-primary);\n  font-size: 1.4em;\n  font-style: normal;\n  line-height: 0;\n  vertical-align: -0.3em;\n  margin-right: 2px;\n}\n.testimonial-card__date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  margin-top: auto;\n}\n/*# sourceMappingURL=testimonial-card.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialCardComponent, [{
    type: Component,
    args: [{ selector: "app-testimonial-card", standalone: true, imports: [NgOptimizedImage, StarRatingComponent], template: '<!-- src/app/shared/components/testimonial-card/testimonial-card.component.html -->\n<article class="testimonial-card">\n  <div class="testimonial-card__header">\n    <img\n      [ngSrc]="testimonial.avatarUrl"\n      [alt]="testimonial.avatarAlt"\n      width="48"\n      height="48"\n      class="testimonial-card__avatar"\n    />\n    <div class="testimonial-card__meta">\n      <p class="testimonial-card__name">{{ testimonial.name }}</p>\n      <app-star-rating [rating]="testimonial.rating" />\n    </div>\n  </div>\n\n  <blockquote class="testimonial-card__text">\n    <p>{{ testimonial.text }}</p>\n  </blockquote>\n\n  @if (testimonial.date) {\n    <time class="testimonial-card__date">{{ testimonial.date }}</time>\n  }\n</article>\n', styles: ['@charset "UTF-8";\n\n/* src/app/shared/components/testimonial-card/testimonial-card.component.scss */\n.testimonial-card {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: var(--shadow-card);\n  transition: box-shadow 250ms ease, transform 250ms ease;\n}\n.testimonial-card:hover {\n  box-shadow: var(--shadow-card-hover);\n  transform: translateY(-2px);\n}\n.testimonial-card__header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.testimonial-card__avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n  border: 2px solid var(--color-border);\n}\n.testimonial-card__meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.testimonial-card__name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: var(--color-text);\n  line-height: 1.3;\n}\n.testimonial-card__text {\n  flex: 1;\n}\n.testimonial-card__text p {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  font-style: italic;\n}\n.testimonial-card__text p::before {\n  content: "\\201c";\n  color: var(--color-primary);\n  font-size: 1.4em;\n  font-style: normal;\n  line-height: 0;\n  vertical-align: -0.3em;\n  margin-right: 2px;\n}\n.testimonial-card__date {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  margin-top: auto;\n}\n/*# sourceMappingURL=testimonial-card.component.css.map */\n'] }]
  }], null, { testimonial: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialCardComponent, { className: "TestimonialCardComponent", filePath: "src/app/shared/components/testimonial-card/testimonial-card.component.ts", lineNumber: 15 });
})();

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', ctx_r0.config.nickname, '"');
  }
}
function HomeComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-testimonial-card", 17);
  }
  if (rf & 2) {
    const testimonial_r2 = ctx.$implicit;
    \u0275\u0275property("testimonial", testimonial_r2);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.configService = inject(ConfigService);
    this.config = this.configService.config;
    this.ui = this.config.ui;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 37, vars: 12, consts: [["aria-labelledby", "hero-heading", 1, "hero", "section"], [1, "container", "hero__inner"], [1, "hero__text"], [1, "hero__eyebrow"], ["id", "hero-heading", 1, "hero__name"], [1, "hero__nickname"], [1, "hero__tagline"], [1, "hero__bio"], [1, "hero__actions"], ["routerLink", "/enquire", 1, "btn", "btn--accent"], ["routerLink", "/services", 1, "btn", "btn--outline"], [1, "hero__photo-wrap"], ["width", "480", "height", "560", "priority", "", "fetchpriority", "high", 1, "hero__photo", 3, "ngSrc", "alt"], ["aria-labelledby", "testimonials-heading", 1, "testimonials", "section", "section--alt"], [1, "container"], ["id", "testimonials-heading", 1, "section-heading"], [1, "testimonials__grid"], [3, "testimonial"], ["aria-labelledby", "contact-heading", 1, "contact-section", "section"], [1, "container", "contact-section__inner"], [1, "contact-section__intro"], ["id", "contact-heading"], [1, "contact-section__form"], ["defaultType", "general"], [1, "contact-section__bar"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, HomeComponent_Conditional_7_Template, 2, 1, "p", 5);
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "a", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275element(18, "img", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "section", 13)(20, "div", 14)(21, "h2", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 16);
        \u0275\u0275repeaterCreate(24, HomeComponent_For_25_Template, 1, 1, "app-testimonial-card", 17, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "section", 18)(27, "div", 19)(28, "div", 20)(29, "h2", 21);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 22);
        \u0275\u0275element(34, "app-enquiry-form", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 24);
        \u0275\u0275element(36, "app-quick-contact-bar");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.hero.roleLabel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.agentName);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.config.nickname ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.tagline);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.bio);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.ui.hero.ctaPrimary);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.hero.ctaSecondary);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", ctx.config.profilePictureUrl)("alt", ctx.config.profilePictureAlt);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.testimonials.heading);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.config.testimonials);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.config.homeContactSectionHeading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.homeContactSectionCopy);
      }
    }, dependencies: [RouterLink, NgOptimizedImage, TestimonialCardComponent, EnquiryFormComponent, QuickContactBarComponent], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  background-color: var(--color-surface);\n  overflow: hidden;\n}\n.hero__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .hero__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.hero__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .hero__text[_ngcontent-%COMP%] {\n    order: 2;\n    text-align: center;\n    align-items: center;\n  }\n}\n.hero__eyebrow[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.hero__name[_ngcontent-%COMP%] {\n  line-height: 1.1;\n  color: var(--color-text);\n}\n.hero__nickname[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--color-text-muted);\n  font-style: italic;\n  margin-top: -0.5rem;\n}\n.hero__tagline[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--color-primary);\n  line-height: 1.4;\n}\n.hero__bio[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  max-width: 56ch;\n  line-height: 1.7;\n}\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n@media (max-width: 768px) {\n  .hero__actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.hero__photo-wrap[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 6/7;\n  background-color: var(--color-surface-alt);\n}\n@media (max-width: 768px) {\n  .hero__photo-wrap[_ngcontent-%COMP%] {\n    order: 1;\n    max-width: 320px;\n    margin-inline: auto;\n    aspect-ratio: 4/3;\n  }\n}\n.hero__photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n.section--alt[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-alt);\n}\n.section-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.testimonials__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .testimonials__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .testimonials__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-section__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-areas: "intro form" "bar   form";\n  gap: 2.5rem 4rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .contact-section__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-areas: "intro" "form" "bar";\n    gap: 2rem;\n  }\n}\n.contact-section__intro[_ngcontent-%COMP%] {\n  grid-area: intro;\n}\n.contact-section__intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.contact-section__intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.contact-section__form[_ngcontent-%COMP%] {\n  grid-area: form;\n}\n.contact-section__bar[_ngcontent-%COMP%] {\n  grid-area: bar;\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [RouterLink, NgOptimizedImage, TestimonialCardComponent, EnquiryFormComponent, QuickContactBarComponent], template: '<!-- src/app/pages/home/home.component.html -->\n\n<section class="hero section" aria-labelledby="hero-heading">\n  <div class="container hero__inner">\n\n    <div class="hero__text">\n      <p class="hero__eyebrow">{{ ui.hero.roleLabel }}</p>\n      <h1 id="hero-heading" class="hero__name">{{ config.agentName }}</h1>\n      @if (config.nickname) {\n        <p class="hero__nickname">"{{ config.nickname }}"</p>\n      }\n      <p class="hero__tagline">{{ config.tagline }}</p>\n      <p class="hero__bio">{{ config.bio }}</p>\n      <div class="hero__actions">\n        <a class="btn btn--accent" routerLink="/enquire">{{ ui.hero.ctaPrimary }}</a>\n        <a class="btn btn--outline" routerLink="/services">{{ ui.hero.ctaSecondary }}</a>\n      </div>\n    </div>\n\n    <div class="hero__photo-wrap">\n      <img [ngSrc]="config.profilePictureUrl" [alt]="config.profilePictureAlt"\n           width="480" height="560" class="hero__photo" priority fetchpriority="high" />\n    </div>\n\n  </div>\n</section>\n\n<section class="testimonials section section--alt" aria-labelledby="testimonials-heading">\n  <div class="container">\n    <h2 id="testimonials-heading" class="section-heading">{{ ui.testimonials.heading }}</h2>\n    <div class="testimonials__grid">\n      @for (testimonial of config.testimonials; track testimonial.id) {\n        <app-testimonial-card [testimonial]="testimonial" />\n      }\n    </div>\n  </div>\n</section>\n\n<section class="contact-section section" aria-labelledby="contact-heading">\n  <div class="container contact-section__inner">\n    <div class="contact-section__intro">\n      <h2 id="contact-heading">{{ config.homeContactSectionHeading }}</h2>\n      <p>{{ config.homeContactSectionCopy }}</p>\n    </div>\n    <div class="contact-section__form">\n      <app-enquiry-form defaultType="general" />\n    </div>\n    <div class="contact-section__bar">\n      <app-quick-contact-bar />\n    </div>\n  </div>\n</section>\n', styles: ['/* src/app/pages/home/home.component.scss */\n.hero {\n  background-color: var(--color-surface);\n  overflow: hidden;\n}\n.hero__inner {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .hero__inner {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.hero__text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .hero__text {\n    order: 2;\n    text-align: center;\n    align-items: center;\n  }\n}\n.hero__eyebrow {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.hero__name {\n  line-height: 1.1;\n  color: var(--color-text);\n}\n.hero__nickname {\n  font-size: 1.1rem;\n  color: var(--color-text-muted);\n  font-style: italic;\n  margin-top: -0.5rem;\n}\n.hero__tagline {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--color-primary);\n  line-height: 1.4;\n}\n.hero__bio {\n  color: var(--color-text-muted);\n  max-width: 56ch;\n  line-height: 1.7;\n}\n.hero__actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n@media (max-width: 768px) {\n  .hero__actions {\n    justify-content: center;\n  }\n}\n.hero__photo-wrap {\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 6/7;\n  background-color: var(--color-surface-alt);\n}\n@media (max-width: 768px) {\n  .hero__photo-wrap {\n    order: 1;\n    max-width: 320px;\n    margin-inline: auto;\n    aspect-ratio: 4/3;\n  }\n}\n.hero__photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n.section--alt {\n  background-color: var(--color-surface-alt);\n}\n.section-heading {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n.testimonials__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .testimonials__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .testimonials__grid {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-section__inner {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-areas: "intro form" "bar   form";\n  gap: 2.5rem 4rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .contact-section__inner {\n    grid-template-columns: 1fr;\n    grid-template-areas: "intro" "form" "bar";\n    gap: 2rem;\n  }\n}\n.contact-section__intro {\n  grid-area: intro;\n}\n.contact-section__intro h2 {\n  margin-bottom: 1rem;\n}\n.contact-section__intro p {\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.contact-section__form {\n  grid-area: form;\n}\n.contact-section__bar {\n  grid-area: bar;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 18 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-S2WHBM5H.js.map
