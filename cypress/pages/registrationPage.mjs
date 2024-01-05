import { BasePage } from './base.mjs';

export class RegistarionPage extends BasePage {
    constructor() {
        super('/auth/register')
    }

    get fullNameInput() {
        return cy.get('#input-name');
    }

    get emailInput() {
        return cy.get('#input-email');
    }

    get passInput() {
        return cy.get('#input-password');
    }

    get repeatPassInput() {
        return cy.get('#input-re-password');
    }

    get agreementCheckbox() {
        return cy.get('span[class="custom-checkbox"]');
    }

    get registerBtn() {
        return cy.get('.appearance-filled');
    }

    visit() {
        cy.visit(this.URL, { failOnStatusCode: false });
    }

    fillRegistationFields(fullName, email, password, repeatPass) {
        this.fullNameInput.type(fullName);
        this.emailInput.type(email);
        this.passInput.type(password);
        this.repeatPassInput.type(repeatPass);
    }

}