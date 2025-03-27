import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
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
