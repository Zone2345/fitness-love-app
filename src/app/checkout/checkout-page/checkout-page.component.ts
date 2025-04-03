import { Component } from '@angular/core';
import { PageTitelComponent } from '../../section/page-titel/page-titel.component';

@Component({
  selector: 'app-checkout-page',
  imports: [PageTitelComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
})
export class CheckoutPageComponent {
  pageTitel = 'Checkout';
}
