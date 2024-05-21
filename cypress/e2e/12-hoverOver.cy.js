it("hover over command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('.trigger').trigger('mouseover');
})

it("hover out command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('.trigger').trigger('mouseout');
})

it.only("long press command" , ()=> {
    cy.visit('cypress/index.html');
    cy.get('.trigger').trigger('mousedown');
    cy.wait(5000);
    cy.get('.trigger').trigger('mouseup');
})