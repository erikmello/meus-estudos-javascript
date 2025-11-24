// Criando roleta russa simples com while e do while

// Função para gerar número aleatório entre 1 e 6
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let bala = random(1, 6); // Posição da bala
let tentativa = 0;
let tiro = 0;

console.log(`Bala está na posição: ${bala}`);
// Enquanto o tiro não for igual a bala, continua atirando
while (tiro !== bala) {
    tiro = random(1, 6);
    tentativa++;
    console.log(`Tentativa ${tentativa}: Atirou na posição ${tiro}`);
}
if (tiro === bala) {
    console.log(`BANG! Você foi atingido na tentativa ${tentativa}.`);
} else {
    console.log("Você sobreviveu!");
}
// Explicação: Neste código, simulamos uma roleta russa onde uma bala está em uma das seis posições. Usamos um loop while para continuar "atirando" até que a posição do tiro coincida com a posição da bala. Cada tentativa é registrada, e quando o tiro atinge a bala, o jogo termina com uma mensagem de "BANG!".