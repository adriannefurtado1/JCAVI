/**
5 - Faça um programa que imprima na tela os números de 1 a 20 um ao lado do outro separado por "-"
 */

function imprimeNumeros(){
let texto = ' '
    for (let i = 1; i <= 20; i++) {
        texto += i
        if (i != 20){
            texto += ', '            
        }
    }
    alert(`${texto}`)
}

imprimeNumeros()
