//we use get command to find an element or elements

// find element by its tag name .
it("find element by tag name" , () => {
    //we put the tag name inside the get command
    //html tag in DOM file
    cy.visit('cypress/index.html');
    cy.get('h1');
    cy.get('h2');
    cy.get('button');
})

// find element by its ID .
it("find element by ID" , () => {
    cy.visit('cypress/index.html');

    // to find element by ID use '#' sympol
    cy.get('#courses');
})

// find element by its class name .
it("find element by class name " , () => {
    cy.visit('cypress/index.html');

    // to find element by class name use '.' => dot sympol
    //in case of compound class we remove the space and put dot '.'
    cy.get('.list1.web');
})

// find element by its Attributies .
it("find element by Attributies " , () => {
    cy.visit('cypress/index.html');

    // to find element using any Attributies use [ key = "value" ]
    cy.get('[name="Nuts"]');
})

// find first element from list of elements .
it("find first element from list of elements" , () => {
    cy.visit('cypress/index.html');

    // to find first element from list of elements use .first() method .
    cy.get('h1').first();
})

// find last element from list of elements .
it("find last element from list of elements" , () => {
    cy.visit('cypress/index.html');

    // to find last element from list of elements use .last() method .
    cy.get('h1').last();
})

// find  anelement from list of elements by index.
it("find  anelement from list of elements by index" , () => {
    cy.visit('cypress/index.html');

    // to find  anelement from list of elements by index use .eq() method and take intger value.
    cy.get('h1').eq(2);
})

// find  anelement from list of elements by filter .
it("find  anelement from list of elements by filter" , () => {
    cy.visit('cypress/index.html');

    // to find  anelement from list of elements by filter use .filter() method by class name using dot .
    //we use css selector inside filter command .
    cy.get('li').filter('.web');
}) 

// find  an element using children command .
it("find  an element using children command" , () => {
    cy.visit('cypress/index.html');

    // find  an element using children command .cildren() .
    //if we don't detect the children filtration we return all children elements .
    //we use css selector inside filter command .
    //we can use first() and last() commands with children command .
    cy.get('.course-list').children('.web');
    cy.get('.course-list').children().first();
    cy.get('.course-list').children().last();
})

// find  an element using find command .
it("find  an element using find command" , () => {
    cy.visit('cypress/index.html');

    // find  an element using find command .cildren() .
    //if we don't detect the find filtration we return all elements .
    //we use css selector inside filter command .
    cy.get('.course-list').find('.web');
})

//find  an element using parent command .
it("find  an element using parent command" , () => {
    cy.visit('cypress/index.html');

    // find  an element using parent command using .parent() .
    cy.get('.list1.web').parent();
})

//find  an element using parents command .
it("find  an element using parents command" , () => {
    cy.visit('cypress/index.html');

    // find  an element using parent command using .parents() .
    //parents command will return all parents in DOM file .
    cy.get('.list1.web').parents();
})

//find  an element using sibling command .
it("find  an element using sibling command" , () => {
    cy.visit('cypress/index.html');

    // find  an element using sibling command using .siblings() .
    //siblings command will return all brothers elements in DOM file .
    //siblings command that is meaing the brothers have the same laws .
    cy.get('.list1.web').siblings();
})

//find  an element text .
it("find  an element text" , () => {
    cy.visit('cypress/index.html');

    // find  an element text .
    //we use contains method instead of get method . 
    cy.contains('Appium');
    // or we can use get and contains commands together .
    cy.get('.course-list').contains('react');
})