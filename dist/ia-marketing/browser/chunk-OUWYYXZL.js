import {
  QuickContactBarComponent
} from "./chunk-XUG3I5SQ.js";
import {
  Component,
  ConfigService,
  NgOptimizedImage,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PM22ZACH.js";

// src/app/pages/about/about.component.ts
function AboutComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "polyline", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const licence_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", licence_r1, " ");
  }
}
var AboutComponent = class _AboutComponent {
  constructor() {
    this.configService = inject(ConfigService);
    this.config = this.configService.config;
    this.ui = this.config.ui.about;
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 24, vars: 8, consts: [["aria-labelledby", "about-heading", 1, "about-hero", "section"], [1, "container", "about-hero__inner"], [1, "about-hero__text"], [1, "about-hero__eyebrow"], ["id", "about-heading"], ["aria-label", "Agent biography", 1, "about-hero__rich-text", 3, "innerHTML"], [1, "about-hero__sidebar"], [1, "about-hero__photo-wrap"], ["width", "420", "height", "500", 1, "about-hero__photo", 3, "ngSrc", "alt"], [1, "about-credentials"], [1, "about-credentials__heading"], ["role", "list", 1, "about-credentials__list"], [1, "about-credentials__item"], ["aria-labelledby", "about-contact-heading", 1, "about-contact", "section", "section--alt"], [1, "container"], ["id", "about-contact-heading"], [1, "about-contact__copy"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "about-credentials__check"], ["points", "20 6 9 17 4 12"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "aside", 6)(9, "div", 7);
        \u0275\u0275element(10, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "h2", 10);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "ul", 11);
        \u0275\u0275repeaterCreate(15, AboutComponent_For_16_Template, 4, 1, "li", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(17, "section", 13)(18, "div", 14)(19, "h2", 15);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 16);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "app-quick-contact-bar");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.sectionLabel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.agentName);
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", ctx.config.richTextAbout, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngSrc", ctx.config.secondaryProfilePictureUrl || ctx.config.profilePictureUrl)("alt", ctx.config.secondaryProfilePictureAlt || ctx.config.profilePictureAlt);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.ui.credentialsHeading);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.config.licences);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ui.contactHeading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.contactCopy);
      }
    }, dependencies: [NgOptimizedImage, QuickContactBarComponent], styles: ["\n\n.about-hero__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .about-hero__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.about-hero__eyebrow[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5rem;\n}\n.about-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.about-hero__rich-text[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.about-hero__rich-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.about-hero__rich-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n.about-hero__sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  position: sticky;\n  top: calc(var(--header-height) + 1.5rem);\n}\n@media (max-width: 768px) {\n  .about-hero__sidebar[_ngcontent-%COMP%] {\n    position: static;\n    order: -1;\n  }\n}\n.about-hero__photo-wrap[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 5/6;\n  background-color: var(--color-surface-alt);\n}\n.about-hero__photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n.about-credentials[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-alt);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.about-credentials__heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  color: var(--color-text);\n}\n.about-credentials__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.about-credentials__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  font-size: 15px;\n  color: var(--color-text-muted);\n  line-height: 1.5;\n}\n.about-credentials__check[_ngcontent-%COMP%] {\n  color: var(--color-success);\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.section--alt[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-alt);\n}\n.about-contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.about-contact__copy[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  margin-bottom: 2rem;\n  max-width: 56ch;\n  line-height: 1.7;\n}\n/*# sourceMappingURL=about.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, imports: [NgOptimizedImage, QuickContactBarComponent], template: '<!-- src/app/pages/about/about.component.html -->\n\n<section class="about-hero section" aria-labelledby="about-heading">\n  <div class="container about-hero__inner">\n\n    <div class="about-hero__text">\n      <p class="about-hero__eyebrow">{{ ui.sectionLabel }}</p>\n      <h1 id="about-heading">{{ config.agentName }}</h1>\n      <div class="about-hero__rich-text" [innerHTML]="config.richTextAbout" aria-label="Agent biography"></div>\n    </div>\n\n    <aside class="about-hero__sidebar">\n      <div class="about-hero__photo-wrap">\n        <img [ngSrc]="config.secondaryProfilePictureUrl || config.profilePictureUrl"\n             [alt]="config.secondaryProfilePictureAlt || config.profilePictureAlt"\n             width="420" height="500" class="about-hero__photo" />\n      </div>\n\n      <div class="about-credentials">\n        <h2 class="about-credentials__heading">{{ ui.credentialsHeading }}</h2>\n        <ul class="about-credentials__list" role="list">\n          @for (licence of config.licences; track licence) {\n            <li class="about-credentials__item">\n              <svg class="about-credentials__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\n                <polyline points="20 6 9 17 4 12"/>\n              </svg>\n              {{ licence }}\n            </li>\n          }\n        </ul>\n      </div>\n    </aside>\n\n  </div>\n</section>\n\n<section class="about-contact section section--alt" aria-labelledby="about-contact-heading">\n  <div class="container">\n    <h2 id="about-contact-heading">{{ ui.contactHeading }}</h2>\n    <p class="about-contact__copy">{{ ui.contactCopy }}</p>\n    <app-quick-contact-bar />\n  </div>\n</section>\n', styles: ["/* src/app/pages/about/about.component.scss */\n.about-hero__inner {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .about-hero__inner {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.about-hero__eyebrow {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5rem;\n}\n.about-hero h1 {\n  margin-bottom: 1.5rem;\n}\n.about-hero__rich-text {\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.about-hero__rich-text p + p {\n  margin-top: 1.25rem;\n}\n.about-hero__rich-text p {\n  font-size: 1.05rem;\n}\n.about-hero__sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  position: sticky;\n  top: calc(var(--header-height) + 1.5rem);\n}\n@media (max-width: 768px) {\n  .about-hero__sidebar {\n    position: static;\n    order: -1;\n  }\n}\n.about-hero__photo-wrap {\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 5/6;\n  background-color: var(--color-surface-alt);\n}\n.about-hero__photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n.about-credentials {\n  background-color: var(--color-surface-alt);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.about-credentials__heading {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  color: var(--color-text);\n}\n.about-credentials__list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.about-credentials__item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  font-size: 15px;\n  color: var(--color-text-muted);\n  line-height: 1.5;\n}\n.about-credentials__check {\n  color: var(--color-success);\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.section--alt {\n  background-color: var(--color-surface-alt);\n}\n.about-contact h2 {\n  margin-bottom: 1rem;\n}\n.about-contact__copy {\n  color: var(--color-text-muted);\n  margin-bottom: 2rem;\n  max-width: 56ch;\n  line-height: 1.7;\n}\n/*# sourceMappingURL=about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/pages/about/about.component.ts", lineNumber: 15 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-OUWYYXZL.js.map
