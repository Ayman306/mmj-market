import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () =>import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path:'home',
    loadComponent: () =>import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path:'all-service',
    loadComponent: () =>import('./pages/all-service/all-service.component').then((c) => c.AllServiceComponent),
  },
  {
    path:'service',
    loadComponent: () =>import('./pages/single-service/single-service.component').then((c) => c.SingleServiceComponent),

  }
];
