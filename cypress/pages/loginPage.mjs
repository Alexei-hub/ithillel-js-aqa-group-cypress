import { BasePage } from './base.mjs';

export class LoginPage extends BasePage {
  constructor() {
    super('/auth/login')
  }

  get mailInput() {
    return cy.get('#input-email');
  }

  get passwordInput() {
    return cy.get('#input-password');
  }

  get rememberCheckbox() {
    return cy.get('span.custom-checkbox');
  }

  get loginBtn() {
    return cy.get('button').contains('Log In', { matchCase: false });
  }

  visit() {
    cy.visit(this.URL, { failOnStatusCode: false });
  }


  fillFieldsAndLogin(mail, password, remember) {
    this.mailInput.type(mail);
    this.passwordInput.type(password);
    if (remember) this.rememberCheckbox.click();
    this.loginBtn.click();
  }

}