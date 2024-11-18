let vilao = "Darh Vader"

let xp = 10002

let nivel = " "

if(xp < 1000) {
    nivel = "Iniciante no lado Sombrio"
}
if(xp >= 1001 <= 2000) {
    nivel = "Aprendiz do lado Sombrio"
}
if(xp >= 2001 <= 5001) {
    nivel = "Caçador do lado Sombrio"
}
if(xp >= 5001 <= 7000) {
    nivel = "Assasino do lado Sombrio"
}
if(xp >= 7001 <= 8001) {
    nivel = "Jedi infiltrado do lado Sombrio"
}
if(xp >= 8001 <= 9000) {
    nivel = "Mestre do lado Sombrio"
}
if(xp >= 9001 <= 10000) {
    nivel = "Lorde do lado Sombrio"
}
if(xp > 10001) {
    nivel = "Lorde Supremo dos SITH"
}


console.log("O Vilão de nome " + vilao + " é um " + nivel)