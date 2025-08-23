const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;

console.log("Digite suas notas: ");
nota1 = leia.questionFloat("Nota 1: ", nota1);
nota2 = leia.questionFloat("Nota 2: ", nota2);
nota3 = leia.questionFloat("Nota 3: ", nota3);
nota4 = leia.questionFloat("Nota 4: ", nota4);

let mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;

console.log("Media final: " + parseFloat(mediaFinal.toFixed(1)));

