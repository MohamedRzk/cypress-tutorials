
it("we shoud able to open website in any port dimensions", () =>{

    //we can use cy.viewport to set the weidth and height of the test runner.
    //usefully to test our application in deffenert viewports.
    //we can use pre-define viewPort 
    //the docoumnts in URL https://docs.cypress.io/api/commands/viewport .
    //cy.viewport(550,750);
    cy.viewport('macbook-16');

    cy.visit('cypress/index.html');
})


/*
//first hard-coded 
it("first view port test case", () =>{
    cy.viewport('macbook-16');
    cy.visit('cypress/index.html');
})
it("second view port test case", () =>{
    cy.viewport('ipad-mini');
    cy.visit('cypress/index.html');
})
it("third view port test case", () =>{
    cy.viewport('samsung-note9');
    cy.visit('cypress/index.html');
})
*/

/*
//second javaScript based
['macbook-16','ipad-mini','samsung-note9'].forEach(viewports => {
    it("main view port test case", () =>{
        cy.viewport(viewports);
        cy.visit('cypress/index.html');
    }) 
})
*/