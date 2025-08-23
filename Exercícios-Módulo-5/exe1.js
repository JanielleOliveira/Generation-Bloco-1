const leia = require('readline-sync');

let salario;
let abono;

salario = leia.questionFloat("Digite o valor do salario: R$ ");
console.log(salario);
abono = leia.questionFloat("Digite o abono: R$ ");
console.log(abono);

let novoSalario = salario + abono;

console.log("Novo salario: " + novoSalario);