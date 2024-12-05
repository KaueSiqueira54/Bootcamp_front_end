

const alunos = ['João', 'Vitor', 'Maria'];

alunos.push('Teste');

alunos[4] = 'Vini'

alunos.push(10)

//tira o primeiro valor
alunos.shift()

//tira o último item da lista
alunos.pop();

//array/lista
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; 0 < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media);

