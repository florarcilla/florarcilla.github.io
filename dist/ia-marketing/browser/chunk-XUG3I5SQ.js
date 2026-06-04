import {
  Component,
  ConfigService,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PM22ZACH.js";

// src/app/shared/components/quick-contact-bar/quick-contact-bar.component.ts
function QuickContactBarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function QuickContactBarComponent_Conditional_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    })("keydown.escape", function QuickContactBarComponent_Conditional_16_Template_div_keydown_escape_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275listener("click", function QuickContactBarComponent_Conditional_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 13);
    \u0275\u0275element(4, "path", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 17);
    \u0275\u0275listener("click", function QuickContactBarComponent_Conditional_16_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectService("insurance"));
    });
    \u0275\u0275elementStart(11, "span", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 19);
    \u0275\u0275element(13, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "svg", 21);
    \u0275\u0275element(16, "line", 22)(17, "polyline", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 17);
    \u0275\u0275listener("click", function QuickContactBarComponent_Conditional_16_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectService("realestate"));
    });
    \u0275\u0275elementStart(19, "span", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 19);
    \u0275\u0275element(21, "path", 25)(22, "polyline", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(23);
    \u0275\u0275elementStart(24, "svg", 21);
    \u0275\u0275element(25, "line", 22)(26, "polyline", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 27);
    \u0275\u0275listener("click", function QuickContactBarComponent_Conditional_16_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.modalUi.title);
    \u0275\u0275advance(6);
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
var QuickContactBarComponent = class _QuickContactBarComponent {
  constructor() {
    this.configService = inject(ConfigService);
    this.config = this.configService.config;
    this.ui = this.config.ui.quickContact;
    this.modalUi = this.config.ui.whatsappModal;
    this.modalOpen = signal(false);
  }
  get telUrl() {
    return `tel:${this.config.phone}`;
  }
  openWhatsAppModal() {
    this.modalOpen.set(true);
  }
  closeModal() {
    this.modalOpen.set(false);
  }
  selectService(type) {
    const message = type === "insurance" ? this.modalUi.messageInsurance : this.modalUi.messageRealestate;
    const url = `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    this.closeModal();
  }
  static {
    this.\u0275fac = function QuickContactBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickContactBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickContactBarComponent, selectors: [["app-quick-contact-bar"]], decls: 17, vars: 8, consts: [["aria-label", "Quick contact options", 1, "quick-contact"], ["type", "button", 1, "quick-contact__btn", "quick-contact__btn--whatsapp", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Contact via Facebook Messenger", 1, "quick-contact__btn", "quick-contact__btn--messenger", 3, "href"], ["d", "M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"], [1, "quick-contact__btn", "quick-contact__btn--call", 3, "href"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"], ["role", "dialog", "aria-modal", "true", 1, "wa-modal-backdrop"], ["role", "dialog", "aria-modal", "true", 1, "wa-modal-backdrop", 3, "click", "keydown.escape"], [1, "wa-modal", 3, "click"], ["aria-hidden", "true", 1, "wa-modal__icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "currentColor"], [1, "wa-modal__title"], [1, "wa-modal__subtitle"], [1, "wa-modal__options"], ["type", "button", 1, "wa-modal__option", 3, "click"], ["aria-hidden", "true", 1, "wa-modal__option-icon", "wa-modal__option-icon--insurance"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "wa-modal__option-arrow"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], ["aria-hidden", "true", 1, "wa-modal__option-icon", "wa-modal__option-icon--realestate"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], ["type", "button", 1, "wa-modal__cancel", 3, "click"]], template: function QuickContactBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function QuickContactBarComponent_Template_button_click_1_listener() {
          return ctx.openWhatsAppModal();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2);
        \u0275\u0275element(3, "path", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "a", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 2);
        \u0275\u0275element(8, "path", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "a", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 7);
        \u0275\u0275element(13, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(16, QuickContactBarComponent_Conditional_16_Template, 29, 6, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", "Contact via WhatsApp");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.whatsapp);
        \u0275\u0275advance();
        \u0275\u0275property("href", ctx.config.facebookMessengerUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.messenger);
        \u0275\u0275advance();
        \u0275\u0275property("href", ctx.telUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275attribute("aria-label", ctx.ui.call + " " + ctx.config.agentName);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.call);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.modalOpen() ? 16 : -1);
      }
    }, styles: ["\n\n.quick-contact[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.quick-contact__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background-color 150ms ease, transform 150ms ease;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.quick-contact__btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  text-decoration: none;\n}\n.quick-contact__btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.quick-contact__btn--whatsapp[_ngcontent-%COMP%] {\n  background-color: #25D366;\n  color: #ffffff;\n  border-color: #25D366;\n}\n.quick-contact__btn--whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: #1ebe5d;\n}\n.quick-contact__btn--messenger[_ngcontent-%COMP%] {\n  background-color: #0084FF;\n  color: #ffffff;\n  border-color: #0084FF;\n}\n.quick-contact__btn--messenger[_ngcontent-%COMP%]:hover {\n  background-color: #0072e0;\n}\n.quick-contact__btn--call[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-alt);\n  color: var(--color-text);\n  border-color: var(--color-border);\n}\n.quick-contact__btn--call[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n@media (max-width: 767px) {\n  .quick-contact[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 1.5rem;\n    right: 1rem;\n    flex-direction: column;\n    align-items: flex-end;\n    gap: 0.75rem;\n    z-index: 150;\n  }\n  .quick-contact__btn[_ngcontent-%COMP%] {\n    border-radius: 100px;\n    box-shadow: var(--shadow-card-hover);\n    padding: 1rem;\n  }\n  .quick-contact__btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .quick-contact__btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n}\n.wa-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 150ms ease both;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.wa-modal[_ngcontent-%COMP%] {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 2rem;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  animation: _ngcontent-%COMP%_slideUp 250ms ease both;\n}\n@media (max-width: 480px) {\n  .wa-modal[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.wa-modal__icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: #25D366;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wa-modal__title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  color: var(--color-text);\n  margin: 0;\n}\n.wa-modal__subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  text-align: center;\n  line-height: 1.7;\n  max-width: 30ch;\n  margin-top: -0.5rem;\n}\n.wa-modal__options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.wa-modal__option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n  border: 1.5px solid var(--color-border);\n  text-align: left;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    color 150ms ease,\n    transform 150ms ease;\n  cursor: pointer;\n}\n.wa-modal__option[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-light);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(4px);\n  text-decoration: none;\n}\n.wa-modal__option[_ngcontent-%COMP%]:active {\n  transform: translateX(2px);\n}\n.wa-modal__option-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.wa-modal__option-icon--insurance[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.wa-modal__option-icon--realestate[_ngcontent-%COMP%] {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  color: var(--color-accent);\n}\n.wa-modal__option-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n  transition: transform 150ms ease;\n}\n.wa-modal__option[_ngcontent-%COMP%]:hover   .wa-modal__option-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n  color: var(--color-primary);\n}\n.wa-modal__cancel[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  transition: color 150ms ease, background-color 150ms ease;\n  margin-top: -0.25rem;\n}\n.wa-modal__cancel[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=quick-contact-bar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickContactBarComponent, [{
    type: Component,
    args: [{ selector: "app-quick-contact-bar", standalone: true, template: `<!-- src/app/shared/components/quick-contact-bar/quick-contact-bar.component.html -->

<!-- \u2500\u2500 Contact buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="quick-contact" aria-label="Quick contact options">

  <button
    class="quick-contact__btn quick-contact__btn--whatsapp"
    type="button"
    [attr.aria-label]="'Contact via WhatsApp'"
    (click)="openWhatsAppModal()"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span>{{ ui.whatsapp }}</span>
  </button>

  <a class="quick-contact__btn quick-contact__btn--messenger"
     [href]="config.facebookMessengerUrl" target="_blank" rel="noopener noreferrer"
     aria-label="Contact via Facebook Messenger">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
    </svg>
    <span>{{ ui.messenger }}</span>
  </a>

  <a class="quick-contact__btn quick-contact__btn--call"
     [href]="telUrl"
     [attr.aria-label]="ui.call + ' ' + config.agentName">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
    </svg>
    <span>{{ ui.call }}</span>
  </a>

</div>

<!-- \u2500\u2500 WhatsApp service-picker modal \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (modalOpen()) {
  <div
    class="wa-modal-backdrop"
    role="dialog"
    aria-modal="true"
    [attr.aria-label]="modalUi.title"
    (click)="closeModal()"
    (keydown.escape)="closeModal()"
  >
    <div class="wa-modal" (click)="$event.stopPropagation()">

      <div class="wa-modal__icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </div>

      <h2 class="wa-modal__title">{{ modalUi.title }}</h2>
      <p class="wa-modal__subtitle">{{ modalUi.subtitle }}</p>

      <div class="wa-modal__options">
        <button class="wa-modal__option" type="button" (click)="selectService('insurance')">
          <span class="wa-modal__option-icon wa-modal__option-icon--insurance" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </span>
          {{ modalUi.insurance }}
          <svg class="wa-modal__option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>

        <button class="wa-modal__option" type="button" (click)="selectService('realestate')">
          <span class="wa-modal__option-icon wa-modal__option-icon--realestate" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </span>
          {{ modalUi.realestate }}
          <svg class="wa-modal__option-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>

      <button class="wa-modal__cancel" type="button" (click)="closeModal()">
        {{ modalUi.cancel }}
      </button>

    </div>
  </div>
}
`, styles: ["/* src/app/shared/components/quick-contact-bar/quick-contact-bar.component.scss */\n.quick-contact {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.quick-contact__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: background-color 150ms ease, transform 150ms ease;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.quick-contact__btn:hover {\n  transform: translateY(-1px);\n  text-decoration: none;\n}\n.quick-contact__btn:active {\n  transform: translateY(0);\n}\n.quick-contact__btn--whatsapp {\n  background-color: #25D366;\n  color: #ffffff;\n  border-color: #25D366;\n}\n.quick-contact__btn--whatsapp:hover {\n  background-color: #1ebe5d;\n}\n.quick-contact__btn--messenger {\n  background-color: #0084FF;\n  color: #ffffff;\n  border-color: #0084FF;\n}\n.quick-contact__btn--messenger:hover {\n  background-color: #0072e0;\n}\n.quick-contact__btn--call {\n  background-color: var(--color-surface-alt);\n  color: var(--color-text);\n  border-color: var(--color-border);\n}\n.quick-contact__btn--call:hover {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n  border-color: var(--color-primary);\n}\n@media (max-width: 767px) {\n  .quick-contact {\n    position: fixed;\n    bottom: 1.5rem;\n    right: 1rem;\n    flex-direction: column;\n    align-items: flex-end;\n    gap: 0.75rem;\n    z-index: 150;\n  }\n  .quick-contact__btn {\n    border-radius: 100px;\n    box-shadow: var(--shadow-card-hover);\n    padding: 1rem;\n  }\n  .quick-contact__btn span {\n    display: none;\n  }\n  .quick-contact__btn svg {\n    width: 22px;\n    height: 22px;\n  }\n}\n.wa-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: fadeIn 150ms ease both;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.wa-modal {\n  background-color: var(--color-surface-raised);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 2rem;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  animation: slideUp 250ms ease both;\n}\n@media (max-width: 480px) {\n  .wa-modal {\n    padding: 1.5rem;\n  }\n}\n.wa-modal__icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: #25D366;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.wa-modal__title {\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  color: var(--color-text);\n  margin: 0;\n}\n.wa-modal__subtitle {\n  font-size: 15px;\n  color: var(--color-text-muted);\n  text-align: center;\n  line-height: 1.7;\n  max-width: 30ch;\n  margin-top: -0.5rem;\n}\n.wa-modal__options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n}\n.wa-modal__option {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n  border: 1.5px solid var(--color-border);\n  text-align: left;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    color 150ms ease,\n    transform 150ms ease;\n  cursor: pointer;\n}\n.wa-modal__option:hover {\n  background-color: var(--color-primary-light);\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  transform: translateX(4px);\n  text-decoration: none;\n}\n.wa-modal__option:active {\n  transform: translateX(2px);\n}\n.wa-modal__option-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.wa-modal__option-icon--insurance {\n  background-color: var(--color-primary-light);\n  color: var(--color-primary);\n}\n.wa-modal__option-icon--realestate {\n  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);\n  color: var(--color-accent);\n}\n.wa-modal__option-arrow {\n  margin-left: auto;\n  color: var(--color-text-muted);\n  flex-shrink: 0;\n  transition: transform 150ms ease;\n}\n.wa-modal__option:hover .wa-modal__option-arrow {\n  transform: translateX(3px);\n  color: var(--color-primary);\n}\n.wa-modal__cancel {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  transition: color 150ms ease, background-color 150ms ease;\n  margin-top: -0.25rem;\n}\n.wa-modal__cancel:hover {\n  color: var(--color-text);\n  background-color: var(--color-surface-alt);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=quick-contact-bar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickContactBarComponent, { className: "QuickContactBarComponent", filePath: "src/app/shared/components/quick-contact-bar/quick-contact-bar.component.ts", lineNumber: 12 });
})();

export {
  QuickContactBarComponent
};
//# sourceMappingURL=chunk-XUG3I5SQ.js.map
