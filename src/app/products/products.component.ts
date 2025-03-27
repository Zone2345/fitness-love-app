import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from './product.model';
import { environment } from '../../environments/environments';
import { UpsertBasketDto } from './product.model';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products = signal<Products[] | undefined>(undefined);
  upsertBasket: UpsertBasketDto | undefined;
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  constructor(private keycloak: Keycloak) {}
  ngOnInit() {
    const subscription = this.httpClient
      .get<{ totalPages: number; data: Products[] }>(
        `${environment.apiUrl}/products`
      )
      .subscribe({
        next: (responseData) => {
          this.products.set(responseData.data);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  addToBasket(id: string, kolicina: number) {
    const subscription1 = this.httpClient
      .put(
        `${environment.apiUrl}/baskets/` + this.keycloak.tokenParsed?.sub,
        (this.upsertBasket = {
          items: [
            {
              id,
              kolicina,
            },
          ],
        })
      )
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription1.unsubscribe();
    });
  }
}
