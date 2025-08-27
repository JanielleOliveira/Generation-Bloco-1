const rs = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]; 

let numero = rs.questionInt("Digite o numero que voce deseja encontrar: "); 

let encontrado = false; 

for (let contador = 0; contador < vetor.length; contador++) {
    if (vetor[contador] === numero) {
        console.log("O numero " + numero + " esta localizado na posicao: " + contador);
        encontrado = true;
        break; 
    }
}

if (!encontrado) {
    console.log("O numero " + numero + " nao foi encontrado!");
}
