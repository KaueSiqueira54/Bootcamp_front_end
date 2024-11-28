
let notaUm = 7;
let notaDois = 7;
let notaTres = 7;

const media = (notaUm + notaDois + notaTres) / 3;

if(media < 5) {
    console.log("Reprovado!");
}
else if(media >= 5 && media <= 7) {
    console.log("Recuperação!");
}
else {
    console.log("Aprovado. Você passou!");
}
