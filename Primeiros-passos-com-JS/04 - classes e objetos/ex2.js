
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    };

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ("Abaixo do peso");
        } 
        else if (imc >= 18.5 && imc < 25) {
            return ("Peso normal");
        }
        else if (imc >= 25 && imc < 30) {
            return ("Acima do peso");
        }
        else if (imc >= 30 && imc < 40) {
            return ("Obeso");
        }
        else {
            return ("Obesidade grave");
        }
    };
};

const jose = new Pessoa('jose', 70, 1.75);

const renan = new Pessoa('renan', 63, 1.75);

console.log(renan.calcularImc().toFixed(2));

console.log(renan.classificarImc())