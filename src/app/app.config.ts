import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environments';
import { KeycloakOnLoad } from 'keycloak-js';
import {
  provideKeycloak,
  createInterceptorCondition,
  IncludeBearerTokenCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  includeBearerTokenInterceptor,
  withAutoRefreshToken,
} from 'keycloak-angular';

const urlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:5005)(\/.*)?$/i,
  bearerPrefix: 'Bearer',
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak({
      config: {
        url: environment.keycloak.config.authority,
        realm: environment.keycloak.config.realm,
        clientId: environment.keycloak.config.clientId,
      },
      initOptions: {
        onLoad: 'check-sso', //environment.keycloak.initOptions.onLoad as KeycloakOnLoad,
        checkLoginIframe: false,
        // checkLoginIframe: environment.keycloak.initOptions.checkLoginIframe,
        // checkLoginIframeInterval: 60,
        silentCheckSsoRedirectUri:
          window.location.origin + '/silent-check-sso.html',
      },
    }),
    {
      provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
      useValue: [urlCondition], // <-- Note that multiple conditions might be added.
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
  ],
};
