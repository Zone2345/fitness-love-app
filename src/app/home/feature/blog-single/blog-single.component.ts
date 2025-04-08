import { Component } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';

@Component({
  selector: 'app-blog-single',
  imports: [PageTitelComponent],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.css',
})
export class BlogSingleComponent {
  pageTitel = 'Blog';
}
