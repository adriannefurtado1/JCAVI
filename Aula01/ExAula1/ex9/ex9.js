/**
 * 9. Faça um programa que receba 10 números, calcule e imprima a soma dos números pares e a soma dos números primos.
 */

let numeros   = [11,22,33,44,55,26,37,8,9,10]
let numPares  = 0
let numPrimos = 0

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 == 0){
        numPares += numeros[i];
    }
    numPrimos += numeros[i];

    for (j = 2; j <= numeros[i] / 2; j++) {
        if (numeros[i] % j == 0) {
           numPrimos -= numeros[i];
           j = numeros[i]
        }
     }
}
alert(`Soma de todos os números pares: ${numPares}
Soma dos números primos: ${numPrimos}`)