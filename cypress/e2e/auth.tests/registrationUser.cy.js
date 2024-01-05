import { RegistarionPage } from '../../pages/registrationPage.mjs';
import { DashboardPage } from '../../pages/dashboardPage.mjs';
require('cypress-commands');

describe('Registation User', () => {

    beforeEach(() => {
        cy.init();
    })

    it('positive case. Filling all correct data and checking redirect', () => {
        cy.fixture('registrationData.js').then(data => {
            const regPage = new RegistarionPage();
            regPage.visit();
            cy.log(data.fullname)
            regPage.fillRegistationFields(data.fullname, data.mail, data.password, data.password);
            regPage.agreementCheckbox.click();
            regPage.registerBtn.should('be.visible');
            regPage.registerBtn.click();
            const dashboardPage = new DashboardPage();
            dashboardPage.checkingLoadingDashboardPage();
        })
    })

    it('negative case. Filing invalid password and checking error message', () => {
        cy.fixture('registrationData.js').then(data => {
            const regPage = new RegistarionPage();
            regPage.visit();
            regPage.fillRegistationFields(data.fullname, data.mail, data.invalidPassword, data.invalidPassword);
            regPage.passInput.next('p').text().should('eq', 'Password should contain from 4 to 50 characters');
            regPage.agreementCheckbox.click();
            regPage.registerBtn.should('be.disabled');
        })
    })

    it('negative case. Filing invalid mail and checking error message', () => {
        cy.fixture('registrationData.js').then(data => {
            const regPage = new RegistarionPage();
            regPage.visit();
            regPage.fillRegistationFields(data.fullname, data.invalidMail, data.password, data.password);
            regPage.emailInput.next('p').text().should('eq', 'Email should be the real one!');
            regPage.agreementCheckbox.click();
            regPage.registerBtn.should('be.disabled');
        })
    })

    it('negative case. Do not select agreement checkbox and checkig is registation button dissable', () => {
        cy.fixture('registrationData.js').then(data => {
            const regPage = new RegistarionPage();
            regPage.visit();
            regPage.fillRegistationFields(data.fullname, data.mail, data.password, data.password);
            regPage.registerBtn.should('be.disabled');
        })
    })
})