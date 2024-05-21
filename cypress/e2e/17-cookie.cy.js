it("get cookie command line" , () => {
    cy.visit('cypress/index.html');
    cy.getCookie('course').should('have.a.property' , 'value' , 'cypress');
})

it("set cookie command line" , () => {
    cy.visit('cypress/index.html');
    cy.setCookie('level' , 'All');
})

it('get all cookies', () => {
    cy.visit('cypress/index.html');
    cy.getCookies().should('have.length', 2);
  });