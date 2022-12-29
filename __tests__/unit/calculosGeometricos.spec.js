//Bibliotecas//const { default: test } = require("node:test");
const calculosGeometricos = require("../../src/calculosGeometricos");

// Referencia arquivo json para teste parametrizado
const arquivoJson = require("../../vendors/json/massaAreaTriangulos")

////////////////////////////////////////////////////////////
//          Testes de unidade com valores fixos           //
////////////////////////////////////////////////////////////  

test("Calcula area de retangulo com base 10.5 e altura 3.7", () => {
    // 1 Configura
	// 1.1 Dados de entrada
    const base = 10.5;
    const altura = 3.7;

	// 1.2 Resultado esperado
    const areaEsperada = 38.85;

    // 2 Executa (chama a função que queremos testar)
    const areaRetangulo = calculosGeometricos.areaRetangulo;
    const areaAtual = areaRetangulo(base, altura);

    // 3 Valida
    expect(areaAtual.toFixed(2)).toBe(areaEsperada.toFixed(2));
})


test("Calcula area de triangulo com base = 3 e área = 7", () => {
    // 1 Configura
	// 1.1 Dados de entrada
    const base = 3;
    const altura = 7;

	// 1.2 Resultado esperado
    const areaEsperada = 10.5;

    // 2 Executa (chama a função que queremos testar)
    const areaTriangulo = calculosGeometricos.areaTriangulo;
    const areaAtual = (areaTriangulo(base, altura));

    // 3 Valida
    expect(areaAtual.toFixed(2)).toBe((areaEsperada).toFixed(2));
})


test("Calcula area de circulo com diameto = 10", () => {
    // 1 Configura
	// 1.1 Dados de entrada
    const diametro = 10;

	// 1.2 Resultado esperado
    const areaEsperada = 78.54;

    // 2 Executa (chama a função que queremos testar)
    const areaCirculo = calculosGeometricos.areaCirculo;
    const areaAtual = (areaCirculo(diametro));

    // 3 Valida
    expect(areaAtual.toFixed(2)).toBe((areaEsperada).toFixed(2));
})

////////////////////////////////////////////////////////////
//     Testes de unidade com massa de testes em array     //
////////////////////////////////////////////////////////////

//Calcula area de vários retangulos com base e altura indicados num array
    // 1 Configura
	// Dados de entrada e resultados esperados
    let massaAreaRetangulo = [
        [10, 5, 50],
        [10.5, 3.7, 38.85],
        [0, 6, 0]
    ]
    
    // 2 Executa (chama a função que queremos testar)
    test.each(massaAreaRetangulo)("Massa de testes Array: Área de retângulo com base = %f e altura = %f", (base, altura, areaEsperada) => {
        const areaRetangulo = calculosGeometricos.areaRetangulo;
        const areaAtual = areaRetangulo(base, altura);
    
        // 3 Valida
        expect(areaAtual.toFixed(2)).toBe(areaEsperada.toFixed(2));
    }) // fim do each

////////////////////////////////////////////////////////////////////
//     Testes de unidade com massa de testes em arquivo json      //
////////////////////////////////////////////////////////////////////

    test.each(arquivoJson.array.map(elemento => [
        elemento.base, 
        elemento.altura,
        elemento.areaEsperada]))
    ("Massa de testes arquivo json: área de triangulo de base = %f e altura = %f ", (base, altura, areaEsperada) => {
        expect((calculosGeometricos.areaTriangulo(base, altura)).toFixed(2)).toBe(areaEsperada.toFixed(2));
    }) // fim do each