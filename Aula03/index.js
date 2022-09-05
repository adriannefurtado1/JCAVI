
/*
//arrow function

let subtrairValores = (n1,n2) =>{
    return n1 - n2
}

let resultado = subtrairValores(50,15)
alert(`${resultado}`)

*/
function somarValores(n1,n2){
    let total = 0;
    total = n1 + n2;
    return total;
}

//    somarValores(10,20);

function calculadora(){
    let action = ''
    action = prompt.while (`1. Soma
    2. Subtraçao
    3. Divisao
    4. Multiplicação`) 
    

    switch (action){
        case '1':
            somarValores();
        case '2':
            subtrairValores();
        case '3':
            dividirValores();
        case '4':
            multiplicarValores();
        default:
            alert(`Opção inválida, digite novamente. `)
            calculadora();
    }
}
    


calculadora()

//typeof