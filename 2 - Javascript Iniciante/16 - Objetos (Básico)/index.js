
//


// const array = [1, 2, 3];
// array = [5, 6, 7]; // Não é possível reatribuir um array declarado com const




// let array = [1, 2, 3];
// array = [5, 6, 7]; // Podemos reatribuir um array declarado com let



// const array = [1, 2, 3];
// array.push(4); // Podemos modificar o conteúdo do array. Push adiciona um elemento ao final do array
// array[0] = 0; // Podemos modificar um elemento específico do array.



// // Uso sem objetos
// const nome01 = 'Erik';
// const sobrenome01 = 'Mello';
// const idade01 = 32;

// const nome02 = 'Maiara';
// const sobrenome02 = 'Mello';
// const idade02 = 31;





// // // Uso com objetos
// const pessoa1 = {
//     nome: 'Erik',
//     sobrenome: 'Mello',
//     idade: 32
// } ; 

// const pessoa2 = {
//     nome: 'Maiara',
//     sobrenome: 'Mello',  
//     idade: 31
// };

// console.log(pessoa1.nome);// Acessando a propriedade nome do objeto pessoa1
// console.log(pessoa2.sobrenome);// Acessando a propriedade sobrenome do objeto pessoa2





// // Criando uma função para criar objetos
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }  

// const pessoa1 = criaPessoa('Erik', 'Mello', 32)
// const pessoa2 = criaPessoa('Maiara', 'Mello', 31)

// console.log(pessoa2.nome)

//Vou explicar com detlhes: Essa função criaPessoa recebe três parâmetros: nome, sobrenome e idade.
   // Dentro da função, um objeto é retornado usando a sintaxe de objeto literal.
   // As propriedades do objeto são definidas com os valores dos parâmetros recebidos.
   // Por exemplo, a propriedade nome do objeto é atribuída ao valor do parâmetro nome.
   // Isso permite criar objetos personalizados com diferentes valores para nome, sobrenome e idade cada vez que a função é chamada.







// // Podemos simplificar a criação do objeto quando a chave e o valor têm o mesmo nome

// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade}
// }  

// const pessoa1 = criaPessoa('Erik', 'Mello', 32)
// const pessoa2 = criaPessoa('Maiara', 'Mello', 31)

// console.log(pessoa2.nome)










// const pessoa1 = {
//     nome: 'Erik',
//     sobrenome: 'Mello',
//     idade: 32,

//     fala() {
//         console.log(`Olá mundo! Meu nome é ${this.nome} ${this.sobrenome} e minha idade é ${this.idade}`) // Usando template literals para inserir variáveis dentro de uma string
//     }
// };

// pessoa1.fala() // Chamando o método fala do objeto pessoa1





