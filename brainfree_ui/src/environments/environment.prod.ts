import {KeycloakConfig, KeycloakInitOptions} from "keycloak-js";
import {KeycloakOptions} from "keycloak-angular";

const keycloakConfig: KeycloakConfig = {
  url: '/auth',
  realm: 'brainfree',
  clientId: 'app-frontend',

};

const keycloakInitOptions: KeycloakInitOptions = {
  onLoad: 'login-required',
  checkLoginIframe: false
};

const keycloakOptions: KeycloakOptions = {
  config: keycloakConfig,
  initOptions: keycloakInitOptions,
  enableBearerInterceptor: true
};

export const environment = {
  production: true,
  keycloakOptions
};
