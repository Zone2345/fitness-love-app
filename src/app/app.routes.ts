import { provideRouter, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { key: 'home' } },
  { path: 'products', component: ProductsComponent },
];

export const appRouting = provideRouter(routes);
