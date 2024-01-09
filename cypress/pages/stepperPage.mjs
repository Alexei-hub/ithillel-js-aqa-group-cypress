import { BasePage } from './base.mjs';

export class StepperPage extends BasePage {
  constructor() {
    super('/pages/layout/stepper');
  }

  horizontalStepper() {
    return cy.get('nb-stepper[orientation="horizontal"]');
  }

  stepTitle() {
    return this.horizontalStepper().find('h3');
  }

  nextBtn() {
    return this.horizontalStepper().find('button').contains('next', { matchCase: false });
  }
}
