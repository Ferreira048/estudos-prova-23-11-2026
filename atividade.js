// 1. Arrow Function: boasVindas
const boasVindas = (nome) => {
  return `Bem-vindo(a), ${nome}!`;
};

console.log(boasVindas("Ferreira"));

// 2. Arrow Function: ParOuImpar
const ParOuImpar = (numero) => {
    return numero % 2 === 0 ? "Par" : "Impar";
};

console.log(ParOuImpar(4)); //Par
console.log(ParOuImpar(7)); //Impar

// 2. Arrow Function: Usando Map
const precos = [10, 25, 40];

const precosTexto = precos.map((preco) => `R$ ${preco}`);

console.log(precosTexto);
// ["R$ 10", "R$ 25", "R$ 40"]

// 4.Arrow Functions: usando Filter
const palavras = ["sol", "janela", "mar", "cadeira", "luz"];

const palavrasGrandes = palavras.filter((palavra) => palavra.length > 4);

console.log(palavrasGrandes);