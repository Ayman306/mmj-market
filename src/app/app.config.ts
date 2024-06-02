import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { httpInterceptor } from './utils/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ),
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    provideToastr(),
    provideAnimations(),
    provideHttpClient(withFetch())
  ]
};
