// 20 - Exercícios com NodeList (Browser)

//Desafio, colocar a cor do fundo do Body no Paragrafo

const paragrafos = document.querySelector(".paragrafos");

const ps = paragrafos.querySelectorAll("p");


const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = "white"
}


