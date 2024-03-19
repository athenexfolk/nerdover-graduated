import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  cache = new Map<string, HttpResponse<unknown>>()
}
