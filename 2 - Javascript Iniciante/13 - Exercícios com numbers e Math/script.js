// Aula exemplo de manipulação do DOM com numbers e Math
// const numero = Number (prompt('Digite um número:'));
// const numeroTitulo = document.getElementById("numero-titulo");
// const texto = document.getElementById("texto");

// numeroTitulo.innerHTML = numero;
// texto.innerHTML = `<p>Seu número + 2 é ${numero + 2} </p>`; 


/* 
Exercício
Raiz quadrada: 7.429586495895986
55.1987555 é inteiro: false
è NaN: false
Arredondando para baixo: 55
Arredondando para cima: 56
Com duas casas decimais: 55.20
*/

const numero = Number (prompt('Digite um número:'));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = ""    //Zera o conteúdo do elemento
texto.innerHTML += `<p>Raiz quadrada:${numero**0.5} </p>`  // Essa linha de codigo significa que  o numero elevado a 0.5 é igual a raiz quadrada
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>` // Essa linha de codigo significa que o numero é inteiro
texto.innerHTML += `<p>O numero ${numero} é ${Number.isNaN(numero)}</p>` // Essa linha de codigo significa que o numero é NaN (Not a Number), ou seja, não é um número
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>` // Essa linha de codigo significa que o numero arredondado para baixo é igual a Math.floor ou seja, arredonda para o menor número inteiro
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>` // Essa linha de codigo significa que o numero arredondado para cima é igual a Math.ceil ou seja, arredonda para o maior número inteiro
texto.innerHTML += `<p>Com duas casas decimais: ${parseFloat(numero.toFixed(2))}</p>` // Essa linha de codigo significa que o numero com duas casas decimais é igual a parseFloat(numero.toFixed(2)), ou seja, o toFixed limita o número de casas decimais e o parseFloat transforma a string em número novamente


// += significa "adiciona"