// src/app/app.routes.ts

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: {
      title: 'Home',
      description:
        'Maria Santos – licensed insurance agent and real estate sales associate. Protecting families and growing wealth across the region.',
    },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent
      ),
    data: {
      title: 'Services',
      description:
        'Life, health, home and auto insurance plus full-service home buying, selling, and investment real estate. See all services offered by Maria Santos.',
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    data: {
      title: 'About Maria Santos',
      description:
        'Learn about Maria Santos – 15+ years of combined insurance and real estate experience, CFP®, and ABR® credentials.',
    },
  },
  {
    path: 'enquire',
    loadComponent: () =>
      import('./pages/enquire/enquire.component').then(
        (m) => m.EnquireComponent
      ),
    data: {
      title: 'Enquire',
      description:
        'Get in touch with Maria Santos for insurance or real estate enquiries. Quick response guaranteed within one business day.',
    },
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    data: {
      title: 'Gallery',
      description: 'A visual journey through milestones in insurance and real estate.',
    },
  },
  { path: '**', redirectTo: '' },
];
