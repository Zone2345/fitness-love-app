import { AfterViewInit, Component } from '@angular/core';
import { PageTitelComponent } from '../../../section/page-titel/page-titel.component';
import { GoogleMapsComponent } from "../google-maps/google-maps.component";

@Component({
  selector: 'app-contact',
  imports: [PageTitelComponent, GoogleMapsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements AfterViewInit {
  pageTitel = 'Kontakt';
  ngAfterViewInit(): void {}
}
