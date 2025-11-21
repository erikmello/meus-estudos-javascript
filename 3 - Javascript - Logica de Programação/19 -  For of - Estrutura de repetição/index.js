//19 -  For of - Estrutura de repetição

// const nome = ["Erik Mello", "Maiara", "Derick"];


// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// } //usando o for tradicional, posso usar ele para acessar o índice do array

// console.log("--------------") //separador

// for (let i in nome) {
//     console.log(nome[2])
// } //usando o for in para acessar o índice do array

// console.log("--------------") //separador

// for (let valor of nome) {
//     console.log(valor)
// } //usando o for of para acessar o valor do array

// console.log("--------------") //separador

// nome.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array)
// }) // O método forEach é uma função embutida em arrays no JavaScript que permite executar uma função para cada elemento do array. Ele recebe como argumentos a função que será executada, e essa função pode receber até três parâmetros: o valor do elemento atual, o índice do elemento atual e o próprio array. No exemplo acima, estamos usando o forEach para imprimir o valor, o índice e o array completo para cada elemento do array 'nome'.


// Em objetos:
// const pessoa = {
//     nome: "Erik",
//     sobrenome: "Mello"
// }


// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave])
// }
// Em obejetos o For In funciona, pois ele itera sobre as chaves do objeto. No exemplo acima, estamos usando o for in para imprimir cada chave do objeto 'pessoa' junto com seu valor correspondente.




// Resumindo:
// For clássico - Geralmente com iteráveis (arrays ou strings) - precisa de um índice
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)