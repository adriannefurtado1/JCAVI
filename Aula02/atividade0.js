//alert('teste')

function executarMenu(){
    
    let resposta = window.prompt(`
            (1) xxxx 
            (2) xxxx
            (3) xxxx
            (4) Sair
            `)

    if(resposta != 4 ){
        executarMenu()
    }
    //return resposta
}

executarMenu()


/*function somarNumeros(numero1, numero2, numero3){
    let resultado = numero1 + numero2 + numero3
    
    alert(resultado)
    
    return resultado
}

let total = somarNumeros(10,20,30)*/





