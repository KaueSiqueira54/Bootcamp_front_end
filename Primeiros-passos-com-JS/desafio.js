
const precoCombustivel = 5.79;
const gastoMedioCombustivelPorKm = 1;
const distanciaKm = 1580;

const calculo = precoCombustivel * (distanciaKm / gastoMedioCombustivelPorKm);

console.log("O total gasto na viagem foi de R$: " + calculo);


