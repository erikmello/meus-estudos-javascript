//13 - Atribuição via desestruturação (Arrays)

// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// const numeros = [1, 2, 3];

// [a, b, c] = numeros
// //lado esquero: desetrut. lado direito: atribuição

// console.log(a, b, c);



// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// const letras = [b, c, a];

// [a, b, c] = letras;
// //lado esquero: desetrut. lado direito: atribuição

// console.log(a, b, c);





// //               0  1  2  3  4  5  6  7  8   --> indice
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const PrimeiroNumero = numeros[0]

// console.log(PrimeiroNumero)



// exemplo atribuição com desestruturação

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [PrimeiroNumero, segundoNumero] = numeros;

// console.log(PrimeiroNumero, segundoNumero);
// //vai retornar "1000, 2000", pois foi feita duas atribuições, então ele retorna os dois primeiros valores, ou strings caso seja necessarios

// //ex com strings
// const nomeFrutas = ["Maçã", "Uva", "Pera"]
// const [PrimeiraFruta, SegundaFruta] = nomeFrutas

// console.log(PrimeiraFruta, SegundaFruta)















// //Ex pegando o "resto". Operador "resto"

// /// ...rest, ...spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [PrimeiroNumero, segundoNumero, ...resto] = numeros;

// console.log(PrimeiroNumero, segundoNumero);
// console.log(resto)







// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros;

// console.log(um, tres, cinco);

// // Nesse exemplo a gente usou espaços vazios (",  ,") para pular, tendo assim um resultado 1000 3000 50007




//                   0          1          2          
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);