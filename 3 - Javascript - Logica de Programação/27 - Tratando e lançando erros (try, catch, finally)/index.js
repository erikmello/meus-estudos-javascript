//27 - Tratando e lançando erros (try, catch, finally)

// try {
//     //É executado quando não há erros
// } catch (e) {
//     //É executado quando há erros
// } finally {
//     //Sempre é executado
// }


// try {
//     console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }





// try {
//     console.log(a); // Adicionando um erro proposital
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
// } catch (e) {
//     console.log('Tratando o erro'); // Retorna "Tratando o erro"
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }
// // Retorna:
// // Tratando o erro
// // FINALLY: Eu sempre sou executado






// function retornaHora(data) {
//     if (!(data instanceof Date)) {
//         console.log("Não é")
//     }
// }
// retornaHora("Teste") // Retorna "Não é";
// retornaHora(123) // Retorna "Não é";
// retornaHora(new Date()) // Não retorna nada, pois é uma data válida ou seja, uma instância de Date.
// //Significado de instancia: Quando criamos um objeto a partir de uma classe, dizemos que esse objeto é uma instância daquela classe. Por exemplo, se temos uma classe chamada "Carro" e criamos um objeto chamado "meuCarro" a partir dessa classe, podemos dizer que "meuCarro" é uma instância da classe "Carro".








//lançando um erro
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

try {
    const data = new Date("01-01-1970 12:58:12");
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //Tratar erro
    // console.log(e)
} finally {
    console.log("Tenha um bom dia!")
}