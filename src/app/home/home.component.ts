import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        (preloader as HTMLElement).style.display = 'none';
      }, 1200);
    }
  }
}
