import { Component } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [PageTitelComponent, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  pageTitel = 'Blog';
}
