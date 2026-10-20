import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
        title: 'Home',
      },
      {
        path: 'trips',
        loadComponent: () => import('./pages/trips/trips').then((m) => m.Trips),
        title: 'Trips',
      },
      {
        path: 'connect',
        loadComponent: () =>
          import('./pages/connect-us/connect-us').then((m) => m.ConnectUs),
        title: 'Connect Us',
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.About),
        title: 'About',
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/gallery/gallery').then((m) => m.Gallery),
        title: 'Gallery',
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/details/details').then((m) => m.Details),
        title: 'Trip Details',
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/notfound/notfound').then((m) => m.Notfound),
        title: '404 - Not Found',
      },
    ],
  },
];
