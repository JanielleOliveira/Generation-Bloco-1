const rs = require('readline-sync');

let nome = rs.question("Nome do colaborador: ");
let codigo = rs.questionInt("Digite o codigo do cargo (1 a 6): ");
let salario = rs.questionFloat("Digite o valor do salario: R$ ");

let cargo;
let percentual;

switch (codigo) {
    case 1:
        cargo = "Gerente"
        percentual = 10/100;
        break;
    case 2:
        cargo = "Vendedor";
        percentual = 7/100;
        break;
    case 3:
        cargo = "Supervisor"
        percentual = 9/100;
        break;
    case 4:
        cargo = " Motorista";
        percentual = 6/100;
        break;
    case 5:
        cargo = "Estoquista";
        percentual = 5/100;
        break;
    case 6:
        cargo = "Tecnico de TI";
        percentual = 8/100;
        break;
    default:
        console.log("Código inválido!");
        process.exit();
}

let novoSalario = salario + (percentual * salario);

console.log("Nome do colaborador: " + nome);
console.log("Cargo: " + cargo);
console.log("Salario: R$ " + novoSalario.toFixed(2));

