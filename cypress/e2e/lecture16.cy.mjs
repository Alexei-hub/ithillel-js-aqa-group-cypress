describe('lecture 16', { env: { test_env_var: 'test env variable value' } }, () => {
  beforeEach(() => {
    cy.init();
  });

  it('random number fixture form js file', () => {
    cy.fixture('random').then((rand) => {
      cy.log(rand.oneToHundred);
      cy.log(rand.oneToTen);
    });
  });

  it('login as admin with json fixture', () => {
    cy.fixture('auth').then((auth) => {
      cy.login(auth.admin.email, auth.admin.pass);
    });
  });

  it('login as user with json fixture', () => {
    cy.fixture('auth').then((auth) => {
      cy.login(auth.user.email, auth.user.pass);
    });
  });

  // this test should be run with 'npm run cy:env' command
  it('show environment variables', () => {
    cy.log(Cypress.env('config_env'));
    cy.log(Cypress.env('env_config_json'));
    cy.log(Cypress.env('test_env_var'));
    cy.log(Cypress.env('PROCESS_ENV'));
    cy.log(Cypress.env('cli_env'));
  });
});
