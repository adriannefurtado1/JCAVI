/**
6 - Faça um programa que leia 5 números e informe o maior número.
 */

function maiorNumero(){
    let maiorNumero
    
    for (let i = 1; i <= 5; i++) {
        
        const numeroDigitado = window.prompt(`Digite o número ${i}/5:`);

        if(!maiorNumero){
            maiorNumero = Number(numeroDigitado);
        }else if(maiorNumero < Number(numeroDigitado)){
            maiorNumero = numeroDigitado;
        }
    }

    alert(`O maior número digitado foi ${maiorNumero}`);
}

maiorNumero()