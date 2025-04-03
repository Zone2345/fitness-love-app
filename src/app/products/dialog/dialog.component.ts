import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Products } from '../product.model';
import { BasketService } from '../../services/basket.service/basket.service';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input({ required: true }) product!: Products;
  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  private basketService = inject(BasketService);
  addToBasket(productId: string, quantity: number) {
    this.basketService.UpdateInsertBasket(productId, quantity).subscribe({});
    this.close.emit();
  }
}
