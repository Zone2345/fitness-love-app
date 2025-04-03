import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from './product.model';
import { UpsertBasketDto } from './product.model';
import Keycloak from 'keycloak-js';
import { BasketService } from '../services/basket.service/basket.service';
import { ProductService } from './product.service';
import { DialogComponent } from './dialog/dialog.component';
import { PageTitelComponent } from '../section/page-titel/page-titel.component';

@Component({
  selector: 'app-products',
  imports: [RouterLink, DialogComponent, PageTitelComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  pageTitel = 'Products';

  products = signal<Products[] | undefined>(undefined);
  upsertBasket: UpsertBasketDto | undefined;
  showProductDesc = false;
  product!: Products;
  private destroyRef = inject(DestroyRef);

  constructor(
    private keycloak: Keycloak,
    private basketService: BasketService,
    private productService: ProductService
  ) {}
  ngOnInit() {
    const subscription = this.productService.getProducts().subscribe({
      next: (responseData) => {
        this.products.set(responseData.data);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  addToBasket(id: string, kolicina: number) {
    this.basketService.UpdateInsertBasket(id, kolicina).subscribe();
  }

  shoProductDescription(product: Products) {
    this.product = product;
    this.showProductDesc = true;
  }

  onCloseShowDialog() {
    this.showProductDesc = false;
  }
}
