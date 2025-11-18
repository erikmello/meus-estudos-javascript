// <!-- 18 - Exercício para função, array e objetos -->

// alert("Exercício para função, array e objetos"); //teste se o código está funcionando



// let nome = 'Erik'; //escopo global



// function meuEscopo () {
//     let nome = 'Erik'; //escopo local, dessa forma nada que esta denytro da função interfere no escopo global, se tive outra variável com o mesmo nome não irá interferir pois está em escopos diferentes
// }




// function meuEscopo () {
//     const form = document.querySelector('.form'); //seleciona o formulário, selecioa classe 'form'

//     // form.onsubmit = function (event) {
//     //     event.preventDefault(); //previne o comportamento padrão do formulário que é enviar os dados e recarregar a página
//     //     alert("Teste Alert") 
//     //     console.log("Foi enviado"); //teste se o formulário está sendo enviado
//     // };

//     let contador = 1; //contador para saber quantas vezes o formulário foi enviado
//     function recebeEventoForm (evento) {
//         evento.preventDefault(); //previne o comportamento padrão do formulário que é enviar os dados e recarregar a página
//         console.log(`Formulário não enviado ${contador}`); //teste se o formulário está sendo enviado
//         contador++; //incrementa o contador
//     }

//     form.addEventListener('submit', recebeEventoForm); //adiciona um evento de escuta ao formulário, quando o formulário for enviado, a função recebeEventoForm será chamada)
// }
// meuEscopo(); 






function meuEscopo () {
    const form = document.querySelector('.form'); //seleciona o formulário, selecioa classe 'form'
    const resultado = document.querySelector('.resultado'); //seleciona a div com a classe 'resultado'
    
    const pessoas = []; //array vazio para armazenar os dados das pessoas

    function recebeEventoForm (evento) {
        evento.preventDefault(); //previne o comportamento padrão do formulário que é enviar os dados e recarregar a página
        const nome = form.querySelector('.nome') //seleciona o input com a classe 'nome' dentro do formulário
        const sobrenome = form.querySelector('.sobrenome') //seleciona o input com a classe 'sobrenome' dentro do formulário
        const peso = form.querySelector('.peso') //seleciona o input com a classe 'peso' dentro do formulário
        const altura = form.querySelector('.altura') //seleciona o input com a classe 'altura' dentro do formulário

        //adiciona um objeto com os dados da pessoa ao array pessoas
        pessoas.push ({
            nome: nome.value, //pega o valor do input nome
            sobrenome: sobrenome.value, //pega o valor do input sobrenome
            peso: peso.value, //pega o valor do input peso
            altura: altura.value //pega o valor do input altura
        })
        
        console.log(pessoas); //exibe o array pessoas no console

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>` //adiciona os dados da pessoa na div resultado
    }

    form.addEventListener('submit', recebeEventoForm); //adiciona um evento de escuta ao formulário, quando o formulário for enviado, a função recebeEventoForm será chamada)
}
meuEscopo(); 