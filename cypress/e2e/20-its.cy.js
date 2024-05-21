it('Its command', () => {
    const student = {
      name: 'mohamed',
      family: 'rezk',
      isQA: true,
      isWatching: function () {
        console.log('He is watching');
      },
    };
    cy.visit('cypress/index.html');
    cy.wrap(student).its('family').should('eql', 'rezk');
  });