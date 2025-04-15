import { AfterViewInit, Component } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';
declare const $: any;
@Component({
  selector: 'app-stories',
  imports: [PageTitelComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
})
export class StoriesComponent implements AfterViewInit {
  pageTitel = 'Iskustva';
  ngAfterViewInit(): void {
    //Stories Carousel
    if ($('.stories-carousel').length) {
      $('.stories-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 1000,
        autoplay: 5000,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }
}
