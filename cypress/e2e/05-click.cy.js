it("clicking command", () => {
    cy.visit('cypress/index.html');

// We can click on an element using the click command .
// We can only click on one element .
cy.get('.invoice-button').last().click();

// We can click on multiple elements if we add {multiple: true} .
cy.get('.invoice-button').click( {multiple : true } );

// We can click on hidden, or covered elements if we add {force: true} .
cy.get('.hidden-button').last().click( { force : true } );

})
