// 03 - Avaliação de Curto-Circuito (Short-Circuit)


// console.log('Erik Mello' && 0 && 'Maiara Maia'); 
// // Retorna 0, pois é o primeiro valor avaliado como falso (falsy)

// console.log('Erik Mello' && 'Maiara Maia' && 42); 
// // Retorna 42, pois todos os valores são verdadeiros (truthy) e é o último valor avaliado

// Em javascript tudo pode ser avaliado como verdadeiro (truthy) ou falso (falsy)

// false= literal. falsy= valor que é avaliado como falso

// Valores falsy: false, 0, -0, 0n, "", null, undefined, NaN

// Valores truthy: true, 1, -1, " ", [], {}, function(){} (todos os valores que não são falsy)

// function falaOi() {
//     return 'Oi';
// } // Função que retorna 'Oi'

// const vaiExecutar = false;

// vaiExecutar && console.log (falaOi());
// // Como vaiExecutar é falso (falsy), a função falaOi não será executada. Então vai ser curto-circuito e retornar false, que significa que nada será retornado.



// function falaOi() {
//     return 'Oi';
// } // Função que retorna 'Oi'

// const vaiExecutar = true; // Alterando para true (truthy)

// vaiExecutar && console.log (falaOi());
// // Como vaiExecutar é verdadeiro (truthy), a função falaOi será executada e retornará 'Oi'.


// console.log(0 || false || null || 'Erik Mello' || true);
// // Retorna 'Erik Mello', pois é o primeiro valor avaliado como verdadeiro (truthy)

// console.log(false || 0 || null);
// // Retorna null, pois todos os valores são falsos (falsy) e é o último valor avaliado


// const corUsuario = null;
// const corPadrao = corUsuario || 'Preto';

// console.log(corPadrao); 
// // Retorna 'Preto', pois corUsuario é null (falsy), então corPadrao recebe o valor 'Preto' (truthy)


// const corUsuario = 'Verde';
// const corPadrao = corUsuario || 'Preto';

// console.log(corPadrao);
// // Retorna 'Verde', pois corUsuario é 'Verde' (truthy), então corPadrao recebe o valor de corUsuario


const a = 0;
const b = null;
const c = 'false'; // String não vazia é avaliada como true (truthy) pegadinha
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
// Retorna 'false', pois é o primeiro valor avaliado como verdadeiro (truthy)