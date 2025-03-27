export const environment = {
  production: false,
  apiUrl: 'http://localhost:5005',
  keycloak: {
    config: {
      enable: true, //Enable or disable Keycloak for Frontend app
      authority: 'http://localhost:8080', //Keycloak URL
      redirectUri: 'http://localhost:4200', //Frontend app URL
      postLogoutRedirectUri: 'http://localhost:4200/logout', //Optional value
      realm: 'fitnessloveteam', //Realm name
      clientId: 'fitnesslove-frontend',
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false,
    },
  },
};
