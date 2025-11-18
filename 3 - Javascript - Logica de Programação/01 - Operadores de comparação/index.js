// 01 - Operadores de comparação
// > maior que
// >= maior ou igual a
// < menor que
// <= menor ou igual a
// == igualdade (valor) - não recomendado
// === igualdade estrita (valor e tipo)
// != diferente (valor) - não recomendado
// !== diferente estrito (valor e tipo)


// console.log(10 > 5); // 10 é maior que 5? true


const comp = 10>5;// true

console.log(comp);
console.log(10 >= 5); // 10 é maior ou igual a 5? true
console.log(10 < 5); // 10 é menor que 5? false
console.log(10 <= 5); // 10 é menor ou igual a 5? false
console.log(10 == '10'); // 10 é igual a '10'? true (valor)
console.log(10 === '10'); // 10 é igual a '10'? false (valor e tipo)
console.log(10 != '10'); // 10 é diferente de '10'? false (valor)
console.log(10 !== '10'); // 10 é diferente de '10'? true (valor e tipo)