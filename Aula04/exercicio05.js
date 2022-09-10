/**
 * 4- Crie uma função que receba um string como parâmetro  e execute um "windows.prompt" 
 * com o texto recebido como parâmetro, e em seguida retorne o valor que o usuário digitou.
 */

function calcularMedia(numeros) {
    if (validarArrayNumerico(numeros)) {
        let total = 0;

        numeros.forEach(numero => {
            total += numero;
        });

        return total / numeros.length
    }

}


function validarArrayNumerico(numeros) {
    let isValido = true;

    numeros.forEach(numero => {
        const numero = numeros[i];

        if (typeof numero != "number") {
            isValido = false;
        }
    });

    return isValido;
}

let media = calcularMedia([10, 20, 30])