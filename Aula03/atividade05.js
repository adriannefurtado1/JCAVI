/**
 * 5- Crie uma função que receba um array de números 
 * (Valide os dados dentro do array, reaproveite a função criada no exercício 1) e 
 * depois calcule a média de todos os valores dentro do array. 
 * Execute a função mostrando na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'.
 */

function average(informationList){
let sum = 0
    if(validaDados(informationList)){
        
        for (let i = 0; i < informationList.length; i++) {
            sum += informationList[i];
        }

        alert(`List number average: ${sum/informationList.length}.`)

    } else {
        
        alert(`Invalid type information.`)
    
    }
}

function validaDados(list){
    
    for (let i = 0; i < list.length; i++) {
        if (typeof Number(list[i]) != "number"){
            return false
        }
    }

    return true
}

const numbersList = [15, 25, 8, 7, 6, 9, 215]
average(numbersList)