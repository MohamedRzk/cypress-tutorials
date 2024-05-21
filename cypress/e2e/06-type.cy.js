it("typing action using type command" , () => {
    cy.visit('cypress/index.html');

// We can type on any input using the type command .
// We can use some keyboard actions using type --> https://docs.cypress.io/api/commands/type#Arguments .
cy.get('#inputEmail').type('mohamed.mr.rezk@gmail.com');
cy.get('#inputPassword').type('741236985-cypress');

// We can type on a hidden element using force option .
// We can delay the type command per seconds, this delay will happen between every character in the string .
cy.get('#coverdInput').type('hello world from Cypress' , {
    force : true ,
    delay : 100
})
})