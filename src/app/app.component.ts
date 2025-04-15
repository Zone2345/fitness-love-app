import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from "./home/feature/footer/footer.component";
import { ToastContainerComponent } from "./toast/toast-container/toast-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastContainerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'fitness-love-app';
  private firstLoad = true; // Track if it's the first time loading the app

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' && !this.firstLoad) {
          window.location.reload();
        }
        this.firstLoad = false; // ✅ Mark that the first load is complete
      }
    });
  }
}
