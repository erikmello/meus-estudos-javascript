// 05 - if, else if e else (2)

// quando a gente tem mais de uma condicao para verificar utilizamos o else if

const numero = 10

if (numero >= 0 && numero <= 5) {
    console.log('O numero está entre 0 e 5')
}
else if (numero >= 6 && numero <= 8) {
    console.log('O numero entao entre 6 e 8')
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero está entre 9 e 11') // verdadeiro
} else {
    console.log('O numero nao está entre 0 e 11')
}