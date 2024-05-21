it('Invoke command', () => {
    const student = {
      name: 'mohamed',
      family: 'rezk',
      isQA: true,
      isWatching: function () {
        return 'Hello ' + this.name;
      },
    };
    cy.visit('cypress/index.html');
    cy.wrap(student)
      .invoke('isWatching')        //should have return in the method
      .should('contain', 'mohamed');
  });