//15 - Funções em JavaScript - Uma introdução ao básico



// function saudacao () {

// } // Essa é a sintaxe básica de uma função em JavaScript


// function saudacao () {
//     console.log ("Olá, seja bem-vindo(a)!") // Código que será executado quando a função for chamada
// }
// saudacao() // Chama a função para executar o código dentro dela


// function saudacao (nome) {
//     console.log (`Olá, seja bem-vindo(a) ${nome}`)
// } // Essa função recebe um parâmetro (nome) que será usado dentro da função
// saudacao('Erik') // Chama a função para executar o código dentro dela

// //Resumo de todo o codigo: Primeiro definimos a função com o nome "saudacao" que recebe um parâmetro "nome". Dentro da função, usamos console.log para imprimir uma mensagem de boas-vindas que inclui o nome fornecido. Finalmente, chamamos a função passando o argumento 'Erik', o que resulta na exibição da mensagem personalizada no console.




// function saudacao (nome) {
//     console.log (`Olá, seja bem-vindo(a) ${nome}`)
// } 

// const variavel = saudacao('Erik')
// console.log (variavel) //undefined, pois a função não retorna nada, apenas imprime no console. Se quisermos que a função retorne um valor, precisamos usar a palavra-chave "return" dentro da função.




// function saudacao (nome) {
//     return `Olá, seja bem-vindo(a) ${nome}`
// } // Agora a função retorna uma string com a mensagem de boas-vindas

// const variavel = saudacao('Erik') // Agora a variável "variavel" recebe o valor retornado pela função
// console.log (variavel) // Agora imprime a mensagem retornada pela função no console



// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// console.log(soma(2, 2)) // Chama a função soma com os argumentos 2 e 2, e imprime o resultado (4) no console

// console.log(soma(3, 1)) // Chama a função soma com os argumentos 3 e 1, e imprime o resultado (4) no console

// console.log(soma(5, 5)) // Chama a função soma com os argumentos 5 e 5, e imprime o resultado (10) no console








// function soma(x, y) {
//     const resultado = x + y // x e y não tem valor até que a função seja chamada
//     return resultado
// }

// const resultado = soma(2, 2) // Armazena o resultado da soma em uma variável, o (2, 2) são os argumentos passados para a função x e y
// console.log(resultado) // Imprime o resultado (4) no console




// //Jogando um função dentro de uma variável. Anonima
// // sempre que uma variavel recebe uma função, ela precisa de um ponto e virgula no final
// const raiz = function (n) {
//     return n ** 0.5
// } // Define uma função anônima que calcula a raiz quadrada de um número e atribui essa função à variável "raiz"

// console.log(raiz(9)) // Chama a função raiz com o argumento 9, e imprime o resultado (3) no console




// // MAneira mais moderna de criar uma função anônima é usando arrow function (função de seta)
// const raiz = (n) => {
//     return n ** 0.5
// }

// console.log(raiz(9)) // Chama a função raiz com o argumento 9, e imprime o resultado (3) no console






// Maneira mais simplificada ainda de criar uma arrow function, quando ela tem apenas um parâmetro e uma única linha de código

const raiz = n => n**0.5 
console.log(raiz(9))// Se a função tem apenas um parâmetro, os parênteses podem ser omitidos. Se a função tem apenas uma linha de código, as chaves e o return também podem ser omitidos.