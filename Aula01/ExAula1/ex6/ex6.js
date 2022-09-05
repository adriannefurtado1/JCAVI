/**

6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
a maior e a menor altura do grupo;
a média de altura;
o número de pessoas com mais de 1.81 de altura.

 */

let alturas       = [1.82, 1.92, 1.75, 1.66, 1.81, 1.55, 1.68, 1.87, 1.35, 1.45, 1.58, 1.2, 1.3, 1.4, 1.5]
let menorAltura   = alturas[1]
let maiorAltura   = alturas[1]
let qtdMaior      = 0
let mediaAltura   = 0

for (let i = 0; i < alturas.length; i++) {
    mediaAltura += alturas[i];
    if (menorAltura > alturas[i]){
        menorAltura = alturas[i]
    }
    if (maiorAltura < alturas[i]){
        maiorAltura = alturas[i]
    }
    if (alturas[i] > 1.81){
        qtdMaior ++
    }
}

mediaAltura = mediaAltura / alturas.length;

alert(`A maior altura é ${maiorAltura}. \nA menor altura é ${menorAltura}. \nA média de altura é ${mediaAltura}. \nExistem ${qtdMaior} pessoas com altura superior a 1.81.`)
