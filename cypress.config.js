const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "defaultCommandTimeout": 4000,
     "reporter": "./node_modules/mochawesome/src/mochawesome.js",
    "reporterOptions": {
      "reportDir": "cypress/reports/separate-reports",
      "overwrite": false,
      "html": false,
      "json": true,
      "charts": true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
