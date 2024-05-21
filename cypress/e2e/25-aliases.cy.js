describe('aliase', () => {
    beforeEach(()=>{
      cy.visit('cypress/index.html');
      cy.url().as('url');     // we define the aliase one time for all test case using beforeEach command
    })
    it('Aliases in Cypress I', () => {
      cy.get('@url').should('contain', 'index.html');
    });
    it('Aliases in Cypress II', () => {
        cy.get('@url').should('contain', 'index.html');
      });
});    