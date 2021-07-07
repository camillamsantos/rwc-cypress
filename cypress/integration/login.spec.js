/// <reference types="cypress" />

context('Login', () => {
    it('Realizar login com sucesso', () => {
        cy.visit('login')

        

        cy.get('input[ng-model*=email]').type(Cypress.config().user.email)

       // cy.pause()

        cy.get('input[ng-model*=password]').type()
        cy.get('button.btn-primary').click()
        
    });
});

////input[ng-model*=email]
//input[ng-model*=password]
//button.btn-primary