const rs = require('readline-sync');

let codigo = rs.questionInt("Digite o codigo do produto (1 a 6): ");
let quantidade = rs.questionInt("Digite a quantidade: ");

let produto;
let preco;

switch (codigo) {
    case 1:
        produto = "Cachorro-Quente";
        preco = 10.00;
        break;
    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;
    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;
    default:
        console.log("Código inválido!");
        process.exit(); 
}

let valorTotal = quantidade * preco;

console.log("Produto: " + produto);
console.log("Valor total: R$ " + valorTotal.toFixed(2));
