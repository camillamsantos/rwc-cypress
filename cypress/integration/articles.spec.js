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

        // preencher o formulário do artigo
        articles.preencherFormulario()
        //submeter o artigo
        articles.submeterPublicacao()
        //verificar se a publicação foi cadastrada com sucesso

        //Verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
        // AAA -> Arrange Act Assert
        // PAV -> Preparação Ação Verificação/Validação

    });

});
