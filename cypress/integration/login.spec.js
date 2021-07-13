/// <reference types="cypress" />
import login from '../support/pages/login'

context('Login', () => {
    it('Realizar login com sucesso', () => {
        //     //acessar a pagina de login
        //     cy.visit('login')

        //     //preencher o formulario

        //     cy.get('input[ng-model*=email]').type(Cypress.config().user.email)

        //    // cy.pause()

        //     cy.get('input[ng-model*=password]').type(12345678)
        //     //submeter o formulario de login
        //     cy.get('button.btn-primary').click()

        login.acessarLogin()
        login.preencherFormulario()
        login.submeterFormulario()

        //verificacao

    });
});

////input[ng-model*=email]
//input[ng-model*=password]
//button.btn-primary
