import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestimonialsComponent } from './feature/testimonials/testimonials.component';
import { GaleryFullwidthComponent } from "./feature/galery-fullwidth/galery-fullwidth.component";

declare var $: any;

@Component({
  selector: 'app-home',
  imports: [RouterLink, TestimonialsComponent, GaleryFullwidthComponent],
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        (preloader as HTMLElement).style.display = 'none';
      }, 500);
    }
    if ($('.main-slider .tp-banner').length) {
      var MainSlider = $('.main-slider');
      var strtHeight = MainSlider.attr('data-start-height');
      var slideOverlay = "'" + MainSlider.attr('data-slide-overlay') + "'";

      $('.main-slider .tp-banner')
        .show()
        .revolution({
          dottedOverlay: slideOverlay,
          delay: 500000,
          startwidth: 1200,
          startheight: strtHeight,
          hideThumbs: 600,

          thumbWidth: 80,
          thumbHeight: 50,
          thumbAmount: 5,

          navigationType: 'bullet',
          navigationArrows: '0',
          navigationStyle: 'preview3',

          touchenabled: 'on',
          onHoverStop: 'off',

          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,

          parallax: 'mouse',
          parallaxBgFreeze: 'on',
          parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

          keyboardNavigation: 'off',

          navigationHAlign: 'center',
          navigationVAlign: 'bottom',
          navigationHOffset: 0,
          navigationVOffset: 50,

          soloArrowLeftHalign: 'left',
          soloArrowLeftValign: 'bottom',
          soloArrowLeftHOffset: 20,
          soloArrowLeftVOffset: 0,

          soloArrowRightHalign: 'right',
          soloArrowRightValign: 'center',
          soloArrowRightHOffset: 20,
          soloArrowRightVOffset: 0,

          shadow: 0,
          fullWidth: 'on',
          fullScreen: 'off',

          spinner: 'spinner4',

          stopLoop: 'off',
          stopAfterLoops: -1,
          stopAtSlide: -1,

          shuffle: 'off',

          autoHeight: 'off',
          forceFullWidth: 'on',

          hideThumbsOnMobile: 'on',
          hideNavDelayOnMobile: 1500,
          hideBulletsOnMobile: 'on',
          hideArrowsOnMobile: 'on',
          hideThumbsUnderResolution: 0,

          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          startWithSlide: 0,
          videoJsPath: '',
          fullScreenOffsetContainer: '',
        });
    }
  }
}
