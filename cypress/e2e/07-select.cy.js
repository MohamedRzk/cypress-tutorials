it('select command', () => {
    cy.visit('cypress/index.html');
    
    // We can select any option from a dropdown using the select command
    // We can select an option by text, index and by value
    cy.get('#courses').select('selenium');
    cy.get('#courses').select(2);
    // More Information --> https://docs.cypress.io/api/commands/select
  });