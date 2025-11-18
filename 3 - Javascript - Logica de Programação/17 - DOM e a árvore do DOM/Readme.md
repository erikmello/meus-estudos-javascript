# Guia Iniciante: Manipulação do DOM com JavaScript

## O que é o DOM?

O DOM (Document Object Model) é uma representação em árvore da estrutura HTML de uma página web. Ele permite que você use JavaScript para acessar, modificar, adicionar ou remover elementos e estilos de uma página dinamicamente. O DOM não faz parte da linguagem JavaScript em si, mas é uma API Web que permite a interação com documentos HTML.[1][2][3][4][5]

## Selecionando Elementos

Antes de manipular elementos, você precisa selecioná-los. Existem várias formas de fazer isso:

### getElementById()

Seleciona um elemento pelo seu ID único. É o método mais rápido para acessar um elemento específico.[6][7][8]

```javascript
const titulo = document.getElementById("titulo");
console.log(titulo.textContent);
```

### querySelector()

Usa seletores CSS para encontrar o primeiro elemento que corresponde ao seletor. Aceita qualquer seletor CSS válido (classes, IDs, tags, atributos).[2][7][6]

```javascript
// Selecionar por classe
const botao = document.querySelector(".btn-principal");

// Selecionar por tag
const paragrafo = document.querySelector("p");

// Selecionar por ID
const cabecalho = document.querySelector("#cabecalho");
```

### querySelectorAll()

Retorna todos os elementos que correspondem ao seletor CSS especificado.[9][2]

```javascript
const todosParagrafos = document.querySelectorAll("p");
const itensMenu = document.querySelectorAll(".menu-item");
```

**Diferença entre getElementById e querySelector**: `getElementById()` é mais rápido porque busca apenas por IDs, enquanto `querySelector()` é mais versátil mas pode ser um pouco mais lento.[10][7][6]

## Modificando Conteúdo

### textContent

Retorna ou define apenas o texto de um elemento, ignorando todas as tags HTML. Não considera estilos CSS e é mais performático.[11][12][13]

```javascript
const paragrafo = document.getElementById("meuParagrafo");

// Ler conteúdo
console.log(paragrafo.textContent);

// Modificar conteúdo
paragrafo.textContent = "Novo texto aqui";
```

### innerHTML

Retorna ou define o conteúdo HTML completo de um elemento, incluindo tags. Permite inserir HTML formatado.[14][12][11]

```javascript
const container = document.getElementById("container");

// Adicionar HTML
container.innerHTML = "<strong>Texto em negrito</strong>";

// Adicionar lista
container.innerHTML = `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
`;
```

**Importante**: Use `textContent` quando trabalhar apenas com texto simples, pois é mais seguro e performático. Use `innerHTML` quando precisar inserir HTML formatado.[12][15][11]

## Manipulando Estilos CSS

### Propriedade style

Permite modificar estilos CSS inline diretamente.[3][16][17][18]

```javascript
const elemento = document.getElementById("caixa");

// Modificar uma propriedade
elemento.style.color = "blue";
elemento.style.backgroundColor = "yellow";
elemento.style.fontSize = "20px";

// Múltiplas propriedades
elemento.style.cssText = "color: red; font-size: 24px; margin: 10px;";
```

**Nota**: Em JavaScript, propriedades CSS com hífen (como `background-color`) são escritas em camelCase (`backgroundColor`).[16][17]

### classList

Gerencia classes CSS de forma mais eficiente.[19][20][9][14]

```javascript
const elemento = document.querySelector(".caixa");

// Adicionar classe
elemento.classList.add("destaque");

// Adicionar múltiplas classes
elemento.classList.add("ativo", "visivel");

// Remover classe
elemento.classList.remove("destaque");

// Alternar classe (toggle)
elemento.classList.toggle("ativo"); // adiciona se não existir, remove se existir

// Verificar se tem classe
if (elemento.classList.contains("ativo")) {
  console.log("Elemento está ativo");
}

// Substituir classe
elemento.classList.replace("antiga", "nova");
```

## Criando e Adicionando Elementos

### createElement()

Cria um novo elemento HTML.[4][21][2][14]

```javascript
// Criar novo elemento
const novaDiv = document.createElement("div");
novaDiv.textContent = "Sou uma nova div";

// Criar parágrafo
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo parágrafo criado dinamicamente";
```

### appendChild()

Adiciona um elemento como último filho de um elemento pai.[22][23][2][4]

```javascript
// Criar elemento
const novoItem = document.createElement("li");
novoItem.textContent = "Novo item da lista";

// Adicionar ao DOM
const lista = document.querySelector("ul");
lista.appendChild(novoItem);
```

**Exemplo completo de criação de imagem**:[22]

```javascript
// Criar elemento img
const logo = document.createElement("img");
logo.src = "img/logo.png";
logo.alt = "Logo do site";

// Adicionar ao container
const container = document.getElementById("logo");
container.appendChild(logo);
```

## Manipulando Atributos

### setAttribute() e getAttribute()

Permitem definir e obter valores de atributos.[24][25][26]

```javascript
const imagem = document.querySelector("img");

// Definir atributo
imagem.setAttribute("src", "nova-imagem.jpg");
imagem.setAttribute("alt", "Descrição da imagem");
imagem.setAttribute("width", "300");

// Obter atributo
const srcAtual = imagem.getAttribute("src");
console.log(srcAtual);

// Verificar se tem atributo
const temAlt = imagem.hasAttribute("alt");
```

**Propriedades diretas vs setAttribute**: Para atributos padrão, você pode usar propriedades diretas. Para atributos personalizados (como `data-*` ou `aria-*`), use `setAttribute()`.[24]

```javascript
// Forma direta (para atributos padrão)
imagem.src = "imagem.jpg";
imagem.id = "minhaImagem";

// setAttribute (para atributos personalizados)
elemento.setAttribute("data-id", "123");
elemento.setAttribute("aria-label", "Descrição");
```

## Eventos

### addEventListener()

Permite executar código quando eventos específicos ocorrem.[27][28][29][3]

```javascript
const botao = document.querySelector("#meuBotao");

// Evento de clique
botao.addEventListener("click", function () {
  alert("Botão clicado!");
});

// Com arrow function
botao.addEventListener("click", () => {
  console.log("Clique detectado");
});
```

**Eventos comuns**:

- `click` - quando o elemento é clicado
- `mouseover` - quando o mouse passa sobre o elemento
- `mouseout` - quando o mouse sai do elemento
- `keypress` - quando uma tecla é pressionada
- `submit` - quando um formulário é enviado
- `blur` - quando um elemento perde o foco
- `focus` - quando um elemento ganha o foco

**Exemplo com parâmetro de evento**:[28]

```javascript
botao.addEventListener("click", (evento) => {
  console.log(evento.target.id); // ID do elemento clicado
  console.log(evento.type); // Tipo do evento ('click')
});
```

**Exemplo prático - Alternar visibilidade**:[28]

```javascript
const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.classList.toggle("visivel");
});
```

## Removendo Elementos

```javascript
const elemento = document.getElementById("itemParaRemover");

// Remover elemento
elemento.remove();

// Ou usando o pai
const pai = elemento.parentElement;
pai.removeChild(elemento);
```

## Exemplo Prático Completo

Vamos criar um exemplo que combina vários conceitos:

```javascript
// HTML necessário:
// <div id="app"></div>
// <button id="adicionar">Adicionar Item</button>

const app = document.getElementById("app");
const botaoAdicionar = document.getElementById("adicionar");
let contador = 1;

botaoAdicionar.addEventListener("click", () => {
  // Criar nova div
  const novoItem = document.createElement("div");
  novoItem.classList.add("item");

  // Adicionar conteúdo
  novoItem.innerHTML = `
    <h3>Item ${contador}</h3>
    <p>Criado dinamicamente</p>
  `;

  // Adicionar estilo
  novoItem.style.padding = "10px";
  novoItem.style.margin = "5px";
  novoItem.style.backgroundColor = "#f0f0f0";

  // Adicionar ao DOM
  app.appendChild(novoItem);

  // Incrementar contador
  contador++;

  // Evento de clique no item
  novoItem.addEventListener("click", function () {
    this.classList.toggle("ativo");
    this.style.backgroundColor = this.classList.contains("ativo")
      ? "#4CAF50"
      : "#f0f0f0";
  });
});
```

## Boas Práticas

**Performance**: Minimize acessos ao DOM. Armazene referências em variáveis quando precisar usar o mesmo elemento várias vezes.[9]

```javascript
// Menos eficiente
document.getElementById("elemento").style.color = "red";
document.getElementById("elemento").style.fontSize = "20px";
document.getElementById("elemento").classList.add("ativo");

// Mais eficiente
const elemento = document.getElementById("elemento");
elemento.style.color = "red";
elemento.style.fontSize = "20px";
elemento.classList.add("ativo");
```

**Segurança**: Prefira `textContent` ao invés de `innerHTML` quando trabalhar com texto simples, para evitar vulnerabilidades de injeção de código.[15][13][11]

**Organização**: Use `classList` ao invés de manipular `style` diretamente sempre que possível, pois mantém separação entre lógica e apresentação.[14][9]
