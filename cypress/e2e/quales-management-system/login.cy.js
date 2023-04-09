/// <reference types="cypress" />
// This is a describe block
describe('This is a login test suite for the Quales Course Management System', () => {
    // This is an it block
    it('Verify that user with correct credentials can login to the Quales Course Management app', () => {
    // This is where we shall be writing our cypress tests
    //Cypress visits the quales app
    cy.visit('https://academy.quales.tech/');

    //cypress spies and get the element for the sign in button
    cy.get('.css-48p1y4 > .MuiButtonBase-root').click()
    //Cypres spies and gets the element for the sign in button and click the sign button
    cy.get('[data-testid="EmailAddress"]').type('ay@mail.com');

    cy.get('[data-testid="Password"]').type('pass1234');

    cy.get('.MuiButton-contained').click();

    cy.contains('Courses').should("be.visible");

    cy.contains('Login Successfull').should('be.visible');

    cy.contains('List of Courses').should('be.visible');



    

})

it('Verify that user with correct credentials can add course', () => {
    // This is where we shall be writing our cypress tests
    //Cypress visits the quales app
    
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click();

     cy.contains('Add New Course').should('be.visible');
    
     cy.contains('Title*').should('be.visible');
    
     cy.viewport("macbook-16");
     cy.get('[data-testid="Title*"]').type('postman');

     cy.contains('Description*').should('be.visible');
     
     cy.get('[data-testid="Description*"]').type('welcome to postman');

     cy.contains('Category*').should('be.visible');

     cy.get('#demo-simple-select').click();
     cy.viewport("macbook-16");
     cy.get('[data-value="2"]').click();

     //cy.get('[data-testid="isPremium').click();
    // cy.contains('Premium Course').should('be.visible');

     //cy.get('[data-testid="ImageURL"]').type('https://images.app.goo.gl/4JhoWNFT668aRAwb8');
     //cy.contains('Image URL').should('be.visible');

     cy.contains('Location').should('be.visible');
     cy.get('[data-testid="online"').click();

     cy.contains('Course URL* (must be youtube)').should('be.visible');
     cy.get('[data-testid="CourseURL*(mustbeyoutube)"]').type('https://www.youtube.com/watch?v=GYtL-dmlSD8 ');

    cy.get('.css-tzsjye > .MuiButton-root').click()
     cy.contains('Course created successfully').should('be.visible')
})



it('Verify that user with correct credentials can delete coures creaated on Quales Course Management app', () => {
    
cy.get('.MuiContainer-root > :nth-child(1) > :nth-child(2) ').click();

})

});