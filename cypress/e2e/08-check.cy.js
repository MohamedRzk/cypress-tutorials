it('check command', () => {
    cy.visit('cypress/index.html');
    
    // We can check a checkbox or a radio button using the check command
    // We can uncheck the checkbox using the uncheck command
    // We can force the checking by adding an option.
    // .check() requires the element to have type checkbox or radio
    // .check() will automatically wait for the element to reach an actionable state
    // More Information --> https://docs.cypress.io/api/commands/check#Rules
    cy.get('#Nuts').check();
    cy.get('#Nuts').uncheck();
    cy.get('#Tester').check();
    cy.get('#Manager').check();
  });