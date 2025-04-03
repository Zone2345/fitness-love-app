import { Component, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import Keycloak from 'keycloak-js';
import { BasketService } from '../services/basket.service/basket.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  basketCount!: Signal<number | undefined>;

  constructor(
    private keycloak: Keycloak,
    private basketService: BasketService
  ) {
    this.basketCount = toSignal(
      this.basketService.getBasket().pipe(
        map((responseData) => responseData.items.length),
        catchError((error) => {
          console.log(error);
          return of(0); // Return a default value as an observable
        })
      )
    );
  }

  public get IsLoggedIn(): boolean {
    return this.keycloak.authenticated ?? false;
  }
}
