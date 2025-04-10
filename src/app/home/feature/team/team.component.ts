import { Component } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';

@Component({
  selector: 'app-team',
  imports: [PageTitelComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  pageTitel = 'Nas Tim';
}
