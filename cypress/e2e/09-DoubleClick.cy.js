it('Double click command', () => {
    cy.visit('cypress/index.html');

    // Double-click a DOM element.https://docs.cypress.io/api/commands/dblclick#Syntax
    cy.get('[value="Click me"]').dblclick();
  });