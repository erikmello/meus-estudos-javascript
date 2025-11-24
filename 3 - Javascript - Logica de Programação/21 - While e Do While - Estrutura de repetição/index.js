// 21 - While e Do While - Estrutura de repetição

// let controle = 0;

// while (controle <= 10) {
//     console.log(controle);
//     controle++;
// }

// console.log("Segue a vida...")




//array - so para fins de exemplo, pois poderiamos utilizar com o for
// let nome = "Erik";

// let controle = 0;

// while (controle < nome.length) {
//     console.log(nome[controle]);
//     controle++;
// }

// console.log("Segue a vida...")



//Criei uma condição para gerar um numero aleatorio entre 1 e 50
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

let rand = random(1, 50);

//Condição até achar o numero 10
while (rand === 10) {
    console.log(rand);
    rand = random(1, 50);
}
console.log(`Número 10 encontrado, saindo... ${rand}`);



console.log("--------------");
//Do While
let controle = 0;

do {
    console.log(controle);
    controle++;
} while (controle <= 10);

console.log("Segue a vida...")


// Explicação completa: A estrutura do "do while" garante que o bloco de código dentro do "do" seja executado pelo menos uma vez, mesmo que a condição no "while" seja falsa desde o início. Após a execução do bloco, a condição é verificada; se for verdadeira, o loop continua, caso contrário, ele termina.











