//Switch/Case


// const data = new Date("1987-04-21 00:00:00");
// const diaSemana = data.getDay();
// let diaSemanaTexto;

// if (diaSemana === 0) {
//     diaSemanaTexto = "Domingo";
// } else if (diaSemana === 1) {
//     diaSemanaTexto = "Segunda-feira";
// } else if (diaSemana === 2) {
//     diaSemanaTexto = "Terça-feira";
// } else if (diaSemana === 3) {
//     diaSemanaTexto = "Quarta-feira";
// } else if (diaSemana === 4) {
//     diaSemanaTexto = "Quinta-feira";
// } else if (diaSemana === 5) {
//     diaSemanaTexto = "Sexta-feira";
// } else if (diaSemana === 6) {
//     diaSemanaTexto = "Sábado";
// } else {
//     diaSemanaTexto = "";
// }
//Esse é um exemplo sem o uso do switch/case







/**


Então sempre que você tiver uma variável que você vai ficar checando olha essa variável é igual isso.

Essa variável é igual a aquilo.

Essa variável é igual àquele outro.

Sempre que você tiver essa peça esse tipo de checagem que você tiver fazendo com if você pode.

Se você quiser modificar pra um switch aqui que seria esse caso aqui.
 */



//Usando switch/case

// Ele serve para fazer várias comparações de uma forma mais simples


// const data = new Date("1993-09-10 00:00:00");
// const diaSemana = data.getDay();
// let diaSemanaTexto;

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = "Domingo";
//         break;
//     case 1:
//         diaSemanaTexto = "Segunda-feira";
//         break;
//     case 2:
//         diaSemanaTexto = "Terça-feira";
//         break;
//     case 3:
//         diaSemanaTexto = "Quarta-feira";
//         break;
//     case 4:
//         diaSemanaTexto = "Quinta-feira";
//         break;
//     case 5:
//         diaSemanaTexto = "Sexta-feira";
//         break;
//     case 6:
//         diaSemanaTexto = "Sábado";
//         break;
//     default:
//         diaSemanaTexto = "";
//     //Default tem a mesma função do else em um if/else
// }
// console.log(diaSemana, diaSemanaTexto);




function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
    }
}
//nAO PRECISO MAIS DOS BREAKS POIS JA ESTOU USANDO O RETURN,POIS O RETURN JA FINALIZA A FUNCAO QUANDO ENCONTRA ELE



const data = new Date("1987-04-21 00:00:00");
const diaSemana = data.getDay();

console.log(diaSemana, getDiaSemanaTexto(diaSemana));