import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import { inject } from '@angular/core';
import { filter, of, tap } from 'rxjs';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET') {
    return next(req);
  }

  const cacheService = inject(CacheService);

  const cacheResponse = cacheService.cache.get(req.urlWithParams);

  if (cacheResponse) {
    return of(cacheResponse.clone());
  } else {
    return next(req).pipe(
      filter((e) => e instanceof HttpResponse),
      tap((res) =>
        cacheService.cache.set(req.urlWithParams, res as HttpResponse<unknown>)
      )
    );
  }
};
