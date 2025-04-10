import { Component, Input } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';

@Component({
  selector: 'app-galery-fullwidth',
  imports: [PageTitelComponent],
  templateUrl: './galery-fullwidth.component.html',
  styleUrl: './galery-fullwidth.component.css',
})
export class GaleryFullwidthComponent {
  pageTitel = 'Galerija';
}
