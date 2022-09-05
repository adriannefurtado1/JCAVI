/**
1 - Faça um programa que peça uma nota, entre zero e dez.
 Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 
 */

 digitarNotaEntreZeroEDez()

 function digitarNotaEntreZeroEDez(){
    
    let digitouCerto  = false
    let resposta = window.prompt(`
            Digite uma nota entre 0 e 10`)

    if(resposta >=0 && resposta <= 10){
        digitouCerto = true
    }
    
    if(!digitouCerto){
        alert('Digitou numero errado');
        digitarNotaEntreZeroEDez();
    }
}