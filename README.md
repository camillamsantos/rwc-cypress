
# Projeto Chapter 2 - Bootcamp Cypress - Turma 6 - Desafio do Chapter #2

# Bootcamp Agilizei - Desafio 02


![N|Solid](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/59c46/cypress-logo.webp)



Projeto desenvolvido para o bootcamp turma 6 agilizei - https://agilizei.com/agilizei-bootcamp/

# Tecnologias

  - Cypress @ 7.7.0
  - NodeJS @ v14.17.3
  - NPM @ 7.19.2

# Dependências

  - faker js
  - mocha: @ 9.0.2
  
# Desafio

  - Criar teste para cadastrar novo usuário
  - Criar teste para login do usuário cadastrado
  - Criar teste para criar e publicar um artigo
  - Implementar page objects
  - Adicionar asserções nas specs usando rotas e validações em tela
  - Organizar o código da cadastro.spec.js separando:
        Em etapas (Preparação, Ação e Validação) - conceito AAA (Arrange/ Action/ Assert)
        Em responsabilidades (Page Objects)
        Avaliar se é necessário usar ou cadastrar uma nova rota


# Passos para executar o projeto

  - Clonar o repositório
  - Dentro da raiz do projeto, executar o comando [npm install]
  - Executar os comandos a seguir para rodar os testes em modo headless nos navegadores:
  
    - Electron [npm run cy:run:electron]
    - Chrome: [npm run cy:run:chrome]
    - Firefox: [npm run cy:run:firefox]


Caso deseje visualizar a reprodução dos vídeos após executar os testes em modo headless, basta acessar o diretório cypress/videos. 
A seguir seguem gifs com testes executados em modo headless via console do VScode. 

  - Testes em modo headless via console do VsCode ![agilizei_bootcamp_desafio2]()
  
  - Testes executados no Azure DevOps ![agilizei_bootcamp_desafio2_azure]()

  - Vídeo da página de Cadastro ![agilizei_bootcamp_desafio2_cadastro]()

  - Vídeo da página de Login ![agilizei_bootcamp_desafio2_login]()

  - Vídeo da página de Artigos ![agilizei_bootcamp_desafio2_artigos]()
  

### Azure Pipeline + Reports

O projeto está configurado para rodar em uma pipeline da azure.

https://dev.azure.com/camillamsantossm/Agilizei%20Bootcamp%20N%C3%ADvel%202/_build/results?buildId=4&view=results


