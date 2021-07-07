/// <reference types="cypress" />

const faker = require('faker')

context('Publicação', () => {
    //hooks -> momentos antes / depois do teste
    //before /beforeEach
    //after / afterEach
    beforeEach(() => {
        cy.backgroundLogin()
        cy.get('a[href*=editor]').click()
    });

    it('Criar uma nova publicação', () => {



        cy.get('input[ng-model*=title]').type('Agilizei Title - Camilla')
        cy.get('input[ng-model*=description]').type('Cypress')
        cy.get('textarea[ng-model*=body]').type(faker.lorem.paragraph())
        cy.get('input[ng-model*=tagField]').type('Cypress')
        cy.get('button.btn-primary').click()

    });

});