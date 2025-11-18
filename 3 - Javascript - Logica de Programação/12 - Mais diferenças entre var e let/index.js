//12 - Mais diferenças entre var e let

// const verdadeira = true;

// // let tem escopo de bloco { ... bloco}
// // var só tem escopo de função

// let nome = "Erik" // criando
// var nome2 = "Mello"

// if (verdadeira) {
//     let = nome = "Maiara" // criando
//     // console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = "Outra coisa"
//         console.log(nome, nome2)    // outro exemplo onde foi possivel reatribuir.
//     }
// }

// 3 variaveis diferentes dentro do seu próprio bloco







//Usando var
const verdadeira = true;

// let tem escopo de bloco { ... bloco}
// var só tem escopo de função

let nome = "Erik" // criando
var nome2 = "Erik"

var nome2 = "Maiara" // Redeclarada
console.log(nome, nome2)

if (verdadeira) {
    let = nome = "Erik" // criando

    if (verdadeira) {
        let nome = "Outra coisa"
    }
}


//ChatGpt, pode adicionar mai exeplos e conceitos
// fale sobre 