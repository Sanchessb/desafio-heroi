// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // padroniza para minúsculas
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`${this.nome} (${this.tipo}) atacou usando ${ataque}`);
    }
}

// Para usar a entrada do terminal
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar informações e criar herói
function criarHeroi() {
    readline.question("Digite o nome do herói: ", nome => {
        readline.question("Digite a idade do herói: ", idade => {
            readline.question("Digite o tipo do herói (mago, guerreiro, monge, ninja): ", tipo => {
                
                const heroi = new Heroi(nome, idade, tipo);
                heroi.atacar(); // Mostra o ataque

                readline.close(); // Fecha o terminal
            });
        });
    });
}

// Chama a função
criarHeroi();

