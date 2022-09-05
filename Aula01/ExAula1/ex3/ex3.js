/*
3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
cálculo atribuir o valor para uma variável C. 

*/

let valorUm         = 15;
let valorDois       = 15;
let resultado       = 0;
let texto           = '';

texto = `Os valores ${valorUm} e ${valorDois} `

if(valorUm == valorDois){
    resultado = valorUm + valorDois;
    texto +=  "são iguais. O resultado é a soma desses numeros: "
}else {
    resultado = valorUm * valorDois;
    texto +=  "são diferentes. O resultado é a multiplicação desses numeros: "
}

alert( `${texto} ${resultado}`);