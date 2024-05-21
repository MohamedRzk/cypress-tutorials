describe("logIn Function Module" , ()=> {


    beforeEach(()=>{
        cy.fixture('login').as('user');
        cy.writeFile('cypress/fixtures/data.json',{
            "username":"tomsmith",
            "password":"SuperSecretPassword!"
        })
    })
    //first way to use beforeEach as method aliases if we need to use it in many testcase not in only one.
    it("logIn with valid credentials I " , ()=> {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('@user').then(user =>{
            cy.get('#username').type(user.email);
            cy.get('#password').type(user.password)
        })
        cy.get('.fa').click();
        cy.get('.subheader').should('be.visible');
    })  
    
    //second way use it only one so use fixture method in the test case.
    it("logIn with valid credentials II " , ()=> {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.fixture('login').then(user =>{
            cy.get('#username').type(user.email);
            cy.get('#password').type(user.password);
        })
        cy.get('.radius').click();
        cy.get('h2').should('be.visible');
    })

    //readFile method from any where.
    it("logIn with valid credentials III " , ()=> {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.readFile('cypress/fixtures/login.json').then(user =>{
            cy.get('#username').type(user.email);
            cy.get('#password').type(user.password);
        })
        cy.get('button').click();
        cy.get('#flash').should('be.visible');
    })

    //readFile after writing new file in beforeEach method.
    it("logIn with valid credentials IV " , ()=> {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.readFile('cypress/fixtures/data.json').then(user =>{
            cy.get('#username').type(user.username);
            cy.get('#password').type(user.password);
        })
        cy.get('[type="submit"]').click();
        cy.get('.icon-2x').should('be.visible');
        cy.get('img').should('be.visible');
    })
})