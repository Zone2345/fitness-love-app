import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Basket } from './basket.model';
import { BasketService } from '../services/basket.service/basket.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { PageTitelComponent } from "../section/page-titel/page-titel.component";

@Component({
  selector: 'app-basket',
  imports: [RouterLink, PageTitelComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
})
export class BasketComponent implements OnInit {
  pageTitel = 'Basket';
  basket = signal<Basket[] | undefined>(undefined);
  totalAmount = signal<number>(0);
  private destroyRef = inject(DestroyRef);

  constructor(private basketService: BasketService) {}

  updateBasket(productId: string, kolicina: number) {
    this.basketService.UpdateInsertBasket(productId, kolicina).subscribe({
      next: () => {
        this.getBasketItems();
      },
    });
  }

  ngOnInit() {
    this.getBasketItems();
  }

  getBasketItems() {
    const subscription = this.basketService.getBasket().subscribe({
      next: (responseData) => {
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
