/**
8 - Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
 */

function imprimePares(){
    let texto = ''

    for (let i = 1; i <= 50 ; i++) {
        
        if( i % 2 > 0){
            texto +=  i + ' ';
        }
        
    }

    alert(`Lista de numeros ímpares: ${texto}`)
}

imprimePares()