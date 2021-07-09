/// <reference types="cypress" />

import articles from '../support/pages/articles'
//const faker = require('faker')
import Routes from '../support/routes'

context('Publicação', () => {
    //hooks -> momentos antes / depois do teste
    //before /beforeEach
    //after / afterEach

    //Preparação
    beforeEach(() => {
        Routes.init()
        //preciso inicializar as rotas antes de cada teste? não, somente uma vez
        //o que acontece se eu mudar o apelido de uma rota? Contrato

        //Preparação
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
        // //verificar se a publicação foi cadastrada com sucesso

        // cy.wait('@POSTArticles').then((postArticlesResponse) => {
        //     expect(postArticlesResponse.response.statusCode).to.eq(200)
        // })

        // cy.wait('@GETArticlesTitle').then((postArticlesResponse) => {
        //     expect(postArticlesResponse.response.statusCode).to.eq(200)
        // })

        // cy.wait('@GETArticlesTitleComments').then((postArticlesResponse) => {
        //     expect(postArticlesResponse.response.statusCode).to.eq(200)
        // })

        //Verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()


        // AAA -> Arrange Act Assert
        // PAV -> Preparação Ação Verificação/Validação

    });

});