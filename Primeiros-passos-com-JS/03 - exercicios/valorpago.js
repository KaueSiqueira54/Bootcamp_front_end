

let formaPagamento = 4;
let valorPago = 100;

if (formaPagamento === 1) {
    valorPago = valorPago - (valorPago * (0.1));
    console.log("O valor a ser pago com -10% é: " + valorPago.toFixed(2));
}
else if (formaPagamento === 2) {
    valorPago = valorPago - (valorPago * 0.15);  
    console.log("O valor a ser pago com -15% é: " + valorPago.toFixed(2));
}
else if (formaPagamento === 3) {
    console.log("Preço comumm, sem desconto. R$: " + valorPago.toFixed(2));
}
else {
    valorPago = valorPago + (valorPago * 0.1);
    console.log("Preço normal com juros de icms. R$: " + valorPago.toFixed(2));
}
