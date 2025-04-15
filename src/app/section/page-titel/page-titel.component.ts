import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-titel',
  imports: [],
  templateUrl: './page-titel.component.html',
  styleUrl: './page-titel.component.css',
})
export class PageTitelComponent {
  @Input({ required: true }) pageTitel!: string;
  @Input() isVisible: boolean = true;
}
