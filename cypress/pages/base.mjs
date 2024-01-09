export class BasePage {
  URL;
  constructor(url) {
    this.URL = url;
  }

  visit() {
    cy.visit(this.URL, { failOnStatusCode: false });
  }
}
