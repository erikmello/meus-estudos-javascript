//ieee 754-2008


// let num1 = 1  // number 
// let num2 = 2.5  // number

// console.log(num1.toString() + num2) // converte o número em string, mas a variavel continua sendo number, estou apenas convertendo para exibir. Não é soma está concatenando
// console.log(typeof num1) // number


// let num1 = 1500  
// let num2 = 2.5   

// console.log(num1.toString(2)); // converte o número em binário


// let num1 = 15.00987874
// let num2 = 2.5   

// console.log(num1.toFixed(2)); // limita o número de casas decimais, mas a variavel continua sendo number, estou apenas convertendo para exibir. Não é arredondamento é apenas exibição; 


// let num1 = 10.5;
// let num2 = 2.5;

// console.log(Number.isInteger(num1)); // verifica se o número é inteiro


// let num1 = 10.5;
// let num2 = 2.5;

// let temp = num1 * 'Ola'; 
// console.log(Number.isNaN(temp)); // verifica se o valor é NaN (Not a Number) se for retorna true, se não for retorna false


// let num1 = 0.7;
// let num2 = 0.1;

// console.log(num1 + num2); // 0.7999999999999999

// let num1 = 0.7;
// let num2 = 0.1;

// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0

// num1 = num1.toFixed(2); // limita o número de casas decimais, mas a variavel continua sendo number, estou apenas convertendo para exibir. Não é arredondamento é apenas exibição;

// console.log(num1); // todo esse codigo para chegar em 1.00
// console.log(Number.isInteger(num1)); // false, ou seja, não é inteiro


// let num1 = 0.7;
// let num2 = 0.1;

// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0

// num1 = parseFloat(num1.toFixed(2));// limita o número de casas decimais e converte para float
// console.log(num1); 
// console.log(Number.isInteger(num1)); // true, ou seja, é inteiro. ahh agora sim


// let num1 = 0.7;
// let num2 = 0.1;

// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0

// num1 = Number(num1.toFixed(2));// usando number também funciona, limita o número de casas decimais e converte para number
// console.log(num1); 
// console.log(Number.isInteger(num1)); // true, ou seja, é inteiro. ahh agora sim



// let num1 = 0.7;
// let num2 = 0.1;

// num1 = ((num1 * 100) + (num2 * 100)) / 100 // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100 // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100 // 1.0
// //Dessa forma é mais complexa, porém também funciona, multiplicando por 100 para trabalhar com números inteiros e depois dividindo por 100 para voltar ao valor original

// console.log(num1); 
// console.log(Number.isInteger(num1)); // verifica se é inteiro, no caso se for retorna true, se não for retorna false