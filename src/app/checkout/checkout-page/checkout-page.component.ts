import { Component } from '@angular/core';
import { PageTitelComponent } from '../../section/page-titel/page-titel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-page',
  imports: [PageTitelComponent, CommonModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
})
export class CheckoutPageComponent {
  pageTitel = 'Checkout';
  showShippingAddress = false;
  toggleShippingAddress(event: Event) {
    this.showShippingAddress = (event.target as HTMLInputElement).checked;
  }
}
