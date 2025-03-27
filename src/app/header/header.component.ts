import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private keycloak: Keycloak) {}

  public get IsLoggedIn(): boolean {
    return this.keycloak.authenticated ?? false;
  }
}
