import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private keycloak: Keycloak, private router: Router) {}
  ngOnInit(): void {
    if (!this.keycloak.authenticated) {
      this.keycloak.login({ redirectUri: window.location.origin });
    }
  }
}
