import { AfterViewInit, Component } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { TeamComponent } from '../team/team.component';
declare const $: any;
@Component({
  selector: 'app-about',
  imports: [PageTitelComponent, TestimonialsComponent, TeamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  isVisible = false;
  ngAfterViewInit(): void {
    if ($('.two-item-carousel').length) {
      $('.two-item-carousel').owlCarousel({
        loop: true,
        margin: 80,
        nav: true,
        smartSpeed: 700,
        autoplay: 4000,
        navText: ['<span class=""></span>', '<span class=""></span>'],
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 1,
          },
          600: {
            items: 1,
          },
          800: {
            items: 1,
          },
          1024: {
            items: 2,
          },
        },
      });
    }
  }
  pageTitel = 'O nama';
}
