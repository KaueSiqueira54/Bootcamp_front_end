
const precoCombustivel = 5.79;
const gastoMedioCombustivelPorKm = 10;
const distanciaKm = 1580;

const calculo = precoCombustivel * (distanciaKm / gastoMedioCombustivelPorKm);

console.log("O total gasto na viagem foi de R$: " + calculo.toFixed(2));


