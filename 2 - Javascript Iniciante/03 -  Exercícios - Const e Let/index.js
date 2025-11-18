/*  
Erik Mello tem 31 anos, pesa 75kg, tem 1.80m de altura e seu IMC é 23.148148148148145.
Nasceu em 1993
*/

const nome = 'Erik Mello';
const sobrenome = 'Mello';
const idade = 31;   
const peso = 75;
const altura = 1.80;

let imc = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 2025 - idade -1; // Considerando que o ano atual é 2025 e ainda não completou o aniversário este ano

console.log(`${nome} Nasceu em ${anoNascimento}, pesa ${peso} kg, tem  ${altura} m de altura e seu IMC é de ${imc}`);

