/**
7 - Faça um programa que leia 5 números e informe a soma e a média dos números. 
 */

function somaEMedia(){
    let totalSoma       = 0
    let resultadoMedia  = 0
    let numeroDigitado
    let qtdNumeros      = 0

    for (let i = 1; i <= 5; i++) {
        numeroDigitado = window.prompt(`Digite o número ${i}/5:`);
        numeroDigitado = Number(numeroDigitado);

        totalSoma = soma(totalSoma, numeroDigitado);
        qtdNumeros++
    }

    resultadoMedia = media(totalSoma, qtdNumeros)

    alert(`A soma dos numeros digitados foi: ${totalSoma}
           A média dos numeros digitados foi: ${resultadoMedia}`);
}

function soma(numero1, numero2){
    let soma = numero1 + numero2
    return soma
}

function media(totalSoma, indice){
    return (totalSoma/indice)
}

somaEMedia()