//16 - Exercícios com for

const elementos = [
    { tag: "p", texto: "Frase 1" }, // 0
    { tag: "div", texto: "Frase 2" }, // 1
    { tag: "section", texto: "Frase 3" }, // 2
    { tag: "footer", texto: "Frase 4" }, // 3              
];

const container = document.querySelector(".container")//seleciona a div com a classe container
const div = document.createElement("div")//cria uma div 

//agora vamos percorrer o array e criar os elementos dentro da div
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];//desestruturação do array para pegar a tag e o texto
    let tagCriada = document.createElement(tag);//cria o elemento com a tag do array
    tagCriada.innerText = texto; //adiciona o texto ao elemento criado
    div.appendChild(tagCriada);//adiciona o elemento criado à div
}

container.appendChild(div);//adiciona a div ao container






