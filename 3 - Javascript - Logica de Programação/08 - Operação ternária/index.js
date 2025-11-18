// 08 - Operação ternária
//? :

//Isso pode substituir partes de if e else onde temos apenas duas possibilidades
//Exemplo:  


// const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//     console.log("Usuário VIP");
// } else {
//     console.log("Usuário normal");
// } //Assim seria a forma tradicional de fazer



//Agora com a operação ternária:

//(condicao) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario); //Aqui temos a operação ternária que faz a mesma coisa que o if e else acima, mas de forma mais simples e direta.





//Podemos usar também para fazer atribuições:
const corUsuario = null;
const corPadrao = corUsuario || "Preto"; //Aqui usamos o operador lógico OU (||) para definir uma cor padrão caso corUsuario seja null ou undefined
console.log(corPadrao); //Resultado: Preto