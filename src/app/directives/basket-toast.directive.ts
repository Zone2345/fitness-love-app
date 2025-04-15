import { Directive, HostListener, Input } from '@angular/core';
import { ToastService } from '../services/toast-services/toast.service';

@Directive({
  selector: '[appBasketToast]',
})
export class BasketToastDirective {
  @Input('appBasketToast') message!: string;

  constructor(private toastService: ToastService) {}

  @HostListener('click')
  onClick() {
    // Here you can also add the logic to add the item to the basket.
    // This directive focuses on displaying the toast message.
    this.toastService.show(this.message || 'Item added to basket!', {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }
}
