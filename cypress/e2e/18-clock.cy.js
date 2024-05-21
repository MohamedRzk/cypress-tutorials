it('clock command', () => {
    let now = new Date('1999 02 16');
    cy.clock(now);
    cy.visit('cypress/index.html');
  });