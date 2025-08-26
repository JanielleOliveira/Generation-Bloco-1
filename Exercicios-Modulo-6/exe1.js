const rs = require('readline-sync');

let a, b, c;
let soma;

a = rs.questionInt("Digite o numero A: ");
b = rs.questionInt("Digite o numero B: ");
c = rs.questionInt("Digite o numero C: ");

soma = a + b;

if (a + b > c) {
    console.log("A Soma de A + B é Maior do que C");
} else if (a + b < c) {
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log("A Soma de A + B é Igual a C");
}




