// 24 - Exercício com lógica de programação - 02

// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem  ou false se estiver no modo retrato (portrait).

// function ePaisagem(largura, altura) {
//     return largura > altura;
// }

// if (ePaisagem(1080, 980)) {
//     console.log("A imagem está no modo paisagem.");
// } else {
//     console.log("A imagem está no modo retrato.");
// }



// Resolução do exercício
// function ePaisagem(largura, altura) {
//     return largura > altura;
// }

// console.log(ePaisagem(1920, 1080)); // true



// Resolução alternativa utilizando arrow function
const ePaisagem = (largura, altura) => largura > altura;
//Nao precusa de return pq é uma arrow function de uma linha só

console.log(ePaisagem(1920, 1080)); // true