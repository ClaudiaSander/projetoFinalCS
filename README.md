# projetoFinalCS
Projeto: projetoFinalCS

1 - criar uma funcionalidade simples e criar pelo menos um teste de unidade:

  calculosGeometricos.js 
    - funcionalidade que implementa cálculo de área de retângulos, círculos e triângulos

  calculosGeometricos.spec.js 
    Testes unitários:
    - testes de unidade com valores fixos
    - testes de unidade com massa de testes em array
    - testes de unidade com massa de testes em arquivo json

Linha de comando para execução: npm run test calculosGeometricos.spec.js 


2 - criar a automação de testes para pelo menos um método de uma API
  Automação de testes: camaraFederal.spec.js 
    - implementa automação de testes do método GET/partidos/<id partido> da API de dados abertos da Câmara Federal

  Testes implementados: Busca dados de partido existente
                        Busca dados de partido inexistente
                        Pesquisa partidos a partir de massa de testes em arquivo json
                      
  Swagger: https://dadosabertos.camara.leg.br/swagger/api.html

  OBS: também foi implementada a automação de alguns métodos da API de conexãoQA, mas a aplicação saiu do ar e não retornou mais.
  Assim, os testes implementados em conexaoQaPerfis.spec.js e conexaoQaPosts.spec.js pararam de funcionar.
  Deixei o código só para indicar que havia trabalhado neles.


3 - criar a automação de testes de pelo menos um fluxo de web (site)
  Testes criados inicialmente com Selenium IDE e depois ajustados:
    petzRacao.spec.js 
      - fluxo de pesquisa e conferência de valor de um produto (ração para gatos filhotes)
      Linha de comando para execução: npm run test petzRacao.spec.js

    siteIterasys.spec.js 
      - fluxo de pesquisa de certificados e conferência de nome de perfil. 
      Este teste funciona corretamente para meu usuário, mas, por motivos de segurança, retirei os dados de login do código.
      Mantive esta spec aqui apenas para registro.

    Teste com Selenium WebDriver:
      comprarPassagemWD.spec.js
      - testa o fluxo completo de compra de passagem no site BlazeDemo, incluindo seleção de um voo específico, preenchimento do form dp cartão, e compra
  

4 - criar a automação de testes de pelo menos um fluxo mobile (app)
