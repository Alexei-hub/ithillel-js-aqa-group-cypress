import { BasePage } from './base.mjs';

export class DashboardPage extends BasePage {
  constructor() {
    super('pages/dashboard')
  }

  visit() {
    cy.visit(this.URL, { failOnStatusCode: false });
  }

  checkingLoadingDashboardPage() {
    cy.location('pathname').should('eq', '/ngx-admin/pages/dashboard')
  }

}