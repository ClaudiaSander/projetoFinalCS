
const supertest = require("supertest");
const assert  = require("chai").assert;

const baseUrl = ('https://conexaoqa.herokuapp.com')

describe('Busca perfis', () => {
    
    const request = supertest(baseUrl);
    const jsonFile = require("../../vendors/json/dadosConexao.json");
    let token = ""

    it("conecta", () => {
        return request
            .post('/api/auth')
            .send(jsonFile)
            .then((response) => {
                assert.equal(response.statusCode, 200);
                token = response.jwt
            })
    })

    it("Busca lista de posts", () => {

        return request
            .get("/api/posts/")
            .send(`{jwt:${token}}`) 
            .then((response) => {               
                assert.equal(response.statusCode, 200);
            /*    assert.equal(response.body.user.name, 'Pedro Guerra');
                assert.equal(response.body.status, 'Gerente de Testes');*/
            })
    })
})