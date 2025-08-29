export const oktaConfig = {
  clientId: '0oauxs314468KOgF7697',
  issuer: 'https://integrator-9957757.okta.com/oauth2/default',
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true
};