import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'jobs',
    loadComponent: () =>
      import('./pages/all-jobs/all-jobs.component').then(
        (c) => c.AllJobsComponent
      ),
  },
  {
    path: 'all-service',
    loadComponent: () =>
      import('./pages/all-service/all-service.component').then(
        (c) => c.AllServiceComponent
      ),
  },
  {
    path: 'job-detail',
    loadComponent: () =>
      import('./pages/job_detail/job-detail.component').then(
        (c) => c.JobDetailComponent
      ),
  },
];
