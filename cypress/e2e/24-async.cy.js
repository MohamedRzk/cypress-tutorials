it("Async behaviour" , () => {
    var message = 'hello';
    cy.visit('cypress/index.html');
    cy.get('#welcome').invoke('text').then(text =>{
        message = text
        cy.log(message);
        console.log(message);
        expect(message).to.eql('Welcome to Cypress Tutorials');
    })
    cy.log(message);
    console.log(message);
})