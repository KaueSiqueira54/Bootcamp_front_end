
let peso = 80;
let altura = 1.75;

const imc = peso / (altura * altura);

console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log("Abaixo do peso!");
}
else if (imc >= 18.5 && imc <= 25) {
    console.log("Peso Normal!");
}
else if (imc >= 25 && imc <= 30) {
    console.log("Acima do peso!");
}
else if (imc <=30 && imc <=40) {
    console.log("Obesidade!")
}
else {
    console.log("Acima de 40 Obesidade Grave!");
}
