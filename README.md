# projetoFinalCS
Projeto: projetoFinalCS

1 - criar uma funcionalidade simples e criar pelo menos um teste de unidade ->> npm run test calculosGeometricos.spec.js 

    calculosGeometricos.js - funcionalidade que implementa cálculo de área de retângulos, círculos e triângulos
      
    calculosGeometricos.spec.js - implementação dos testes unitários
  
    Testes unitários:
    
    - testes de unidade com valores fixos
    
    - testes de unidade com massa de testes em array
    
    - testes de unidade com massa de testes em arquivo json




2 - criar a automação de testes para pelo menos um método de uma API -->> npm run test camaraFederal.spec.js

    camaraFederal.spec.js - implementa automação de testes do método GET/partidos/<id partido> da API de dados abertos da Câmara Federal

    Testes implementados: 
  
                        Busca dados de partido existente
                        
                        Busca dados de partido inexistente
                        
                        Pesquisa partidos a partir de massa de testes em arquivo json
                      
    Swagger: https://dadosabertos.camara.leg.br/swagger/api.html

    OBS: também implementei a automação de alguns métodos da API de conexãoQA, mas a aplicação está fora do ar.
    Assim, os testes implementados em conexaoQaPerfis.spec.js e conexaoQaPosts.spec.js pararam de funcionar e foram removidos do projeto.


3 - criar a automação de testes de pelo menos um fluxo de web (site) 

    Testes criados inicialmente com Selenium IDE e depois ajustados ->> npm run test petzRacao.spec.js
  
        petzRacao.spec.js - fluxo de pesquisa e conferência de valor de um produto (ração para gatos filhotes)
      
        siteIterasys.spec.js - fluxo de pesquisa de certificados e conferência de nome de perfil. 
      
            Este teste funciona corretamente para meu usuário, mas, por motivos de segurança, retirei os dados de login do código.
            Com isso o teste deixou de funcionar, então removi essa spec do projeto.

    Teste com Selenium WebDriver ->> npm run test comprarPassagemWD.spec.js
    
        comprarPassagemWD.spec.js - testa o fluxo completo de compra de passagem no site BlazeDemo.
        Inclui seleção de um voo específico, preenchimento dos dados do cartão e pagamento da passagem.
  
         
    Teste com Page Objects e Gherkin: npm run cucumber
    
        pesquisarProdutoPO.feature - testa o fluxo de pesquisa de uma ração específica no site da Petz.
  
        
                 
4 - criar a automação de testes de pelo menos um fluxo mobile (app)
