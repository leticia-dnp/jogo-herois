// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        // Define o ataque de acordo com o tipo
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        return `${this.tipo} atacou usando ${ataque}`;
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Alaric", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 100, "mago");

console.log(heroi1.atacar()); // guerreiro atacou usando espada
console.log(heroi2.atacar()); // mago atacou usando magia
