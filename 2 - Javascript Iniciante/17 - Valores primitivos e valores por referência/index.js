// 17 - Valores primitivos e valores por referência


/*
Ja vimos tipo de dado primitivos (imutáveis) como: String, Number, Boolean, Undefined, Null, e Symbol (novo em ES6).
*/


// let nome = 'Erik'; // String
// nome[0] = 'R'; // Tentar alterar o valor de um índice de uma string não funciona, pois strings são imutáveis.
// console.log(nome[0]); // E





// let a = 'A'; // Atribuição por valor (tipo primitivo)
// let b = a; // Cópia do valor de 'a' para 'b'
// console.log(a, b); // A A

// a = 'Outra coisa'; // Alteração do valor de 'a'
// console.log(a, b); // Outra coisa A (o valor de 'b' permanece inalterado)




// Dados por referencia (multavel)  - array, objeto, function

// let a = [1, 2, 3]; // Atribuição por referência (tipo objeto)
// let b = a; // Cópia da referência de 'a' para 'b'
// console.log(a, b); // [1, 2, 3] [1, 2, 3] - Isso acontece pois ambos apontam para o mesmo local na memória

// a.push(4); // Alteração do valor de 'a'
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4] - O valor de 'b' também é alterado, pois ambos apontam para o mesmo local na memória

// b.pop(); //
// console.log(a); // [1, 2, 3] - O valor de 'a' também é alterado
// console.log(b); // [1, 2, 3] POIS ambos apontam para o mesmo local na memória


// O que podemos concluir com isso? Os valores que são primitivos são copiados quando a gente passa para outra variável, já os valores que são por referência, quando passados para outra variável, o que é copiado é a referência para aquele local na memória, ou seja, ambos passam a apontar para o mesmo local na memória.

//primitivos = valores copiados
//referência = valores apontados (apontam para o mesmo local na memória)





// const a = {
//     nome: 'Erik',
//     sobrenome: 'Santos'
// }

// const b = a; // Cópia da referência de 'a' para 'b'
// console.log(b); // { nome: 'Erik', sobrenome: 'Santos' }








// const a = {
//     nome: 'Erik',
//     sobrenome: 'Santos'
// }

// const b = a; // Cópia da referência de 'a' para 'b'

// a.nome = 'Maiara'; // Alteração do valor de 'a'
// console.log(b); // { nome: 'Maiara', sobrenome: 'Santos' } - O valor de 'b' também é alterado, pois ambos apontam para o mesmo local na memória



// const a = {
//     nome: 'Erik',
//     sobrenome: 'Santos'
// }

// const b = {...a}; // Spread operator - Cópia dos valores de 'a' para 'b', criando um novo objeto na memória, dessa forma b não aponta mais para o mesmo local na memória que 'a' se tornando independente.

// a.nome = 'Maiara';
// console.log(b);