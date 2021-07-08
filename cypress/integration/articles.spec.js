/// <reference types="cypress" />

import articles from '../support/pages/articles'
//const faker = require('faker')

context('Publicação', () => {
    //hooks -> momentos antes / depois do teste
    //before /beforeEach
    //after / afterEach

    //Preparação
    beforeEach(() => {
        cy.backgroundLogin()
       // cy.get('a[href*=editor]').click()
       articles.acessarFormularioDeNovaPublicacao()
    });

    it('Criar uma nova publicação', () => {

        // // preencher o formulário do artigo

        // cy.get('input[ng-model*=title]').type('Agilizei Title - Camilla')
        // cy.get('input[ng-model*=description]').type('Cypress')
        // cy.get('textarea[ng-model*=body]').type(faker.lorem.paragraph())
        // cy.get('input[ng-model*=tagField]').type('Cypress')
        articles.preencherFormulario()
        // //submeter o artigo
        // cy.get('button.btn-primary').click()
        articles.submeterPublicacao()
        //Verificação
        //

        // AAA -> Arrange Act Assert
        // PAV -> Preparação Ação Verificação/Validação

    });

});