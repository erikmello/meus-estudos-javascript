// 15 - For - Clássico - Estrutura de repetição

// console.log("Linha 1")
// console.log("Linha 2")
// console.log("Linha 3")
// console.log("Linha 4")
// console.log("Linha 5")




//i significa. index
// for (let i = 0; i <= 5; i++) {
//     console.log(`Linha ${i}`)
// }

//A logica i=0 ou seja começa no indice 0, ele verifica a condição se o i é menor ou igual a 5, sendo verdadeiro é adiciona +1 (i++), tranformando em 2, e assim vai segindo ate a condição completar. 1 2 3 4 5, no 5 ele para pois a condiçãp é menor ou igual a 5, assim acaba o laço







// É possivel mudar os valores as condições, exemplo:

// for (let i = 20; i <= 50; i++) {
//     console.log(`Linha ${i}`)
// }
// //Nesse exemplo começamos do 20 até 50



// for (let i = 400; i <= 500; i++) {
//     console.log(`Linha ${i}`)
// }



// for (let i = 10; i <= 100; i += 10) {
//     console.log(`Linha ${i}`)
// }

// // Nesse exemplo começamos do index 10, verificando se o i é menor ou igual a 100. Se verdadeiro ele começa a conta de 10 em 10



// for (let i = 10; i >= 0; i -= 1) {
//     console.log(`Linha ${i}`)
// }

// //Nesse exemplo fizemo uma condição para verificar se 0 é menor que 10, se verdadeiro ele conta em ordem decrescente de 10 a 0




// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? "Par" : "Ímpar"
//     console.log(i, par)
// }

// //Verificação se é Impar ou Par





// Percorrendo array


//Indice          0       1      2
// const frutas = ["Maçã", "Pera", "Uva"]

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Índice ${i} = `, frutas[i])
// }