// Implementa cálculo de área de retângulos, círculos e triângulos

const areaRetangulo = function areaRetangulo (base, altura) {
    return base * altura;
}

const areaCirculo = function areaCirculo (diametro) {
    return Math.PI * Math.pow(diametro/2, 2);
}

const areaTriangulo = (base, altura) => {
    return(base * altura)/2
};

module.exports = {
    areaRetangulo,
    areaTriangulo,
    areaCirculo
}
