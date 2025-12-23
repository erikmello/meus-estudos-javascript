/*Segue um desafio direto com funções em JavaScript para você resolver:

## Desafio principal

Crie uma função chamada `analisarNota` que receba uma nota de 0 a 10 e retorne uma mensagem de acordo com a regra:  

- Se a nota for menor que 4: `"Reprovado"`  
- Se a nota for de 4 até menor que 7: `"Recuperação"`  
- Se a nota for de 7 até 10: `"Aprovado"`  

Depois:
1. Chame a função pelo menos 5 vezes com valores diferentes (por exemplo: 2, 5.5, 7, 9.3, 10).
2. Mostre o resultado no console usando `console.log`.

Exemplo de uso esperado (não é para copiar, é só o formato da chamada):  
`console.log(analisarNota(8.5)) // deve mostrar "Aprovado"`

## Extras (se quiser deixar mais difícil)

- Validação: se a nota for menor que 0 ou maior que 10, retorne `"Nota inválida"`.  
- Crie outra função `mediaDeTresNotas(n1, n2, n3)` que use `analisarNota` internamente para dizer se o aluno foi aprovado pela média.  

Um quiz com 5 questões sobre funções em JavaScript também foi criado para você praticar os conceitos; ele foca em:
- Sintaxe de declaração de funções.  
- Diferença entre função declarada e função expressão.  
- Parâmetros e retorno.  
- Arrow functions.  
- Escopo básico de variáveis dentro de funções.   

Teste o código no navegador (console do devtools) ou em um editor online, e se quiser, cole sua solução aqui que corrijo e passo um desafio um pouco mais avançado.*/


function analisarNota(nota) {
    if (nota < 4) {
        return "Reprovado"
    } else if (nota < 7) {
        return "Recuperação"
    } else {
        return "Aprovado"
    }
}

console.log(analisarNota(5));
console.log(analisarNota(10));


