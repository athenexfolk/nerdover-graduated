import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideMarkdown } from 'ngx-markdown';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { cacheInterceptor } from './core/interceptors/cache.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top'
    })),
    provideMarkdown(),
    provideHttpClient(withInterceptors([cacheInterceptor])),
    provideAnimations(),
  ],
};
