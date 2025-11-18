const nome = 'Erick' // String
const nome1 = 'Maiara' // String
const nome2 = 'Caio' // String

const num1 = 10 // Number
const num2 = 10.52 // Number

let nomeAluno // undefined, pois não foi atribuído um valor. Nao aponta local nenhum na memória
const sobrenomeAluno = null // Nulo, não aponta para nenhum local na memória

const boolean = true // Boolean, verdadeiro ou falso
const boolean2 = false // Boolean, verdadeiro ou falso

console.log(typeof nome, typeof num1, typeof nomeAluno, typeof sobrenomeAluno, typeof boolean, typeof boolean2);


const a = [1, 2]
const b = a // b aponta para o mesmo local na memória que a
console.log(a, b);