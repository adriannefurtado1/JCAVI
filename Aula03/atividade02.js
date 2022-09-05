/**
 * 2- Crie uma função que receba um array de números 
 * (crie uma segunda função para validar os dados dentro do array) e 
 * depois calcule a soma de  todos os valores dentro do array.
 * Execute a função mostrando na tela o seguinte texto: 'A soma dos valores do array é ${(resultado)}'.
 */

let listaNumeros = []

function recebeNumeros(){
    let digitacaoUsuario = ''
    let dadosValidos = false

    digitacaoUsuario = window.prompt(`Digite um número ou 'X' para sair: `)
    digitacaoUsuario = digitacaoUsuario.toUpperCase()

    if(digitacaoUsuario != 'X'){

        listaNumeros.push(digitacaoUsuario);
        recebeNumeros();

    } else {

        dadosValidos = validaDados(listaNumeros)
    }
}

function validaDados(listaNumeros){
    
    for (let i = 0; i < listaNumeros.length; i++) {
        if (typeof Number(listaNumeros[i]) != "number"){
            alert(`Item ${i} do array não é numerico. Reinicie.`)
            return false
        }
    }

    return true
}


function somarValores(n1, n2){
    return n1 + n2
}

function somaTudo(){
let somaNumeros = 0

    for (let i = 0; i < listaNumeros.length; i++) {
        somaNumeros = somarValores(somaNumeros,Number(listaNumeros[i]))    
    } 

    return somaNumeros
}

recebeNumeros();
let soma = 0;
soma = somaTudo();

alert(`A soma dos valores do array é ${soma}`)



