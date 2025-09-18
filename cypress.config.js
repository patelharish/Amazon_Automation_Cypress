const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: 'if81r6', // from Cypress Cloud
  defaultCommandTimeout: 10000,
  defaultBrowser: "chrome",
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  waitForAnimations: false,
  viewportWidth: 1300,
  viewportHeight: 800,
  videoCompression: false,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: '../../public/projects/amazon',
    reportFilename: 'amazon',
    overwrite: true,
    charts: true,
    inlineAssets: true,
    embeddedScreenshots: true,
    reportPageTitle: 'My Test Suite',
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    watchForFileChanges: true, 
  numTestsKeptInMemory: 0,
  experimentalMemoryManagement: true,
  },
});
