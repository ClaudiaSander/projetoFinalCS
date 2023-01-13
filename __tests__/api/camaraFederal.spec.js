// Configurações
const supertest = require("supertest");
const assert  = require("chai").assert;

const baseUrl = ("https://dadosabertos.camara.leg.br/api/v2");

// Testes
describe ("Camara Federal - Testes de API",() => {
    const request = supertest(baseUrl);
    const partidos = require ("../../vendors/json/massaPartidos");  

    // Partidos - GET - Buscar dados de um partido existente

    it("Busca Dados de Partido Existente", () => {
        let idPartido = 36779;
        return request
            .get("/partidos/" + idPartido)      // requisição
            .then((response) => {               // validações
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.dados.id, idPartido);
                assert.equal(response.body.dados.sigla, "PCdoB");
                assert.equal(response.body.dados.nome, "Partido Comunista do Brasil");
                assert.equal(response.body.dados.uri, "https://dadosabertos.camara.leg.br/api/v2/partidos/" + idPartido);
            })
    })
  
    // Partidos - GET - Buscar dados de um partido inexistente
    it("Busca Dados de Partido Inexistente", () => {
        let idPartido = 1;
        return request
            .get("/partidos/" + idPartido)      // requisição
            .then((response) => {               // validações
                assert.equal(response.statusCode, 404);
                assert.equal(response.body.status, 404);
                assert.equal(response.body.title, "Recurso não encontrado");
                assert.equal(response.body.detail, "A URL passada se refere a um recurso que não existe no sistema.");
                assert.equal(response.body.instance, "https://dadosabertos.camara.leg.br/api/v2/partidos/"+idPartido);
                assert.equal(response.body.code, 6);
            })
    })

// Busca dados de vários partidos indicados em um json

    partidos.array.forEach(({id, sigla, nome}) => {

        it("Pesquisa partido (massa de testes - json) - " + id + " - " + sigla, () => { 
            return request
            .get("/partidos/" + id)      // requisição
            .then((response) => {               // validações
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.dados.id, id);
                assert.equal(response.body.dados.sigla, sigla);
                assert.equal(response.body.dados.nome, nome);
                assert.equal(response.body.dados.uri, "https://dadosabertos.camara.leg.br/api/v2/partidos/" + id);
            })  // fim do then
        }) // fim do it
    }); // Fecha o forEach
})