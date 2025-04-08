import { Component } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';

@Component({
  selector: 'app-about',
  imports: [PageTitelComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  pageTitel = 'O nama';
}
