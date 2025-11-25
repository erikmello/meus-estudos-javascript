// Break e Continue
//Fucionam dentro de loops (for, while, etc)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of numeros) {

//     if (numero === 2 ) {
//         continue; // Pula a iteração atual quando o número for 2 e vai para a próxima
//     }

//     console.log(numero);
// }  








//Outro exemplo Continue
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numero of numeros) {
//     if (numero === 2 || numero === 5) {
//         console.log('Pulei o número ' + numero);
//         continue;
//     }

//     console.log(numero);
// }










// exemplo Break
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        console.log('Pulei o número ' + numero);
        continue;
    }  // Explicação do continue: Pula a iteração atual quando o número for 2 ou 5 e vai para a próxima



    console.log(numero);
    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // Sai do loop quando o número for 7
    }  // Explicação do break: Interrompe completamente o loop quando o número for 7

}