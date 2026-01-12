/// <reference types = "cypress" />

before(()=>{
    cy.log("this is the mocha hook before");
})
beforeEach(()=>{
    cy.log("this is the mocha hook beforeEach");
})
after(()=>{
    cy.log("this is the mocha hook before");
})
afterEach(()=>{
    cy.log("this is the mocha hook beforeEach");
})
describe("Login Functoinality", () => {
    it("verify that user can login with valid credentials",function(){
        cy.log("verify that user can login with valid credentials");
    })
    
    it("check that user can't login with incorrect email",() =>{
        cy.log("check that user can't login with incorrect email");
    })
    it("check that user can't login with incorrect password",() =>{
        cy.log("check that user can't login with incorrect password");
    })
})
describe("Add To Cart", () => {
    it("verify that user can add any product to his cart",function(){
        cy.log("verify that user can add any product to his cart");
    })
    
    it("check that user can checkout his cart to payment process",() =>{
        cy.log("check that user can checkout his cart to payment process");
    })
})
// first commit