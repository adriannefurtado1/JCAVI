/**
 7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: 
    ótimo: 3
    bom: 2 
    regular: 1

8. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
    a média das idades das pessoas que responderam ótimo;
    a quantidade de pessoas que responderam regular;
    a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

 */

let idades   = [11,32,83,74,25,16,27,38,19,30,41,42,53,44,65];
let opinioes = [ 3, 1, 2, 1, 2, 3, 3, 2, 1, 2, 2, 2, 3, 3, 1];
let qtdOtimo   = 0;
let idadeOtimo = 0;
let qtdRegular = 0;
let qtdBom     = 0;
let percBom   

for (let i = 0; i < idades.length; i++) {
    if(opinioes[i] == 3){           //ótimo
        qtdOtimo++;
        idadeOtimo += idades[i];
    } else if(opinioes[i] == 2){    //bom
        qtdBom++
    } else {                        //regular
        qtdRegular++
    }
}

idadeOtimo = idadeOtimo/qtdOtimo;
percBom = (qtdBom*100)/opinioes.length
percBom = percBom.toFixed(2)

alert(`A media das idades das pessoas que achou o filme ótimo é ${idadeOtimo}
${qtdRegular} pessoas acharam o filme regular
${percBom}% das pessoas achou o filme bom.`);
