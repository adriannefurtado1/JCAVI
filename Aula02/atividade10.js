/**
10 - Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
Altere o programa anterior para mostrar no final a soma dos números.
 */

function digite2Numeros(){
    let numero1 = Number(window.prompt(`Digite o primeiro número: `))
    let numero2 = Number(window.prompt(`Digite o segundo número: `))
    let numeroAtual
    let listaNumeros = ''
    let proximoNumero
    let soma = 0

    if(numero1 < numero2){
        for (let i = numero1; i < numero2-1; i++) {
            numeroAtual = i
            proximoNumero = proximoNumeroInteiro(numeroAtual)
            listaNumeros += proximoNumero + ' '
            soma += proximoNumero
        }
    } else {
        for (let i = numero2; i < numero1-1; i++) {
            numeroAtual = i
            proximoNumero = proximoNumeroInteiro(numeroAtual)
            listaNumeros += proximoNumero + ' '
            soma += proximoNumero
        }        
    }
    alert(`Os numeros inteiros são ${listaNumeros}
           A soma dos números é ${soma}`)

}

function proximoNumeroInteiro(numeroAtual){
    let proximoNumero = numeroAtual+1
    proximoNumero = parseInt(proximoNumero,10)
return (proximoNumero)
}

digite2Numeros()