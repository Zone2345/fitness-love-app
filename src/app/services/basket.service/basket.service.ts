import { HttpClient } from '@angular/common/http';
import Keycloak from 'keycloak-js';
import { Basket } from '../../Basket/basket.model';
import { environment } from '../../../environments/environments';
import { UpsertBasketDto } from '../../products/product.model';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  upsertBasket: UpsertBasketDto | undefined;
  private httpClient = inject(HttpClient);

  constructor(private keycloak: Keycloak) {}

  UpdateInsertBasket(id: string, kolicina: number): Observable<{}> {
    return this.httpClient.put(
      `${environment.apiUrl}/baskets/` + this.keycloak.tokenParsed?.sub,
      (this.upsertBasket = {
        items: [
          {
            id,
            kolicina,
          },
        ],
      })
    );
  }

  getBasket(): Observable<{ totalAmount: number; items: Basket[] }> {
    return this.httpClient.get<{ totalAmount: number; items: Basket[] }>(
      `${environment.apiUrl}/baskets/` + this.keycloak.tokenParsed?.sub
    );
  }
}
