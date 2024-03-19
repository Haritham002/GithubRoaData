// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-xpath';
Cypress.Commands.add("LoginAPP",(UserID,password)=>{
    cy.visit('http://44.208.84.87:2080/')
    cy.wait(5000)
    cy.xpath("//span[contains(text(),'Login')]").click({force: true});
    
    cy.xpath("//input[@name='user']").type(UserID);
    cy.xpath("//input[@type='password']").type(password);
    cy.xpath("//button[contains(text(),'Login')]").click();
    

})
