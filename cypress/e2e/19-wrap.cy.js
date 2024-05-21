it("wrap command" , () => {
    const Employee = {
        Name  : "mohamed",
        phone : "01274346757" ,
        isQC : true ,
        working : function (){
            console.log("yes the employee is working good");
        }
    };
    cy.visit('cypress/index.html');
    cy.wrap(Employee).should('have.a.property' , 'Name' , 'mohamed');

    const message = 'Welcome to QAcart';
    //first way to enter the name of constant directly.
    cy.wrap(message).should('eql', 'Welcome to QAcart');
    
    //secod way to enter the name of constant with its kay in object.
    cy.wrap({ name : message}).then(user=>{
        expect(message).contain('Welcome to QAcart');
    })
})