
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    };

    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    };

};

const uno = new Carro('Fiat', 'Vermelho', 1/12);

const palio = new Carro("Fiat", "Azul", 1/10);

console.log(palio.calcularGastoPercurso(70, 5));


