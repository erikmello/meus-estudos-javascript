// Perfeito 👏 então vamos montar um desafio prático só com **objetos**, para treinar tudo que você viu na Aula 16.

// ---

// # 🎯 Desafio: Objeto Carro

// ## 🔹 O que você deve fazer

// 1. Criar um objeto chamado **`carro`**.

// 2. Esse objeto deve ter as seguintes **propriedades**:

//    * `marca` → string
//    * `modelo` → string
//    * `ano` → number
//    * `ligado` → boolean (começa como `false`)

// 3. Criar os seguintes **métodos** dentro do objeto:

//    * `ligar()` → altera `ligado` para `true` e mostra no console `"O carro está ligado."`
//    * `desligar()` → altera `ligado` para `false` e mostra `"O carro está desligado."`
//    * `status()` → mostra no console:

//      ```
//      Marca: Toyota
//      Modelo: Corolla
//      Ano: 2020
//      Ligado: true/false
//      ```

// ---

// ## 🔹 Exemplo de uso esperado

// ```javascript
// carro.ligar();    
// // O carro está ligado.

// carro.status();   
// // Marca: Toyota
// // Modelo: Corolla
// // Ano: 2020
// // Ligado: true

// carro.desligar(); 
// // O carro está desligado.
// ```

// ---

// 📌 Regras do desafio:

// * Use apenas conteúdos que já vimos até a Aula 16 (objetos, funções e `this`).
// * Você pode escolher a marca, modelo e ano que quiser.

const carro = {
    marca: 'Toyota',
    modelo: 'Supra',
    ano: 2000,
    ligado: false,

    ligar() {
        this.ligado = true
        console.log('O carro está ligado');
    },

    desligar() {
        this.ligado = false
        console.log('O carro está desligado');
    },

    status() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Ano: ${this.ano}
            Ligado: ${this.ligado}
        `);
    } 
}

carro.ligar()
carro.status()
carro.desligar()