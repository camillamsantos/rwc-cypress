const faker = require('faker')

const elementos = require('./elements').ELEMENTS


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
        //submeter o artigo
        cy.get(elementos.buttonSubmit).click()
    }

}



export default new Articles()

