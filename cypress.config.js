const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  e2e: { 
    setupNodeEvents(on, config) { 
      on('file:preprocessor', cucumber()) 
    },
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: false,
    chromeWebSecurity: false
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false
  }
});