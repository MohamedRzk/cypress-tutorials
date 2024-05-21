it('Then command', () => {
    cy.visit('cypress/index.html');
    cy.get('#welcome').then((mohamed) => {
      cy.log(mohamed);
    });
  });