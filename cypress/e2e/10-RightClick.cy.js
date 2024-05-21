it('rightClick command', () => {
    cy.visit('cypress/index.html');

    // Right-click a DOM element.
    //More info --> https://docs.cypress.io/api/commands/rightclick
    cy.get('[value="Click me"]').rightclick();
    
  });