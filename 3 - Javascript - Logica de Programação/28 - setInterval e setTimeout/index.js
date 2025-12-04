//28 - setInterval e setTimeout
//Essa função mostra a hora atual no console a cada segundo

// A função setInterval() executa uma função a cada determinado intervalo de tempo.


// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString("pt-BR", {
//         hour12: false
//     });
// }

// function funcDoIntervalo() {
//     console.log(mostraHora())
// } // Criei outra função pois a função setInterval() não aceita parâmetros diretos.

// setInterval(funcDoIntervalo, 1000) // A função setInterval() executa a função funcDoIntervalo() a cada 1000 milissegundos (1 segundo). Ou seja a função funcDoIntervalo() chama a função mostraHora() a cada segundo.




// O mesmo codigo agora usando uma função anonima
// function mostraHora() {
//     let data = new Date();

//     return data.toLocaleTimeString("pt-BR", {
//         hour12: false
//     });
// }

// function funcDoIntervalo() {
//     console.log(mostraHora())
// }

// setInterval(function () {
//     console.log(mostraHora())
// }, 1000); // Explicando a função anonima: A função anonima é uma função sem nome. Nesse caso, a função anonima é passada como argumento para a função setInterval(). A função anonima é executada a cada 1000 milissegundos (1 segundo).





//Utilizando o setTimeout()
// O setTimeout() executa uma função uma única vez após um determinado intervalo de tempo.
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}

function funcDoIntervalo() {
    console.log(mostraHora())
}

// //Colocando dentro de uma variável
const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 5000); // a função setTimeout() para depois que 5000 milissegundos (5 segundos) passarem.

setTimeout(function () {
    console.log("O intervalo foi parado")
}, 7000);