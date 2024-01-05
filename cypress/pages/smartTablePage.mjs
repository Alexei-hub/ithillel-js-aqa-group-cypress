import { BasePage } from './base.mjs';

export class SmartTablePage extends BasePage {

  constructor() {
    super('pages/tables/smart-table');
  }

  get plusBtn() {
    return cy.get('.ng2-smart-actions-title');
  }

  get addingNewUserColumn() {
    return cy.get('.ng2-smart-filters + tr');
  }

  get addBtn() {
    return this.addingNewUserColumn.find('.ng2-smart-action-add-create');
  }

  get idInput() {
    return cy.get('input[placeholder="ID"]');
  }

  get firstNameInput() {
    return cy.get('input[placeholder="First Name"]');
  }

  get lastNameInput() {
    return cy.get('input[placeholder="Last Name"]');
  }

  get userNameInput() {
    return cy.get('input[placeholder="Username"]');
  }

  get emailInput() {
    return cy.get('input[placeholder="E-mail"]');
  }

  get ageInput() {
    return cy.get('input[placeholder="Age"]');
  }

  get userColums() {
    return cy.get('tbody tr');
  }

  get editBtn() {
    return this.userColums.first().find('.nb-edit');
  }

  get saveBtnAfterEdit() {
    return this.userColums.first().find('.nb-checkmark');
  }

  visit() {
    cy.visit(this.URL, { failOnStatusCode: false });
  }

  addingNewUser(user) {
    this.plusBtn.click();
    this.idInput.last().type(user.id);
    this.firstNameInput.last().type(user.firstName);
    this.lastNameInput.last().type(user.lastName);
    this.userNameInput.last().type(user.userName);
    this.emailInput.last().type(user.email);
    this.ageInput.last().type(user.age);
    this.addBtn.click();
  }

  checkingUser(user) {
    this.userColums.first().each(column => {
      cy.wrap(column).contains('div', user.id).should('have.text', user.id);
      cy.wrap(column).contains('div', user.firstName).should('have.text', user.firstName);
      cy.wrap(column).contains('div', user.lastName).should('have.text', user.lastName);
      cy.wrap(column).contains('div', user.userName).should('have.text', user.userName);
      cy.wrap(column).contains('div', user.email).should('have.text', user.email);
      cy.wrap(column).contains('div', user.age).should('have.text', user.age);
    })
  }

  editUser(user) {
    this.editBtn.click();
    this.idInput.last().clear().type(user.id);
    this.firstNameInput.last().clear().type(user.firstName);
    this.lastNameInput.last().clear().type(user.lastName);
    this.userNameInput.last().clear().type(user.userName);
    this.emailInput.last().clear().type(user.email);
    this.ageInput.last().clear().type(user.age);
    this.saveBtnAfterEdit.click();
  }
}
