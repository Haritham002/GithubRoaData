const { defineConfig } = require("cypress");


module.exports = defineConfig({
 
  retries: 0,
  reporter: 'cypress-mochawesome-reporter', // Use the multi-reporter
  reporterOptions: {
    charts: true,
    reportPageTitle: 'RoaData',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // for html report
      
    },
   
    //specPattern:'cypress/integration/examples/*.js'
    screenshotsFolder:'cypress\screenshots',
   
    //baseUrl: "http://44.202.13.250:2080/",
    viewportWidth: 1200,
    viewportHeight: 800,
    defaultCommandTimeout:100000,
    video:true,
    watchForFileChanges:false,
  

    
  
    
  },
});
