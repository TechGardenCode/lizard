import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

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
