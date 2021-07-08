const elementos = require ('./elements'). ELEMENTS

class Login {

    acessarLogin() {
        //acessar a pagina de login
        cy.visit('login')
    }
    preencherFormulario() {
        //preencher o formulario
        cy.get(elementos.inputEmail).type(Cypress.config().user.email)
        cy.get(elementos.inputPassword).type(12345678)
    }

    submeterFormulario() {
        //submeter o formulario de login
        cy.get(elementos.buttonSubmit).click()

    }


}



export default new Login()