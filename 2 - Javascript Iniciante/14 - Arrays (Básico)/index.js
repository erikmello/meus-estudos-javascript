//Arrays (Básico)

// const alunos = "Luiz, Maria, João"; // String, dessa forma não conseguimos manipular os dados





// //                0      1      2
// const alunos = ["Luiz", "Maria", "João"]; // Array, dessa forma conseguimos manipular os dados
// // Os Arrays sao indexados por elementos, começando do 0
// console.log(alunos[1]); // Acessando o elemento 1 do Array


// //                0      1      2
// const alunos = ["Luiz", "Maria", "João"];

// alunos[1] = "Maiara" // Alterando o elemento 1 do Array, dessa forma conseguimos alterar o valor do elemento
// console.log(alunos);



// //                0      1      2
// const alunos = ["Luiz", "Maria", "João"];

// alunos[1] = "Maiara"
// alunos[3] = "Luana" // Adicionando um novo elemento no Array, dessa forma conseguimos adicionar um novo elemento
// console.log(alunos);






// //                0      1      2
// const alunos = ["Luiz", "Maria", "João"];
// alunos[alunos.length] = "Luiza"
// alunos[alunos.length] = "Eduardo"
// alunos[alunos.length] = "Luana"
// alunos[alunos.length] = "Erik"// Adicionando um novo elemento no Array, dessa forma conseguimos adicionar um novo elemento
// console.log(alunos.length); // length é uma propriedade que retorna o tamanho do Array



// //                0      1      2
// const alunos = ["Luiz", "Maria", "João"];

// alunos.push("Luiza") // Adiciona um elemento no final do Array
// alunos.push("Eduardo") // Adiciona um elemento no final do Array
// alunos.push("Luana") // Adiciona um elemento no final do Array
// alunos.push("Erik") // Adiciona um elemento no final do Array

// console.log(alunos)


// //                0      1      2
// const alunos = ["Luiz", "Maria", "João"];
// alunos.unshift("Erik") // Adiciona um elemento no começo do Array
// alunos.unshift("Luana") // Adiciona um elemento no começo do Array
// console.log(alunos)

// //                0      1      2
// const alunos = ["Luiz", "Maria", "João"];
// alunos.pop(1) // Remove o último elemento do Array
// console.log(alunos)

// // //                0      1      2
// const alunos = ["Luiz", "Maria", "João"];
// alunos.pop(1) // Remove o último elemento do Array
// const removido = alunos.pop() //recebe o valor removido
// console.log(removido) //mostra o valor removido
// console.log(alunos) // mostra o Array atualizado



// const alunos = ["Luiz", "Maria", "João"];
// alunos.shift()// Remove o primeiro elemento do Array
// console.log(alunos)


// // //                0      1      2          3      4
// const alunos = ["Luiz", "Maria", "João"]; //Luiza, Eduardo
// alunos.push("Luiza") // Adiciona um elemento no final do Array
// alunos.push("Eduardo") // Adiciona um elemento no final do Array
// console.log(alunos.slice(0,2)) // Mostra os elementos do Array do índice 0 ao 2 (não inclui o índice 2)



// //                0      1      2          3      4
// const alunos = ["Luiz", "Maria", "João"]; //Luiza, Eduardo
// alunos.push("Luiza") // Adiciona um elemento no final do Array
// alunos.push("Eduardo") // Adiciona um elemento no final do Array
// console.log(alunos.slice(0,2)) // Mostra os elementos do Array do índice 0 ao 2 (não inclui o índice 2)




// // //                0      1      2          3      4
// const alunos = ["Luiz", "Maria", "João"]; //Luiza, Eduardo
// alunos.push("Luiza") // Adiciona um elemento no final do Array
// alunos.push("Eduardo") // Adiciona um elemento no final do Array
// console.log(alunos.slice(0,-1)) // Mostra os elementos do Array do índice 0 ao -1 (não inclui o índice -1, ou seja, o último elemento)



// // //                0      1      2          3      4
// const alunos = ["Luiz", "Maria", "João"]; //Luiza, Eduardo

// console.log(typeof alunos) // Mostra o tipo do Array, que é um objeto pois Arrays são um tipo especial de objeto em JavaScript

// // //                0      1      2          3      4
// const alunos = ["Luiz", "Maria", "João"]; //Luiza, Eduardo

// console.log(alunos instanceof Array) // Verifica se a variável é um Array, retornando true ou false