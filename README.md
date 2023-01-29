# projetoFinalCS
Projeto: projetoFinalCS


1 - npm run test calculosGeometricos.spec.js

    Executa testes unitários na funcionalidade calculosGeometricos.js , que implementa cálculo de área de retângulos, círculos e triângulos
    Foram implementados testes de unidade com valores fixos, com massa de testes em um array e com massa de testes em arquivo json

2 - npm run test camaraFederal.spec.js

    Implementa automação de testes do método GET/partidos/<id partido> da API de dados abertos da Câmara Federal. Swagger: https://dadosabertos.camara.leg.br/swagger/api.html
    Foram implementados os seguintes testes:
  
                        Busca dados de partido existente
                        
                        Busca dados de partido inexistente
                        
                        Pesquisa partidos a partir de massa de testes em arquivo json
                      
    

    OBS: também implementei a automação de alguns métodos da API de conexãoQA, mas a aplicação está fora do ar.
    Assim, os testes implementados em conexaoQaPerfis.spec.js e conexaoQaPosts.spec.js pararam de funcionar e foram removidos do projeto.


3 - Testes de API

3.a - npm run test petzRacao.spec.js

    Teste criado inicialmente com Selenium IDE e depois aprimorado, implementa o fluxo de pesquisa e conferência de valor de um produto específico (ração para gatos filhotes)
      
3.b - siteIterasys.spec.js - fluxo de pesquisa de certificados e conferência de nome de perfil. 
      
    Este teste funciona corretamente para meu usuário, mas, por motivos de segurança, retirei os dados de login do código.
    Com isso o teste deixou de funcionar, então removi essa spec do projeto.

3.c - npm run test comprarPassagemWD.spec.js
    
     Teste com Selenium WebDriver que testa o fluxo completo de compra de passagem no site BlazeDemo, incluindo seleção de um voo específico, preenchimento dos dados do cartão e pagamento da passagem.
  
         
3.d - npm run cucumber
      
      Teste com Page Objects e Gherkin, testa o fluxo de pesquisa de uma ração específica no site da Petz (pesquisarProdutoPO.feature)
  
        
                 
4 - criar a automação de testes de pelo menos um fluxo mobile (app)
