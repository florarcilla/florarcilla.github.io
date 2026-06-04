import {
  RouterLink
} from "./chunk-EGYCMOMF.js";
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
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PM22ZACH.js";

// src/app/shared/components/service-card/service-card.component.ts
var _c0 = () => ["/enquire"];
var _c1 = (a0) => ({ type: a0 });
var ServiceCardComponent = class _ServiceCardComponent {
  constructor() {
    this.ui = inject(ConfigService).config.ui.services;
  }
  static {
    this.\u0275fac = function ServiceCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceCardComponent, selectors: [["app-service-card"]], inputs: { service: "service" }, decls: 15, vars: 15, consts: [[1, "service-card"], [1, "service-card__image-wrap"], ["width", "400", "height", "240", 1, "service-card__image", 3, "ngSrc", "alt"], [1, "service-card__body"], [1, "service-card__title"], [1, "service-card__desc"], [1, "service-card__cta", 3, "routerLink", "queryParams"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"]], template: function ServiceCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "h3", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 7);
        \u0275\u0275element(13, "line", 8)(14, "polyline", 9);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", ctx.service.imageUrl)("alt", ctx.service.imageAlt);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("service-card__badge service-card__badge--", ctx.service.type, "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.service.type === "insurance" ? ctx.ui.insuranceBadge : ctx.ui.realestateBadge, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.service.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.service.description);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0))("queryParams", \u0275\u0275pureFunction1(13, _c1, ctx.service.type));
        \u0275\u0275attribute("aria-label", ctx.ui.enquireButton + " " + ctx.service.title);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.ui.enquireButton, " ");
      }
    }, dependencies: [RouterLink, NgOptimizedImage], styles: ["\n\n.service-card[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-card);\n  transition: box-shadow 250ms ease, transform 250ms ease;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-card-hover);\n  transform: translateY(-3px);\n}\n.service-card__image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 5/3;\n  overflow: hidden;\n  background-color: var(--color-surface-alt);\n}\n.service-card__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 400ms ease;\n}\n.service-card[_ngcontent-%COMP%]:hover   .service-card__image[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.service-card__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.service-card__badge--insurance[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n.service-card__badge--realestate[_ngcontent-%COMP%] {\n  background-color: var(--color-accent);\n  color: var(--color-text-inverse);\n}\n.service-card__body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.service-card__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.3;\n}\n.service-card__desc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.service-card__cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin-top: 0.5rem;\n  transition: gap 150ms ease, color 150ms ease;\n}\n.service-card__cta[_ngcontent-%COMP%]:hover {\n  gap: 0.75rem;\n  color: var(--color-primary-dark);\n  text-decoration: none;\n}\n/*# sourceMappingURL=service-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceCardComponent, [{
    type: Component,
    args: [{ selector: "app-service-card", standalone: true, imports: [RouterLink, NgOptimizedImage], template: `<!-- src/app/shared/components/service-card/service-card.component.html -->
<article class="service-card">
  <div class="service-card__image-wrap">
    <img [ngSrc]="service.imageUrl" [alt]="service.imageAlt" width="400" height="240" class="service-card__image" />
    <span class="service-card__badge service-card__badge--{{ service.type }}">
      {{ service.type === 'insurance' ? ui.insuranceBadge : ui.realestateBadge }}
    </span>
  </div>
  <div class="service-card__body">
    <h3 class="service-card__title">{{ service.title }}</h3>
    <p class="service-card__desc">{{ service.description }}</p>
    <a class="service-card__cta"
       [routerLink]="['/enquire']"
       [queryParams]="{ type: service.type }"
       [attr.aria-label]="ui.enquireButton + ' ' + service.title">
      {{ ui.enquireButton }}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </a>
  </div>
</article>
`, styles: ["/* src/app/shared/components/service-card/service-card.component.scss */\n.service-card {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--shadow-card);\n  transition: box-shadow 250ms ease, transform 250ms ease;\n}\n.service-card:hover {\n  box-shadow: var(--shadow-card-hover);\n  transform: translateY(-3px);\n}\n.service-card__image-wrap {\n  position: relative;\n  aspect-ratio: 5/3;\n  overflow: hidden;\n  background-color: var(--color-surface-alt);\n}\n.service-card__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 400ms ease;\n}\n.service-card:hover .service-card__image {\n  transform: scale(1.03);\n}\n.service-card__badge {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.service-card__badge--insurance {\n  background-color: var(--color-primary);\n  color: var(--color-text-inverse);\n}\n.service-card__badge--realestate {\n  background-color: var(--color-accent);\n  color: var(--color-text-inverse);\n}\n.service-card__body {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex: 1;\n}\n.service-card__title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.3;\n}\n.service-card__desc {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.service-card__cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin-top: 0.5rem;\n  transition: gap 150ms ease, color 150ms ease;\n}\n.service-card__cta:hover {\n  gap: 0.75rem;\n  color: var(--color-primary-dark);\n  text-decoration: none;\n}\n/*# sourceMappingURL=service-card.component.css.map */\n"] }]
  }], null, { service: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceCardComponent, { className: "ServiceCardComponent", filePath: "src/app/shared/components/service-card/service-card.component.ts", lineNumber: 16 });
})();

// src/app/pages/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicesComponent_For_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service-card", 15);
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("service", service_r1);
  }
}
function ServicesComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ServicesComponent_For_16_Conditional_0_Template, 1, 1, "app-service-card", 15);
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275conditional(service_r1.type === "insurance" ? 0 : -1);
  }
}
function ServicesComponent_For_26_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service-card", 15);
  }
  if (rf & 2) {
    const service_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("service", service_r2);
  }
}
function ServicesComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ServicesComponent_For_26_Conditional_0_Template, 1, 1, "app-service-card", 15);
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    \u0275\u0275conditional(service_r2.type === "realestate" ? 0 : -1);
  }
}
var ServicesComponent = class _ServicesComponent {
  constructor() {
    this.configService = inject(ConfigService);
    this.config = this.configService.config;
    this.ui = this.config.ui;
  }
  static {
    this.\u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 27, vars: 4, consts: [["aria-labelledby", "services-hero-heading", 1, "services-hero", "section"], [1, "container", "services-hero__inner"], ["id", "services-hero-heading"], [1, "services-hero__sub"], ["aria-label", "All services", 1, "services-grid-section", "section", "section--alt"], [1, "container"], [1, "services-category"], [1, "services-category__heading"], ["aria-hidden", "true", 1, "services-category__icon", "services-category__icon--insurance"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [1, "services-grid"], ["aria-hidden", "true", 1, "services-category__icon", "services-category__icon--realestate"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [3, "service"]], template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "section", 4)(7, "div", 5)(8, "div", 6)(9, "h2", 7)(10, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 9);
        \u0275\u0275element(12, "path", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 11);
        \u0275\u0275repeaterCreate(15, ServicesComponent_For_16_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 6)(18, "h2", 7)(19, "span", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(20, "svg", 9);
        \u0275\u0275element(21, "path", 13)(22, "polyline", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275repeaterCreate(25, ServicesComponent_For_26_Template, 1, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.config.servicesPageHero.heading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.config.servicesPageHero.subCopy);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.ui.services.insuranceCategory, " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.config.services);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.ui.services.realestateCategory, " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.config.services);
      }
    }, dependencies: [ServiceCardComponent], styles: ["\n\n.services-hero[_ngcontent-%COMP%] {\n  background-color: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.services-hero__inner[_ngcontent-%COMP%] {\n  max-width: 680px;\n}\n.services-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.services-hero__sub[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.section--alt[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-alt);\n}\n.services-category[_ngcontent-%COMP%]    + .services-category[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.services-category__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid var(--color-border);\n}\n.services-category__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.services-category__icon--insurance[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.services-category__icon--realestate[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  color: var(--color-accent);\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=services.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [ServiceCardComponent], template: `<!-- src/app/pages/services/services.component.html -->

<section class="services-hero section" aria-labelledby="services-hero-heading">
  <div class="container services-hero__inner">
    <h1 id="services-hero-heading">{{ config.servicesPageHero.heading }}</h1>
    <p class="services-hero__sub">{{ config.servicesPageHero.subCopy }}</p>
  </div>
</section>

<section class="services-grid-section section section--alt" aria-label="All services">
  <div class="container">

    <div class="services-category">
      <h2 class="services-category__heading">
        <span class="services-category__icon services-category__icon--insurance" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </span>
        {{ ui.services.insuranceCategory }}
      </h2>
      <div class="services-grid">
        @for (service of config.services; track service.id) {
          @if (service.type === 'insurance') {
            <app-service-card [service]="service" />
          }
        }
      </div>
    </div>

    <div class="services-category">
      <h2 class="services-category__heading">
        <span class="services-category__icon services-category__icon--realestate" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </span>
        {{ ui.services.realestateCategory }}
      </h2>
      <div class="services-grid">
        @for (service of config.services; track service.id) {
          @if (service.type === 'realestate') {
            <app-service-card [service]="service" />
          }
        }
      </div>
    </div>

  </div>
</section>
`, styles: ["/* src/app/pages/services/services.component.scss */\n.services-hero {\n  background-color: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n}\n.services-hero__inner {\n  max-width: 680px;\n}\n.services-hero h1 {\n  margin-bottom: 1rem;\n}\n.services-hero__sub {\n  font-size: 1.1rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.section--alt {\n  background-color: var(--color-surface-alt);\n}\n.services-category + .services-category {\n  margin-top: 4rem;\n}\n.services-category__heading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid var(--color-border);\n}\n.services-category__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.services-category__icon--insurance {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.services-category__icon--realestate {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  color: var(--color-accent);\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .services-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=services.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/pages/services/services.component.ts", lineNumber: 14 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-5QOII3CO.js.map
