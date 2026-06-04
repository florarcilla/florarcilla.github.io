// src/app/shared/models/config.model.ts

export type Lang = 'en' | 'tl';

export interface ServiceConfig {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  type: 'insurance' | 'realestate';
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  avatarAlt: string;
  rating: number;
  text: string;
  date?: string;
}

export type GalleryItemType = 'general' | 'insurance' | 'realestate';

export interface GalleryItem {
  /** filename only, e.g. "realestate_june_2025.jpg" — file lives in assets/gallery/ */
  filename: string;
  /** optional free-text caption shown in the lightbox */
  caption?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ServicesPageHero {
  heading: string;
  subCopy: string;
  /** CSS colour value for the left-to-right hero gradient, e.g. "rgba(116,89,202,0.12)".
   *  Gradient fades from this colour on the left to transparent on the right. */
  gradientColor?: string;
  /** Optional banner image placed on the right side of the hero.
   *  The image fades in from transparent (left edge) to opaque (right edge),
   *  morphing seamlessly into the colour gradient.
   *  Leave empty / omit to show colour-only hero. */
  bannerImageUrl?: string;
}

export interface SeoPage {
  title: string;
  description: string;
}

export interface MetaDefaults {
  title: string;
  description: string;
}

export interface UiStrings {
  nav: {
    gallery: string;
    home: string;
    services: string;
    about: string;
    bookConsultation: string;
  };
  hero: {
    roleLabel: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  testimonials: {
    heading: string;
  };
  services: {
    enquireButton: string;
    insuranceBadge: string;
    realestateBadge: string;
    insuranceCategory: string;
    realestateCategory: string;
  };
  about: {
    sectionLabel: string;
    credentialsHeading: string;
    contactHeading: string;
    contactCopy: string;
  };
  enquire: {
    heading: string;
    formLabels: {
      fullName: string;
      email: string;
      phone: string;
      phoneOptional: string;
      enquiryType: string;
      message: string;
      required: string;
      submit: string;
    };
    enquiryTypes: {
      general: string;
      insurance: string;
      realestate: string;
    };
    validation: {
      nameRequired: string;
      nameMinLength: string;
      emailRequired: string;
      emailInvalid: string;
      phoneInvalid: string;
      messageRequired: string;
      messageMinLength: string;
      messageMaxLength: string;
      formError: string;
    };
    success: {
      heading: string;
      body: string;
      reset: string;
    };
  };
  quickContact: {
    whatsapp: string;
    messenger: string;
    call: string;
  };
  accessibility: {
    openMenu: string;
    closeMenu: string;
    label: string;
    lightMode: string;
    darkMode: string;
    autoTheme: string;
    smallText: string;
    defaultText: string;
    largeText: string;
    highContrast: string;
  };
  whatsappModal: {
    title: string;
    subtitle: string;
    insurance: string;
    realestate: string;
    cancel: string;
    messageInsurance: string;
    messageRealestate: string;
  };
  emailModal: {
    title: string;
    subtitle: string;
    insurance: string;
    realestate: string;
    cancel: string;
    subjectInsurance: string;
    subjectRealestate: string;
    bodyInsurance: string;
    bodyRealestate: string;
  };
  gallery: {
    heading: string;
    subheading: string;
    filterType: string;
    filterYear: string;
    allTypes: string;
    allYears: string;
    sections: { general: string; insurance: string; realestate: string };
    lightbox: { close: string; prev: string; next: string; download: string };
    noItems: string;
  };
  footer: {
    quickLinksHeading: string;
    contactHeading: string;
  };
}

export interface AppConfig {
  agentName: string;
  nickname: string;
  tagline: string;
  profilePictureUrl: string;
  profilePictureAlt: string;
  secondaryProfilePictureUrl: string;
  secondaryProfilePictureAlt: string;
  logoUrl: string;
  logoAlt: string;
  bio: string;
  richTextAbout: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  facebookMessengerUrl: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  licences: string[];
  servicesPageHero: ServicesPageHero;
  services: ServiceConfig[];
  testimonials: Testimonial[];
  footerLinks: FooterLink[];
  copyrightText: string;
  enquiryFormIntro: string;
  homeContactSectionHeading: string;
  homeContactSectionCopy: string;
  siteUrl: string;
  twitterHandle?: string;
  keywords: string[];
  seoPages: {
    home: SeoPage;
    services: SeoPage;
    about: SeoPage;
    enquire: SeoPage;
    gallery: SeoPage;
  };
  metaDefaults: MetaDefaults;
  ui: UiStrings;
}
