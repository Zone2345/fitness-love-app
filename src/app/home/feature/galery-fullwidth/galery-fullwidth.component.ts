import { Component, Input } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';
import { MixitupDirective } from '../../../directives/mixitup.directive';

declare const $: any;
@Component({
  selector: 'app-galery-fullwidth',
  imports: [PageTitelComponent, MixitupDirective],
  templateUrl: './galery-fullwidth.component.html',
  styleUrl: './galery-fullwidth.component.css',
})
export class GaleryFullwidthComponent {
  pageTitel = 'Galerija';
  @Input() showTitel: boolean = true;
  get showPageTitel() {
    if (this.showTitel === undefined) {
      return (this.showTitel = true);
    }
    return this.showTitel;
  }
}
