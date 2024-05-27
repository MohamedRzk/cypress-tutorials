const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sg18mx',
  e2e: {

    //viewportHeight : 750 ,
    //viewportWidth : 550 ,
    projectId : "sg18mx",
    //baseUrl : 'https://www.google.com.eg/webhp?tab=rw' ,

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   

  },
});
