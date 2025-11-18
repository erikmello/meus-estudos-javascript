//09 - Mais sobre strings

// let umaString = "Um texto qualquer";
// let outraString = 'Um texto qualquer'; 
// //Aspas simples ou duplas, tanto faz

// console.log(umaString, outraString);

// let umaString = "Um \"texto\" qualquer";
// //O caractere de escape "\" serve para inserir caracteres especiais na string
// console.log(umaString);

// let umaString = "\\um texto";
// console.log(umaString); //Mostra: \um texto



//  //              01234567
// let umaString = "Um texto"; 

// console.log(umaString.indexOf("texto"));


//  //           01234567
// let umaString = "Um texto"; 
// console.log(umaString.replace("Um", "outra")); //Substitui a palavra "Um" por "outra"



// let umaString = "O rato roeu a roupa do rei de Roma."; 
// console.log(umaString.length); //Mostra o tamanho da string


//             //   0123456789  
// let umaString = "O rato roeu a roupa do rei de Roma."; 
// console.log(umaString.slice(2, 6)); //Mostra a string do caractere 2 ao 5 (o 6 não entra)



// let umaString = "O rato roeu a roupa do rei de Roma."; 
// console.log(umaString.split(" ")); //Separa a string em um array, usando o espaço como separador


// let umaString = "O rato roeu a roupa do rei de Roma."; 
// console.log(umaString.split("r")); //Separa a string em um array, usando a letra "r" como separador


// let umaString = "O rato roeu a roupa do rei de Roma."; 
// console.log(umaString.split("r", 2)); //Separa a string em um array, usando a letra "r" como separador, mas limita o array a 2 elementos



// let umaString = "O rato roeu a roupa do rei de Roma."; 
// console.log(umaString.split(" ", 3)); //Separa a string em um array, usando o espaço como separador, mas limita o array a 3 elementos


// let umaString = "O rato roeu a roupa do rei de Roma."; 
// console.log(umaString.toUpperCase()); //Mostra a string toda em maiúsculas