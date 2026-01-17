# 🦸‍♂️ Desafio Herói

Este projeto foi desenvolvido como parte do curso de **JavaScript** da [DIO](https://www.dio.me/), com o objetivo de praticar **conceitos de Programação Orientada a Objetos (POO)**, **classes**, **objetos**, **métodos** e **condicionais**.

---

## 📝 Sobre o Projeto

O projeto consiste em criar uma **classe Heroi** que representa um herói de aventura. Cada herói possui:

- **nome**: o nome do personagem
- **idade**: idade do personagem
- **tipo**: o tipo de herói (mago, guerreiro, monge ou ninja)

A classe também possui um método `atacar()` que exibe uma mensagem de ataque personalizada, dependendo do tipo do herói:

- **Mago** → "usou magia"  
- **Guerreiro** → "usou espada"  
- **Monge** → "usou artes marciais"  
- **Ninja** → "usou shuriken"

---

## 💡 Como Funciona

1. Você cria uma instância do herói, passando **nome**, **idade** e **tipo**.  
2. Ao chamar o método `atacar()`, o programa imprime no console a mensagem com o ataque correspondente ao tipo do herói.

**Exemplo de uso:**

```javascript
const heroi1 = new Heroi("Lucas", 25, "mago");
heroi1.atacar(); // Saída: mago atacou usando magia

const heroi2 = new Heroi("Ana", 30, "guerreiro");
heroi2.atacar(); // Saída: guerreiro atacou usando espada
