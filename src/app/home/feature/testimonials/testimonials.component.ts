import { AfterViewInit, Component, Input } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements AfterViewInit {
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
}
