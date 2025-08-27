const rs = require('readline-sync');

let numero;
let soma = 0;

do{
    numero = rs.questionInt("Digite um numero: ");

    if(numero > 0){
        soma+= numero;
    }

}while(numero !== 0);


console.log("A soma dos números positivos é: " + soma);