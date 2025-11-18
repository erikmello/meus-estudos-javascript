// Atribuição via desestruturação (Objetos)




// //Atribuição Normal
// const pessoa = {
//     nome: "Erik",
//     sobrenome: "Mello",
//     idade: 31,
//     endereco: {
//         rua: "Rua18",
//         numero: 5
//     }
// }

// const nome = pessoa.nome;
// console.log(nome);





//Atribuição via desestruturação
// const pessoa = {
//     nome: "Erik",
//     sobrenome: "Mello",
//     idade: 31,
//     endereco: {
//         rua: "Rua18",
//         numero: 5
//     }
// };

// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, idade);





// const pessoa = {
//     nome: "Erik",
//     sobrenome: "Mello",
//     idade: 31,
//     endereco: {
//         rua: "Rua18",
//         numero: 5
//     }
// };

// const { nome: testeRenomeada, sobrenome, idade } = pessoa;
// console.log(testeRenomeada, idade);

// // Exemplo para renomear variavel
// //testeRenomeada vai ter valor de "nome"





// const pessoa = {
//     nome: "Erik",
//     sobrenome: "Mello",
//     idade: 31,
//     endereco: {
//         rua: "Rua 18",
//         numero: 5
//     }
// };

// const { endereco: { rua, numero } } = pessoa;
// console.log(rua, numero);

// //Pegando apenas rua e numero do objeto endereço




// const pessoa = {
//     nome: "Erik",
//     sobrenome: "Mello",
//     idade: 31,
//     endereco: {
//         rua: "Rua 18",
//         numero: 5
//     }
// };

// const { endereco: { rua, numero }, endereco } = pessoa;
// console.log(rua, numero, endereco);

// //Pegando apenas rua e numero do objeto endereço, e logo apos peguei o endereço completo também







const pessoa = {
    nome: "Erik",
    sobrenome: "Mello",
    idade: 31,
    endereco: {
        rua: "Rua 18",
        numero: 5
    }
};

const { idade, ...resto } = pessoa;
console.log(idade, resto)

//Utilizando o rest