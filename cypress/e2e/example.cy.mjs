import { ListPage } from '../pages/listPage.mjs';
import { StepperPage } from '../pages/stepperPage.mjs';

describe('stepper', () => {
  beforeEach(() => {
    cy.init();
  });

  it('should have correct titles', () => {
    const page = new StepperPage();
    page.visit();
    page.stepTitle().should('have.text', 'Step content #1');
    page.nextBtn().click();

    const listPage = new ListPage();
    listPage.visit();
  });
});
