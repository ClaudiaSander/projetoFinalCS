const supertest = require("supertest");
const assert  = require("chai").assert;

const baseUrl = ('https://conexaoqa.herokuapp.com')

describe('Busca perfis', () => {
    
    const request = supertest(baseUrl);

    it("Busca um usuário específico", () => {
        let usuarioId = '637d72b11fb5cb0015a02258'

        return request
            .get("/api/profile/user/" + usuarioId)     
            .then((response) => {               
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.user.name, 'Pedro Guerra');
                assert.equal(response.body.status, 'Gerente de Testes');
            })
    })

    it("Busca lista de perfis", () => {

        return request
            .get("/api/profile")      
            .then((response) => {               
                assert.equal(response.statusCode, 200);
                assert.equal(response.body[0].user.name, "Pedro Guerra");
            })
    })  
})