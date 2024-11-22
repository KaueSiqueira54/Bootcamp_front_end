
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const distanciaKm = 100;
const kmPorLitros = 10;
const tipoCombustivel = "Gasolina"

const gastoMedioPorKm = distanciaKm / kmPorLitros

if (tipoCombustivel === "Etanol") {
    let valorGasto = gastoMedioPorKm * precoEtanol;
    console.log("O valor a ser gasto de Etanol será de R$: " + gastoMedioPorKm.toFixed(2))
} else if (tipoCombustivel === "Gasolina") {
    let valorGasto = gastoMedioPorKm * precoGasolina;
    console.log("O valor a ser gasto de Gasolina será de R$: " + valorGasto.toFixed(2));
}