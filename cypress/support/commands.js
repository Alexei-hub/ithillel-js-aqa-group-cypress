// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/auth/login', { failOnStatusCode: false });
  cy.get('#input-email').type(email);
  cy.get('#input-password').type(password);
  cy.get('button').contains('Log in', { matchCase: false }).click();
});

Cypress.Commands.add('init', () => {
  const now = Date.now();
  const expiredOn = now + 1000000000;
  cy.window().then((win) => {
    win.localStorage.setItem('lastExternalReferrerTime', now.toString());
    win.localStorage.setItem('theme', JSON.stringify({ themeName: 'material-light', expires_in: expiredOn }));
    win.localStorage.setItem('lastExternalReferrer', 'empty');
  });
});
