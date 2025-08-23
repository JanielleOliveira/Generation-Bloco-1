const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;

console.log("Digite quatro valores: ");

n1 = leia.questionFloat(n1);
n2 = leia.questionFloat(n2);
n3 = leia.questionFloat(n3);
n4 = leia.questionFloat(n4);

let calculo = (n1 * n2) - (n3 * n4);

console.log("Diferenca: " + calculo.toFixed(1));


