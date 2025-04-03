import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './product.model';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);

  constructor() {}

  getProducts(): Observable<{ data: Products[] }> {
    return this.httpClient.get<{ totalPages: number; data: Products[] }>(
      `${environment.apiUrl}/products`
    );
  }
}
