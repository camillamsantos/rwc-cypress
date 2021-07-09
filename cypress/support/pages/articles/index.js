/// <reference types="cypress" />

const faker = require('faker')

const elementos = require('./elements').ELEMENTS

import routes from '../../routes'


class Articles {
    acessarFormularioDeNovaPublicacao() {
        cy.get('a[href*=editor]').click()
    }
    preencherFormulario() {
        // preencher o formulário do artigo
        cy.get(elementos.inputTitle).type('Agilizei Title - Camilla')
        cy.get(elementos.inputDescription).type('Cypress')
        cy.get(elementos.textAreaContent).type(faker.lorem.paragraph())
        cy.get(elementos.inputTags).type('Cypress')
    }
    submeterPublicacao() {

        // POST 200 /api/articles
        // GET 200 /api/articles/agilizei-title-camilla-zrrowx
        // GET 200 /api/articles/agilizei-title-camilla-zrrowx/comments



        //submeter o artigo
        cy.get(elementos.buttonSubmit).click()

    }
    //verificar se a publicação foi cadastrada com sucesso
    verificarSeAPublicacaoFoiCriadaComSucesso() {



        //template string
        cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.response.statusCode).to.eq(200)
        })

        cy.wait(`@${routes.as.getArticlesTitleComments}`).then((getArticleTitleComments) => {
            expect(getArticleTitleComments.response.statusCode).to.eq(200)
        })

    }

}



export default new Articles()

