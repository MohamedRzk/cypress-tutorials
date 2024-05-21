it("check title command line" , () => {
    cy.visit('cypress/index.html');
    cy.title().should('eql' , 'Cypress Tutorials');
    cy.log(cy.title());
})