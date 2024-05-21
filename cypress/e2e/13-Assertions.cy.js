it("should be visible command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('#courses').should('be.visible');
})

it("should be not visible command" , ()=> {
    cy.visit('cypress/index.html');
    //cy.get('#courses').should('not.be.visible');
})

it("should have text command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('#welcome').should('have.text' , 'Welcome to Cypress Tutorials');
})

it("should contains text command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('#welcome').should('contain' , 'Welcome to');
})

it("should have class command" , ()=> {
    cy.visit('cypress/index.html');
    cy.contains('wdio').should('have.class' , 'mobile');
})

it("should have css command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('.focus').focus().should('have.css' , 'background-color' , 'rgb(255, 0, 0)');
})

it("should have css II command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('.invoice-button').first().should('have.attr' , 'type');
    cy.get('.invoice-button').first().should('have.attr' , 'type' , 'button');
})