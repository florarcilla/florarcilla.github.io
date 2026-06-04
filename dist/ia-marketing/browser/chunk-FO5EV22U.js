import {
  Component,
  ConfigService,
  DOCUMENT,
  HostListener,
  HttpClient,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵcomponentInstance,
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PM22ZACH.js";

// src/app/pages/gallery/gallery.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 8, 9];
function GalleryComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r1 = ctx.$implicit;
    \u0275\u0275property("value", y_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r1);
  }
}
function GalleryComponent_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
  }
}
function GalleryComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, GalleryComponent_Conditional_34_For_2_Template, 1, 0, "div", 22, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function GalleryComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ui.noItems);
  }
}
function GalleryComponent_For_37_For_5_For_4_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 33);
    \u0275\u0275elementStart(1, "span", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "path", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r4.path, \u0275\u0275sanitizeUrl);
  }
}
function GalleryComponent_For_37_For_5_For_4_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37)(2, "text", 38);
    \u0275\u0275text(3, "Flor");
    \u0275\u0275elementStart(4, "tspan", 39);
    \u0275\u0275text(5, ".");
    \u0275\u0275elementEnd()()()();
  }
}
function GalleryComponent_For_37_For_5_For_4_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 40);
    \u0275\u0275listener("error", function GalleryComponent_For_37_For_5_For_4_For_5_Conditional_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.markError(item_r4.path));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r4.path, \u0275\u0275sanitizeUrl)("alt", item_r4.alt);
  }
}
function GalleryComponent_For_37_For_5_For_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function GalleryComponent_For_37_For_5_For_4_For_5_Template_button_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openLightbox(item_r4));
    });
    \u0275\u0275template(1, GalleryComponent_For_37_For_5_For_4_For_5_Conditional_1_Template, 4, 1)(2, GalleryComponent_For_37_For_5_For_4_For_5_Conditional_2_Template, 6, 0, "span", 31)(3, GalleryComponent_For_37_For_5_For_4_For_5_Conditional_3_Template, 1, 2, "img", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("aria-label", item_r4.alt);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.isVideo ? 1 : ctx_r1.erroredPaths().has(item_r4.path) ? 2 : 3);
  }
}
function GalleryComponent_For_37_For_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h4", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275repeaterCreate(4, GalleryComponent_For_37_For_5_For_4_For_5_Template, 4, 2, "button", 29, \u0275\u0275componentInstance().trackItem, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const monthGroup_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(monthGroup_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(monthGroup_r6.items);
  }
}
function GalleryComponent_For_37_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h3", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, GalleryComponent_For_37_For_5_For_4_Template, 6, 1, "div", 26, \u0275\u0275componentInstance().trackMonth, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const yearGroup_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(yearGroup_r7.year);
    \u0275\u0275advance();
    \u0275\u0275repeater(yearGroup_r7.months);
  }
}
function GalleryComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "h2", 23);
    \u0275\u0275element(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, GalleryComponent_For_37_For_5_Template, 5, 1, "div", 24, \u0275\u0275componentInstance().trackYear, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r8 = ctx.$implicit;
    \u0275\u0275attribute("aria-labelledby", "section-" + section_r8.type);
    \u0275\u0275advance();
    \u0275\u0275property("id", "section-" + section_r8.type);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("gallery-section__badge gallery-section__badge--", section_r8.type, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r8.label, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r8.years);
  }
}
function GalleryComponent_Conditional_38_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 43);
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext();
    \u0275\u0275property("src", item_r10.path, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", item_r10.alt);
  }
}
function GalleryComponent_Conditional_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37)(2, "text", 38);
    \u0275\u0275text(3, "Flor");
    \u0275\u0275elementStart(4, "tspan", 39);
    \u0275\u0275text(5, ".");
    \u0275\u0275elementEnd()()()();
  }
}
function GalleryComponent_Conditional_38_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 60);
    \u0275\u0275listener("error", function GalleryComponent_Conditional_38_Conditional_4_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r11);
      const item_r10 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markError(item_r10.path));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext();
    \u0275\u0275property("src", item_r10.path, \u0275\u0275sanitizeUrl)("alt", item_r10.alt);
  }
}
function GalleryComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLightbox());
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_38_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(2, GalleryComponent_Conditional_38_Conditional_2_Template, 1, 2, "video", 43)(3, GalleryComponent_Conditional_38_Conditional_3_Template, 6, 0, "span", 44)(4, GalleryComponent_Conditional_38_Conditional_4_Template, 1, 2, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_38_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(6, "button", 47);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 48);
    \u0275\u0275element(8, "polyline", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 47);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_38_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 48);
    \u0275\u0275element(13, "polyline", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 52);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_38_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadCurrent());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 53);
    \u0275\u0275element(16, "path", 54)(17, "polyline", 55)(18, "line", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 57);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_38_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLightbox());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 48);
    \u0275\u0275element(21, "line", 58)(22, "line", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", item_r10.alt);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r10.isVideo ? 2 : ctx_r1.erroredPaths().has(item_r10.path) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", ctx_r1.ui.lightbox.prev);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.lightboxIndex() + 1, " / ", ctx_r1.flatItems().length, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.ui.lightbox.next);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.ui.lightbox.download);
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", ctx_r1.ui.lightbox.close);
  }
}
var MONTH_MAP = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};
var MONTH_LABEL = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};
var VIDEO_EXTS = /* @__PURE__ */ new Set(["mp4", "webm", "mov", "avi", "ogg"]);
var TYPE_ORDER = ["general", "insurance", "realestate"];
function parseFilename(filename) {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  const base = filename.replace(/\.[^.]+$/, "").toLowerCase();
  const parts = base.split("_");
  if (parts.length < 3)
    return null;
  const type = parts[0];
  const monthStr = parts[1];
  const yearNum = parseInt(parts[2], 10);
  const month = MONTH_MAP[monthStr];
  if (!TYPE_ORDER.includes(type) || !month || isNaN(yearNum))
    return null;
  const suffix = parts.slice(3).join(" ").trim();
  const alt = suffix ? `${type} \u2013 ${MONTH_LABEL[month]} ${yearNum} (${suffix})` : `${type} \u2013 ${MONTH_LABEL[month]} ${yearNum}`;
  return {
    filename,
    path: `assets/gallery/${filename}`,
    type,
    month,
    monthLabel: MONTH_LABEL[month],
    year: yearNum,
    isVideo: VIDEO_EXTS.has(ext),
    alt
  };
}
var GalleryComponent = class _GalleryComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.doc = inject(DOCUMENT);
    this.cfgSvc = inject(ConfigService);
    this.config = this.cfgSvc.config;
    this.ui = this.config.ui.gallery;
    this.loading = signal(true);
    this.error = signal(false);
    this.manifestFiles = signal([]);
    this.allItems = computed(() => this.manifestFiles().map(parseFilename).filter((i) => i !== null));
    this.filterType = signal("all");
    this.filterYear = signal("all");
    this.availableYears = computed(() => {
      const years = [...new Set(this.allItems().map((i) => i.year))];
      return years.sort((a, b) => b - a);
    });
    this.sections = computed(() => {
      const ft = this.filterType();
      const fy = this.filterYear();
      const filtered = this.allItems().filter((item) => (ft === "all" || item.type === ft) && (fy === "all" || item.year === fy));
      const sectionLabels = {
        general: this.ui.sections.general,
        insurance: this.ui.sections.insurance,
        realestate: this.ui.sections.realestate
      };
      const map = /* @__PURE__ */ new Map();
      for (const item of filtered) {
        if (!map.has(item.type))
          map.set(item.type, /* @__PURE__ */ new Map());
        const ym = map.get(item.type);
        if (!ym.has(item.year))
          ym.set(item.year, /* @__PURE__ */ new Map());
        const mm = ym.get(item.year);
        if (!mm.has(item.month))
          mm.set(item.month, []);
        mm.get(item.month).push(item);
      }
      return TYPE_ORDER.filter((t) => map.has(t)).map((t) => ({
        type: t,
        label: sectionLabels[t],
        years: [...map.get(t).entries()].sort(([a], [b]) => b - a).map(([year, mm]) => ({
          year,
          months: [...mm.entries()].sort(([a], [b]) => b - a).map(([month, items]) => ({
            month,
            label: MONTH_LABEL[month],
            items
          }))
        }))
      }));
    });
    this.flatItems = computed(() => this.sections().flatMap((s) => s.years.flatMap((y) => y.months.flatMap((m) => m.items))));
    this.erroredPaths = signal(/* @__PURE__ */ new Set());
    this.lightboxOpen = signal(false);
    this.lightboxIndex = signal(0);
    this.lightboxItem = computed(() => this.lightboxOpen() ? this.flatItems()[this.lightboxIndex()] ?? null : null);
  }
  markError(path) {
    this.erroredPaths.update((s) => /* @__PURE__ */ new Set([...s, path]));
  }
  openLightbox(item) {
    const idx = this.flatItems().indexOf(item);
    this.lightboxIndex.set(idx >= 0 ? idx : 0);
    this.lightboxOpen.set(true);
    this.doc.body.style.overflow = "hidden";
  }
  closeLightbox() {
    this.lightboxOpen.set(false);
    this.doc.body.style.overflow = "";
  }
  prev() {
    const len = this.flatItems().length;
    this.lightboxIndex.update((i) => (i - 1 + len) % len);
  }
  next() {
    const len = this.flatItems().length;
    this.lightboxIndex.update((i) => (i + 1) % len);
  }
  downloadCurrent() {
    const item = this.lightboxItem();
    if (!item)
      return;
    const a = this.doc.createElement("a");
    a.href = item.path;
    a.download = item.filename;
    a.click();
  }
  onKey(e) {
    if (!this.lightboxOpen())
      return;
    if (e.key === "Escape") {
      e.preventDefault();
      this.closeLightbox();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      this.prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      this.next();
    }
  }
  // ── Filter helpers ───────────────────────────────────────────────────────────
  setType(val) {
    this.filterType.set(val);
    this.filterYear.set("all");
  }
  setYear(val) {
    this.filterYear.set(val === "all" ? "all" : parseInt(val, 10));
  }
  // ── Lifecycle ────────────────────────────────────────────────────────────────
  ngOnInit() {
    this.http.get(`assets/gallery/manifest.json?v=${Date.now()}`).subscribe({
      next: (data) => {
        this.manifestFiles.set(data.files ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.manifestFiles.set([]);
        this.loading.set(false);
        this.error.set(false);
      }
    });
  }
  ngOnDestroy() {
    this.doc.body.style.overflow = "";
  }
  // ── Track fns ────────────────────────────────────────────────────────────────
  trackSection(_, s) {
    return s.type;
  }
  trackYear(_, y) {
    return y.year;
  }
  trackMonth(_, m) {
    return m.month;
  }
  trackItem(_, i) {
    return i.path;
  }
  static {
    this.\u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GalleryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], hostBindings: function GalleryComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function GalleryComponent_keydown_HostBindingHandler($event) {
          return ctx.onKey($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 39, vars: 13, consts: [[1, "gallery-page", "section"], [1, "container"], [1, "gallery-page__header"], [1, "gallery-page__sub"], ["role", "group", "aria-label", "Gallery filters", 1, "gallery-filters"], [1, "gallery-filters__group"], ["for", "filter-type", 1, "gallery-filters__label"], [1, "gallery-filters__select-wrap"], ["id", "filter-type", 1, "gallery-filters__select", 3, "change", "value"], ["value", "all"], ["value", "general"], ["value", "insurance"], ["value", "realestate"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "gallery-filters__chevron"], ["points", "6 9 12 15 18 9"], ["for", "filter-year", 1, "gallery-filters__label"], ["id", "filter-year", 1, "gallery-filters__select", 3, "change", "value"], [3, "value"], [1, "gallery-skeleton"], [1, "gallery-page__empty"], [1, "gallery-section"], ["role", "dialog", "aria-modal", "true", 1, "lightbox"], [1, "gallery-skeleton__cell"], [1, "gallery-section__heading", 3, "id"], [1, "gallery-year"], [1, "gallery-year__label"], [1, "gallery-month"], [1, "gallery-month__label"], ["role", "list", 1, "gallery-grid"], ["type", "button", "role", "listitem", 1, "gallery-thumb"], ["type", "button", "role", "listitem", 1, "gallery-thumb", 3, "click"], ["aria-hidden", "true", 1, "gallery-thumb__placeholder"], ["loading", "lazy", "decoding", "async", 1, "gallery-thumb__media", 3, "src", "alt"], ["preload", "metadata", "muted", "", "playsinline", "", "aria-hidden", "true", 1, "gallery-thumb__media", 3, "src"], ["aria-hidden", "true", 1, "gallery-thumb__play"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M8 5v14l11-7z"], ["viewBox", "0 0 600 200", "xmlns", "http://www.w3.org/2000/svg"], ["x", "300", "y", "158", "text-anchor", "middle", "font-family", "'Playfair Display','Georgia',serif", "font-weight", "900", "font-size", "140", "letter-spacing", "-4", "fill", "currentColor"], [1, "logo-dot"], ["loading", "lazy", "decoding", "async", 1, "gallery-thumb__media", 3, "error", "src", "alt"], ["role", "dialog", "aria-modal", "true", 1, "lightbox", 3, "click"], [1, "lightbox__stage", 3, "click"], ["autoplay", "", "controls", "", "playsinline", "", 1, "lightbox__media", 3, "src"], ["aria-hidden", "true", 1, "lightbox__placeholder"], [1, "lightbox__media", 3, "src", "alt"], [1, "lightbox__controls", 3, "click"], ["type", "button", 1, "lightbox__btn", "lightbox__btn--nav", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["points", "15 18 9 12 15 6"], ["aria-live", "polite", 1, "lightbox__counter"], ["points", "9 18 15 12 9 6"], ["type", "button", 1, "lightbox__btn", "lightbox__btn--action", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["type", "button", 1, "lightbox__btn", "lightbox__btn--close", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "lightbox__media", 3, "error", "src", "alt"]], template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "select", 8);
        \u0275\u0275listener("change", function GalleryComponent_Template_select_change_12_listener($event) {
          return ctx.setType($event.target.value);
        });
        \u0275\u0275elementStart(13, "option", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option", 12);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 13);
        \u0275\u0275element(22, "polyline", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "div", 5)(24, "label", 15);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 7)(27, "select", 16);
        \u0275\u0275listener("change", function GalleryComponent_Template_select_change_27_listener($event) {
          return ctx.setYear($event.target.value);
        });
        \u0275\u0275elementStart(28, "option", 9);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(30, GalleryComponent_For_31_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(32, "svg", 13);
        \u0275\u0275element(33, "polyline", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(34, GalleryComponent_Conditional_34_Template, 3, 1, "div", 18)(35, GalleryComponent_Conditional_35_Template, 2, 1, "p", 19);
        \u0275\u0275repeaterCreate(36, GalleryComponent_For_37_Template, 6, 6, "section", 20, ctx.trackSection, true);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, GalleryComponent_Conditional_38_Template, 23, 8, "div", 21);
      }
      if (rf & 2) {
        let tmp_14_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.heading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.subheading);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ui.filterType);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterType());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.allTypes);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.sections.general);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.sections.insurance);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.sections.realestate);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ui.filterYear);
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.filterYear());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.ui.allYears);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.availableYears());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 34 : ctx.sections().length === 0 ? 35 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.sections());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_14_0 = ctx.lightboxOpen() && ctx.lightboxItem()) ? 38 : -1, tmp_14_0);
      }
    }, styles: ["\n\n.gallery-page__header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.gallery-page__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.gallery-page__sub[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 1.1rem;\n}\n.gallery-page__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 4rem 0;\n  font-size: 1rem;\n}\n.gallery-skeleton[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.5rem;\n  margin-bottom: 2.5rem;\n}\n.gallery-skeleton__cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-surface-alt) 25%,\n      var(--color-border) 50%,\n      var(--color-surface-alt) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.gallery-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2.5rem;\n}\n@media (max-width: 480px) {\n  .gallery-filters[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n}\n.gallery-filters__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.gallery-filters__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--color-text-muted);\n}\n.gallery-filters__select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.gallery-filters__select[_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n  background-color: var(--color-surface-raised);\n  border: 1.5px solid var(--color-border);\n  border-radius: 8px;\n  padding: 0.5rem 2rem 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--color-text);\n  cursor: pointer;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  min-width: 160px;\n}\n.gallery-filters__select[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n  border-color: var(--color-primary);\n}\n.gallery-filters__select[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n}\n.gallery-filters__chevron[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.gallery-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.gallery-section__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid var(--color-border);\n}\n.gallery-section__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.gallery-section__badge--insurance[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\n.gallery-section__badge--realestate[_ngcontent-%COMP%] {\n  background-color: var(--color-accent);\n}\n.gallery-section__badge--general[_ngcontent-%COMP%] {\n  background-color: var(--color-text-muted);\n}\n.gallery-year[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.gallery-year__label[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  margin-bottom: 1.5rem;\n  letter-spacing: 0.02em;\n}\n.gallery-month[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.gallery-month__label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--color-primary);\n  margin-bottom: 1rem;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.5rem;\n}\n@media (max-width: 480px) {\n  .gallery-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    gap: 0.25rem;\n  }\n}\n.gallery-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  overflow: hidden;\n  border-radius: 8px;\n  background-color: var(--color-surface-alt);\n  cursor: pointer;\n  padding: 0;\n  border: none;\n  display: block;\n  transition: transform 150ms ease, box-shadow 150ms ease;\n}\n.gallery-thumb[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  box-shadow: var(--shadow-card-hover);\n  z-index: 1;\n}\n.gallery-thumb[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.gallery-thumb__media[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 250ms ease;\n  pointer-events: none;\n}\n.gallery-thumb__placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  color: #1a1a1a;\n  background-color: var(--color-surface-alt);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .gallery-thumb__placeholder[_ngcontent-%COMP%] {\n  color: #f0f0f0;\n}\n.gallery-thumb__placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 80%;\n  height: auto;\n  display: block;\n}\n.gallery-thumb__placeholder[_ngcontent-%COMP%]   .logo-dot[_ngcontent-%COMP%] {\n  fill: #7459ca;\n}\n.gallery-thumb__play[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.35);\n  color: #ffffff;\n  pointer-events: none;\n  border-radius: 8px;\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 600;\n  background: rgba(0, 0, 0, 0.92);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_lb-fade-in 180ms ease both;\n}\n.lightbox__stage[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 1100px;\n  overflow: hidden;\n  gap: 0.75rem;\n}\n.lightbox__media[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: calc(100dvh - 120px);\n  object-fit: contain;\n  border-radius: 8px;\n  display: block;\n  animation: _ngcontent-%COMP%_lb-zoom-in 220ms cubic-bezier(0.34, 1.3, 0.64, 1) both;\n}\n.lightbox__media[controls][_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 900px;\n}\n.lightbox__placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.lightbox__placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 60%;\n  max-width: 320px;\n  height: auto;\n  display: block;\n}\n.lightbox__placeholder[_ngcontent-%COMP%]   .logo-dot[_ngcontent-%COMP%] {\n  fill: #9b7fda;\n}\n.lightbox__caption[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 15px;\n  text-align: center;\n  max-width: 60ch;\n  line-height: 1.7;\n}\n.lightbox__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  flex-shrink: 0;\n  margin-top: 1rem;\n}\n.lightbox__btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.85);\n  transition:\n    background-color 150ms ease,\n    color 150ms ease,\n    transform 150ms ease;\n}\n.lightbox__btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n}\n.lightbox__btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.lightbox__btn--close[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  margin-left: 0.5rem;\n  border-left: 1px solid rgba(255, 255, 255, 0.15);\n}\n.lightbox__btn--close[_ngcontent-%COMP%]:hover {\n  color: #ff6b6b;\n  background-color: rgba(255, 107, 107, 0.15);\n}\n.lightbox__btn--action[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.lightbox__counter[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.55);\n  letter-spacing: 0.05em;\n  min-width: 54px;\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_lb-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_lb-zoom-in {\n  from {\n    opacity: 0;\n    transform: scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .lightbox[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .lightbox__media[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 100px);\n  }\n  .lightbox__controls[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n    padding: 0.5rem 0.75rem;\n  }\n  .lightbox__btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n}\n/*# sourceMappingURL=gallery.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{ selector: "app-gallery", standalone: true, imports: [], template: `<!-- src/app/pages/gallery/gallery.component.html -->

<div class="gallery-page section">
  <div class="container">

    <!-- \u2500\u2500 Page header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <header class="gallery-page__header">
      <h1>{{ ui.heading }}</h1>
      <p class="gallery-page__sub">{{ ui.subheading }}</p>
    </header>

    <!-- \u2500\u2500 Filter bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="gallery-filters" role="group" aria-label="Gallery filters">

      <div class="gallery-filters__group">
        <label class="gallery-filters__label" for="filter-type">{{ ui.filterType }}</label>
        <div class="gallery-filters__select-wrap">
          <select id="filter-type" class="gallery-filters__select"
                  [value]="filterType()"
                  (change)="setType($any($event.target).value)">
            <option value="all">{{ ui.allTypes }}</option>
            <option value="general">{{ ui.sections.general }}</option>
            <option value="insurance">{{ ui.sections.insurance }}</option>
            <option value="realestate">{{ ui.sections.realestate }}</option>
          </select>
          <svg class="gallery-filters__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <div class="gallery-filters__group">
        <label class="gallery-filters__label" for="filter-year">{{ ui.filterYear }}</label>
        <div class="gallery-filters__select-wrap">
          <select id="filter-year" class="gallery-filters__select"
                  [value]="filterYear()"
                  (change)="setYear($any($event.target).value)">
            <option value="all">{{ ui.allYears }}</option>
            @for (y of availableYears(); track y) {
              <option [value]="y">{{ y }}</option>
            }
          </select>
          <svg class="gallery-filters__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

    </div>

    <!-- \u2500\u2500 Loading / empty states \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (loading()) {
      <div class="gallery-skeleton">
        @for (_ of [1,2,3,4,5,6,8,9]; track $index) {
          <div class="gallery-skeleton__cell"></div>
        }
      </div>
    } @else if (sections().length === 0) {
      <p class="gallery-page__empty">{{ ui.noItems }}</p>
    }

    @for (section of sections(); track trackSection($index, section)) {
      <section class="gallery-section" [attr.aria-labelledby]="'section-' + section.type">

        <!-- Section heading -->
        <h2 class="gallery-section__heading" [id]="'section-' + section.type">
          <span class="gallery-section__badge gallery-section__badge--{{ section.type }}"></span>
          {{ section.label }}
        </h2>

        @for (yearGroup of section.years; track trackYear($index, yearGroup)) {
          <div class="gallery-year">

            <!-- Year label -->
            <h3 class="gallery-year__label">{{ yearGroup.year }}</h3>

            @for (monthGroup of yearGroup.months; track trackMonth($index, monthGroup)) {
              <div class="gallery-month">

                <!-- Month label -->
                <h4 class="gallery-month__label">{{ monthGroup.label }}</h4>

                <!-- Thumbnail grid -->
                <div class="gallery-grid" role="list">
                  @for (item of monthGroup.items; track trackItem($index, item)) {
                    <button
                      class="gallery-thumb"
                      type="button"
                      role="listitem"
                      [attr.aria-label]="item.alt"
                      (click)="openLightbox(item)"
                    >
                      @if (item.isVideo) {
                        <video class="gallery-thumb__media" [src]="item.path"
                               preload="metadata" muted playsinline aria-hidden="true">
                        </video>
                        <span class="gallery-thumb__play" aria-hidden="true">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </span>
                      } @else if (erroredPaths().has(item.path)) {
                        <span class="gallery-thumb__placeholder" aria-hidden="true">
                          <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
                            <text x="300" y="158" text-anchor="middle"
                                  font-family="'Playfair Display','Georgia',serif"
                                  font-weight="900" font-size="140" letter-spacing="-4"
                                  fill="currentColor">Flor<tspan class="logo-dot">.</tspan></text>
                          </svg>
                        </span>
                      } @else {
                        <img class="gallery-thumb__media" [src]="item.path" [alt]="item.alt"
                             loading="lazy" decoding="async"
                             (error)="markError(item.path)" />
                      }
                    </button>
                  }
                </div>

              </div>
            }
          </div>
        }

      </section>
    }

  </div>
</div>

<!-- \u2500\u2500 Lightbox \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (lightboxOpen() && lightboxItem(); as item) {
  <div
    class="lightbox"
    role="dialog"
    aria-modal="true"
    [attr.aria-label]="item.alt"
    (click)="closeLightbox()"
  >
    <!-- Media area (stops propagation) -->
    <div class="lightbox__stage" (click)="$event.stopPropagation()">

      @if (item.isVideo) {
        <video class="lightbox__media" [src]="item.path"
               autoplay controls playsinline [attr.aria-label]="item.alt">
        </video>
      } @else if (erroredPaths().has(item.path)) {
        <span class="lightbox__placeholder" aria-hidden="true">
          <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
            <text x="300" y="158" text-anchor="middle"
                  font-family="'Playfair Display','Georgia',serif"
                  font-weight="900" font-size="140" letter-spacing="-4"
                  fill="currentColor">Flor<tspan class="logo-dot">.</tspan></text>
          </svg>
        </span>
      } @else {
        <img class="lightbox__media" [src]="item.path" [alt]="item.alt"
             (error)="markError(item.path)" />
      }

    </div>

    <!-- Controls -->
    <div class="lightbox__controls" (click)="$event.stopPropagation()">

      <!-- Prev -->
      <button class="lightbox__btn lightbox__btn--nav" type="button"
              [attr.aria-label]="ui.lightbox.prev" (click)="prev()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <!-- Counter -->
      <span class="lightbox__counter" aria-live="polite">
        {{ lightboxIndex() + 1 }} / {{ flatItems().length }}
      </span>

      <!-- Next -->
      <button class="lightbox__btn lightbox__btn--nav" type="button"
              [attr.aria-label]="ui.lightbox.next" (click)="next()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <!-- Download -->
      <button class="lightbox__btn lightbox__btn--action" type="button"
              [attr.aria-label]="ui.lightbox.download" (click)="downloadCurrent()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </button>

      <!-- Close -->
      <button class="lightbox__btn lightbox__btn--close" type="button"
              [attr.aria-label]="ui.lightbox.close" (click)="closeLightbox()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

    </div>
  </div>
}
`, styles: ["/* src/app/pages/gallery/gallery.component.scss */\n.gallery-page__header {\n  margin-bottom: 2rem;\n}\n.gallery-page__header h1 {\n  margin-bottom: 0.5rem;\n}\n.gallery-page__sub {\n  color: var(--color-text-muted);\n  font-size: 1.1rem;\n}\n.gallery-page__empty {\n  text-align: center;\n  color: var(--color-text-muted);\n  padding: 4rem 0;\n  font-size: 1rem;\n}\n.gallery-skeleton {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.5rem;\n  margin-bottom: 2.5rem;\n}\n.gallery-skeleton__cell {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-surface-alt) 25%,\n      var(--color-border) 50%,\n      var(--color-surface-alt) 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.gallery-filters {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2.5rem;\n}\n@media (max-width: 480px) {\n  .gallery-filters {\n    gap: 0.75rem;\n  }\n}\n.gallery-filters__group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.gallery-filters__label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--color-text-muted);\n}\n.gallery-filters__select-wrap {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.gallery-filters__select {\n  appearance: none;\n  -webkit-appearance: none;\n  background-color: var(--color-surface-raised);\n  border: 1.5px solid var(--color-border);\n  border-radius: 8px;\n  padding: 0.5rem 2rem 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--color-text);\n  cursor: pointer;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  min-width: 160px;\n}\n.gallery-filters__select:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n  border-color: var(--color-primary);\n}\n.gallery-filters__select:hover {\n  border-color: var(--color-primary);\n}\n.gallery-filters__chevron {\n  position: absolute;\n  right: 0.75rem;\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n.gallery-section {\n  margin-bottom: 3rem;\n}\n.gallery-section__heading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-text);\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid var(--color-border);\n}\n.gallery-section__badge {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.gallery-section__badge--insurance {\n  background-color: var(--color-primary);\n}\n.gallery-section__badge--realestate {\n  background-color: var(--color-accent);\n}\n.gallery-section__badge--general {\n  background-color: var(--color-text-muted);\n}\n.gallery-year {\n  margin-bottom: 2.5rem;\n}\n.gallery-year__label {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  margin-bottom: 1.5rem;\n  letter-spacing: 0.02em;\n}\n.gallery-month {\n  margin-bottom: 2rem;\n}\n.gallery-month__label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--color-primary);\n  margin-bottom: 1rem;\n}\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.5rem;\n}\n@media (max-width: 480px) {\n  .gallery-grid {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    gap: 0.25rem;\n  }\n}\n.gallery-thumb {\n  position: relative;\n  aspect-ratio: 1;\n  overflow: hidden;\n  border-radius: 8px;\n  background-color: var(--color-surface-alt);\n  cursor: pointer;\n  padding: 0;\n  border: none;\n  display: block;\n  transition: transform 150ms ease, box-shadow 150ms ease;\n}\n.gallery-thumb:hover {\n  transform: scale(1.03);\n  box-shadow: var(--shadow-card-hover);\n  z-index: 1;\n}\n.gallery-thumb:focus-visible {\n  outline: 3px solid var(--color-primary);\n  outline-offset: 2px;\n}\n.gallery-thumb__media {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 250ms ease;\n  pointer-events: none;\n}\n.gallery-thumb__placeholder {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  color: #1a1a1a;\n  background-color: var(--color-surface-alt);\n}\n[data-theme=dark] .gallery-thumb__placeholder {\n  color: #f0f0f0;\n}\n.gallery-thumb__placeholder svg {\n  width: 80%;\n  height: auto;\n  display: block;\n}\n.gallery-thumb__placeholder .logo-dot {\n  fill: #7459ca;\n}\n.gallery-thumb__play {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.35);\n  color: #ffffff;\n  pointer-events: none;\n  border-radius: 8px;\n}\n.lightbox {\n  position: fixed;\n  inset: 0;\n  z-index: 600;\n  background: rgba(0, 0, 0, 0.92);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: lb-fade-in 180ms ease both;\n}\n.lightbox__stage {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: 1100px;\n  overflow: hidden;\n  gap: 0.75rem;\n}\n.lightbox__media {\n  max-width: 100%;\n  max-height: calc(100dvh - 120px);\n  object-fit: contain;\n  border-radius: 8px;\n  display: block;\n  animation: lb-zoom-in 220ms cubic-bezier(0.34, 1.3, 0.64, 1) both;\n}\n.lightbox__media[controls] {\n  width: 100%;\n  max-width: 900px;\n}\n.lightbox__placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.lightbox__placeholder svg {\n  width: 60%;\n  max-width: 320px;\n  height: auto;\n  display: block;\n}\n.lightbox__placeholder .logo-dot {\n  fill: #9b7fda;\n}\n.lightbox__caption {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 15px;\n  text-align: center;\n  max-width: 60ch;\n  line-height: 1.7;\n}\n.lightbox__controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 100px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  flex-shrink: 0;\n  margin-top: 1rem;\n}\n.lightbox__btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: rgba(255, 255, 255, 0.85);\n  transition:\n    background-color 150ms ease,\n    color 150ms ease,\n    transform 150ms ease;\n}\n.lightbox__btn:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n}\n.lightbox__btn:active {\n  transform: scale(0.92);\n}\n.lightbox__btn--close {\n  color: rgba(255, 255, 255, 0.6);\n  margin-left: 0.5rem;\n  border-left: 1px solid rgba(255, 255, 255, 0.15);\n}\n.lightbox__btn--close:hover {\n  color: #ff6b6b;\n  background-color: rgba(255, 107, 107, 0.15);\n}\n.lightbox__btn--action {\n  color: rgba(255, 255, 255, 0.7);\n}\n.lightbox__counter {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.55);\n  letter-spacing: 0.05em;\n  min-width: 54px;\n  text-align: center;\n}\n@keyframes lb-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes lb-zoom-in {\n  from {\n    opacity: 0;\n    transform: scale(0.92);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 480px) {\n  .lightbox {\n    padding: 0.5rem;\n  }\n  .lightbox__media {\n    max-height: calc(100dvh - 100px);\n  }\n  .lightbox__controls {\n    gap: 0.25rem;\n    padding: 0.5rem 0.75rem;\n  }\n  .lightbox__btn {\n    width: 36px;\n    height: 36px;\n  }\n}\n/*# sourceMappingURL=gallery.component.css.map */\n"] }]
  }], null, { onKey: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src/app/pages/gallery/gallery.component.ts", lineNumber: 87 });
})();
export {
  GalleryComponent
};
//# sourceMappingURL=chunk-FO5EV22U.js.map
