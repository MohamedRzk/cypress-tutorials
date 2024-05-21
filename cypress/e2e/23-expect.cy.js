it('Then command', () => {
    cy.visit('cypress/index.html');
    cy.get('#welcome')
      .invoke('text')
      .then((returnedText) => {
        expect(returnedText).to.eql(
          'Welcome to Cypress Tutorials'
        );
      });
  });