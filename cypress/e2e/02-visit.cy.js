it("first visit script in cypress" , () => {

    // with visit command we can go to a normal website or html file in the system or localhost .
    //cypress recommends to set the baseUrl in cypress.config.js file.
    //we can add a second arugment to the visit command , and this arugment os an object.
    //inside the objecy we add our options.
    //URL for the docoument is 'https://docs.cypress.io/api/commands/visit' .

    //cy.visit('cypress/index.html');
    //cy.visit('https://www.google.com.eg/webhp?tab=rw');
    //cy.visit('/');
    cy.visit('https://www.google.com.eg/search',{
        qs : {
            q : "cypress"
        }
    })
})