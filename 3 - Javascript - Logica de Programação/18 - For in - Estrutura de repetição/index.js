//18 - For in - Estrutura de repetição



// const frutas = ["Pera", "Maçã", "Uva"]

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }  //Esse seria o jeito tradicional de fazer um loop em um array



// for (let i in frutas) {
//     console.log(frutas[i])
// }  //For in lê os índices ou chaves do objeto]





const pessoa = {
    nome: "Erik",
    sobrenome: "Mello",
    idade: 31
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
} //For in lendo as chaves e valores de um objeto