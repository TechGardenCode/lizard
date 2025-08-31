import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import posthog from 'posthog-js';
import { environment } from './environments/environment';

if (environment.POSTHOG_ENABLED) {
  posthog.init(environment.POSTHOG_KEY, {
    api_host: environment.POSTHOG_HOST,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    defaults: '2025-05-24',
  });
}

@Injectable({
  providedIn: 'root',
})
export class Lizard {
  constructor(private readonly http: HttpClient) {}

  createLizard() {
    // const idempotencyKey = Math.random().toString(36).substring(2, 15);
    // const headers = { 'Idempotency-Key': idempotencyKey };
    // return this.http.post('/api/click', {}, { headers });
    return of(undefined);
  }

  getLizardCount() {
    // return this.http
    //   .get<number>('/api/count')
    //   .pipe(map((response: any) => response.count || 0));
    return of(0);
  }
}
