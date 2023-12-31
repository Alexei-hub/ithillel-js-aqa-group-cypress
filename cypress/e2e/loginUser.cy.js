import { LoginPage } from "../pages/loginPage.mjs"
import { DashboardPage } from "../pages/dashboardPage.mjs";

describe('Login User', () => {

    beforeEach(() => {
        cy.init();
    })

    it('should login and check redirect to main page', () => {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillFieldsAndLogin('test@gmail.com', 1111, true);
        const dashboardPage = new DashboardPage();
        dashboardPage.checkingLoadingDashboardPage();
    })
})