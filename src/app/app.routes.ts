import { provideRouter, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login/login.component';
import { BasketComponent } from './Basket/basket.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';
import { AboutComponent } from './home/feature/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { key: 'home' } },
  { path: 'products', component: ProductsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'about', component: AboutComponent },
];

export const appRouting = provideRouter(routes);
