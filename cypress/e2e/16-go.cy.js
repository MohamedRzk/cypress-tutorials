it("check go command line" , () => {
    cy.visit('cypress/index.html');
    cy.get('.about').click();
    cy.go('back');
    cy.go('forward');
})