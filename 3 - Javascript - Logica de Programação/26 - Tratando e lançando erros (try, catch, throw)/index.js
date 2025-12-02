//26 - Tratando e lançando erros (try, catch, throw)


// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto não existe');
// }

// //Explicação: Este código tenta acessar uma variável que não foi definida, o que gera um erro. O bloco try captura esse erro e o bloco catch lida com ele, exibindo uma mensagem personalizada em vez de deixar o programa falhar.





// //  Explicando o uso de throw: O throw é usado para lançar erros personalizados. No exemplo abaixo, a função soma verifica se os argumentos são números e lança um erro se não forem.
// function soma(x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         throw ("x e y precisam ser números.")
//     }

//     return x + y;
// } // Explicação: A função soma verifica se os argumentos fornecidos são números. Se algum dos argumentos não for um número, ela lança um erro com uma mensagem personalizada. Caso contrário, retorna a soma dos dois números.

// console.log(soma(1, 2)); // 3   
// console.log(soma("1", 2));// Aqui a função lança um erro porque "1" é uma string, não um número.






//Tratar o erro lançado pela função soma usando try e catch
function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x e y precisam ser números.")
    }

    return x + y;
}
try {
    console.log(soma(1, 2));
    console.log(soma("1", 2))
} catch (err) {
    // console.log(err); // É importante não expor erros técnicos ao usuário final.
    console.log("Alguma coisa mais amigável para o usuário final.")
}

// Explicação: Neste exemplo, a função soma lança um erro se os argumentos não forem números. O bloco try tenta chamar a função com argumentos válidos e inválidos. Quando o erro é lançado, o bloco catch captura o erro e exibe uma mensagem amigável para o usuário final, em vez de mostrar o erro técnico.



//Resumo e sintese:
// try: Usado para envolver o código que pode gerar um erro.
// catch: Usado para capturar e lidar com erros lançados no bloco try.
// throw: Usado para lançar erros personalizados quando certas condições não são atendidas.


