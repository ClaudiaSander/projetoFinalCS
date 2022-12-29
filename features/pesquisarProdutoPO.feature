Feature: Pesquisa produto
    Scenario: Pesquisar produto e conferir preço
        Given acesso o site Petz
        When preencho nome do produto como "Racao Premier gatos filhotes pelos longos" e clico Pesquisar e clico no produto
        Then exibe o produto "Ração Premier Ambientes Internos Pelos Longos para Gatos Filhotes Sabor Salmão"