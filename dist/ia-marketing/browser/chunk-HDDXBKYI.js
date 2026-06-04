import {
  EnquiryFormComponent
} from "./chunk-YOVQESAB.js";
import {
  ActivatedRoute
} from "./chunk-EGYCMOMF.js";
import {
  QuickContactBarComponent
} from "./chunk-XUG3I5SQ.js";
import {
  Component,
  ConfigService,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PM22ZACH.js";

// src/app/pages/enquire/enquire.component.ts
var VALID_TYPES = ["insurance", "realestate", "general"];
var EnquireComponent = class _EnquireComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.configService = inject(ConfigService);
    this.config = this.configService.config;
    this.ui = this.config.ui.enquire;
    this.defaultType = signal("general");
  }
  ngOnInit() {
    const typeParam = this.route.snapshot.queryParamMap.get("type");
    if (typeParam && VALID_TYPES.includes(typeParam)) {
      this.defaultType.set(typeParam);
    }
  }
  static {
    this.\u0275fac = function EnquireComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquireComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnquireComponent, selectors: [["app-enquire"]], decls: 20, vars: 9, consts: [["aria-labelledby", "enquire-heading", 1, "enquire", "section"], [1, "container", "enquire__inner"], [1, "enquire__intro"], ["id", "enquire-heading"], [1, "enquire__copy"], [1, "enquire__contact-details"], [1, "enquire__contact-link", 3, "href"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "enquire__form"], [3, "defaultType"]], template: function EnquireComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "app-quick-contact-bar");
        \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 7);
        \u0275\u0275element(11, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "a", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(14, "svg", 7);
        \u0275\u0275element(15, "path", 9)(16, "polyline", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275element(19, "app-enquiry-form", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.heading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.enquiryFormIntro);
        \u0275\u0275advance(3);
        \u0275\u0275property("href", "tel:" + ctx.config.phone, \u0275\u0275sanitizeUrl);
        \u0275\u0275attribute("aria-label", "Call " + ctx.config.agentName);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.config.phone, " ");
        \u0275\u0275advance();
        \u0275\u0275property("href", "mailto:" + ctx.config.email, \u0275\u0275sanitizeUrl);
        \u0275\u0275attribute("aria-label", "Email " + ctx.config.agentName);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.config.email, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("defaultType", ctx.defaultType());
      }
    }, dependencies: [EnquiryFormComponent, QuickContactBarComponent], styles: ["\n\n.enquire__inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .enquire__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.enquire__intro[_ngcontent-%COMP%] {\n  position: sticky;\n  top: calc(var(--header-height) + 1.5rem);\n}\n@media (max-width: 768px) {\n  .enquire__intro[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.enquire__intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.enquire__copy[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  margin-bottom: 2rem;\n}\n.enquire__contact-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.enquire__contact-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  transition: color 150ms ease;\n}\n.enquire__contact-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.enquire__contact-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--color-primary);\n}\n.enquire__form[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: var(--shadow-card);\n}\n@media (max-width: 480px) {\n  .enquire__form[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n}\n/*# sourceMappingURL=enquire.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquireComponent, [{
    type: Component,
    args: [{ selector: "app-enquire", standalone: true, imports: [EnquiryFormComponent, QuickContactBarComponent], template: `<!-- src/app/pages/enquire/enquire.component.html -->

<section class="enquire section" aria-labelledby="enquire-heading">
  <div class="container enquire__inner">

    <div class="enquire__intro">
      <h1 id="enquire-heading">{{ ui.heading }}</h1>
      <p class="enquire__copy">{{ config.enquiryFormIntro }}</p>

      <app-quick-contact-bar />

      <div class="enquire__contact-details">
        <a class="enquire__contact-link" [href]="'tel:' + config.phone" [attr.aria-label]="'Call ' + config.agentName">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
          </svg>
          {{ config.phone }}
        </a>
        <a class="enquire__contact-link" [href]="'mailto:' + config.email" [attr.aria-label]="'Email ' + config.agentName">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          {{ config.email }}
        </a>
      </div>
    </div>

    <div class="enquire__form">
      <app-enquiry-form [defaultType]="defaultType()" />
    </div>

  </div>
</section>
`, styles: ["/* src/app/pages/enquire/enquire.component.scss */\n.enquire__inner {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .enquire__inner {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.enquire__intro {\n  position: sticky;\n  top: calc(var(--header-height) + 1.5rem);\n}\n@media (max-width: 768px) {\n  .enquire__intro {\n    position: static;\n  }\n}\n.enquire__intro h1 {\n  margin-bottom: 1rem;\n}\n.enquire__copy {\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  margin-bottom: 2rem;\n}\n.enquire__contact-details {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.enquire__contact-link {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  transition: color 150ms ease;\n}\n.enquire__contact-link:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n.enquire__contact-link svg {\n  flex-shrink: 0;\n  color: var(--color-primary);\n}\n.enquire__form {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: var(--shadow-card);\n}\n@media (max-width: 480px) {\n  .enquire__form {\n    padding: 1.5rem 1rem;\n  }\n}\n/*# sourceMappingURL=enquire.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnquireComponent, { className: "EnquireComponent", filePath: "src/app/pages/enquire/enquire.component.ts", lineNumber: 19 });
})();
export {
  EnquireComponent
};
//# sourceMappingURL=chunk-HDDXBKYI.js.map
