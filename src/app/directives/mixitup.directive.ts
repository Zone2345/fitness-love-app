import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  OnDestroy,
} from '@angular/core';
import mixitup from 'mixitup';
declare const $: any;
@Directive({
  selector: '[appMixitup]',
  standalone: true,
})
export class MixitupDirective implements AfterViewInit, OnDestroy {
  // Optional configuration object to customize MixItUp behavior.
  @Input() mixitupConfig: any;

  private mixer: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Initialize mixitup on the host element.
    this.mixer = mixitup(this.el.nativeElement, this.mixitupConfig || {});
    console.log('MixItUp initialized:', this.mixer);
    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
      $('.lightbox-image').fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        helpers: {
          media: {},
        },
      });
    }
  }

  ngOnDestroy(): void {
    // Clean up the mixer instance when the directive is destroyed.
    if (this.mixer && typeof this.mixer.destroy === 'function') {
      this.mixer.destroy();
    }
  }
}
