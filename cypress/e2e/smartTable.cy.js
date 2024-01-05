import { SmartTablePage } from "../pages/smartTablePage.mjs"

describe('Smart Table', () => {

    beforeEach(() => {
        cy.init()
    })

    it('should add and change new user', () => {
        const user = {
            id: 1,
            firstName: 'Alex',
            lastName: 'Alexandrovich',
            userName: 'AlexAlex',
            email: 'alex@gmail.com',
            age: 32
        }
        const smartTablePage = new SmartTablePage();
        smartTablePage.visit();
        smartTablePage.addingNewUser(user);
        smartTablePage.checkingUser(user);
        const changedUser = Object.create(user);
        changedUser.id = 3;
        changedUser.age = 20;
        smartTablePage.editUser(changedUser);
        smartTablePage.checkingUser(changedUser);
    })
})