import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Basket } from './basket.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
})
export class BasketComponent implements OnInit {
  basket = signal<Basket[] | undefined>(undefined);

  totalAmount = signal<number>(0);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  constructor(private keycloak: Keycloak) {}

  ngOnInit() {
    console.log(this.keycloak.tokenParsed?.sub);
    const subscription = this.httpClient
      .get<{ totalAmount: number; items: Basket[] }>(
        `${environment.apiUrl}/baskets/` + this.keycloak.tokenParsed?.sub
      )
      .subscribe({
        next: (responseData) => {
          console.log(responseData.items);
          this.basket.set(responseData.items);
          this.totalAmount.set(responseData.totalAmount);
        },
        error: (responseData) => {
          console.log(responseData);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
