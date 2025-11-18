// 09 - Objeto Date
// para usar o objeto date precisa começar com q palavra new

// A primeira letra de Date é maiúscula pq é um objeto nativo do JavaScript

// const data = new Date();// se n passar nenhum parâmetro ele pega a data e hora atual do sistema
// console.log(data.toString());// mostra a data completa com dia da semana, mês, ano, hora, fuso horário etc





// const data = new Date();
// console.log("Dia", data.getDate()); // Dessa forma temos o dia, e o numero do dia
// console.log("Mês", data.getMonth() + 1); // Mês começa do 0, então precisa somar +1 para mostrar o mês correto
// console.log("Ano", data.getFullYear());// Pega o ano com 4 dígitos
// console.log("Hora", data.getHours());// Pega a hora
// console.log("Min", data.getMinutes());//    Pega os minutos
// console.log("Seg", data.getSeconds());//   Pega os segundos
// console.log("Ms", data.getMilliseconds());// Pega os milissegundos
// console.log("Dia semana", data.getDay());// Pega o dia da semana, sendo 0 domingo, 1 segunda, 2 terça etc

// console.log(data.toString());
























// Criando uma data no padrão brasileiro dd/mm/aaaa 






//primeiro preciso criar uma função para zero à esquerda

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);






