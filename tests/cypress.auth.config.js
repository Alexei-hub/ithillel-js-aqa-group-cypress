const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: 'cypress/e2e/auth.tests/*.cy.{js,jsx,ts,tsx,mjs}',
    baseUrl: 'https://www.akveo.com/ngx-admin/',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
