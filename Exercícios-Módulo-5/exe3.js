const leia = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;

salarioBruto = leia.questionFloat("Salario Bruto: ", salarioBruto);
adicionalNoturno = leia.questionFloat("Adicional Noturno: ", adicionalNoturno);
horasExtras = leia.questionFloat("Horas Extras: ", horasExtras);
descontos = leia.questionFloat("Descontos: ", descontos);

let salarioLiquido = salarioBruto + adicionalNoturno + ( horasExtras * 5) - descontos;

console.log("Salario Liquido: " + salarioLiquido.toFixed(2));


