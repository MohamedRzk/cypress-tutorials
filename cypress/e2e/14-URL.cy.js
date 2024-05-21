it("check URL command line" , () => {
    cy.visit('cypress/index.html');
    cy.url().should('contain' , 'cypress/index.html');
    cy.log(cy.url());
})