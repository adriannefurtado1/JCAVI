/**
 * 2- Crie uma função que receba um array de números 
 * (crie uma segunda função para validar os dados dentro do array) e 
 * depois calcule a soma de  todos os valores dentro do array.
 * Execute a função mostrando na tela o seguinte texto: 'A soma dos valores do array é ${(resultado)}'.
 */

function somarValoresArray(numeros) {
    const isValido = validarArrayNumerico(numeros);

    if (isValido) {

        let total = 0;
        for (let i = 0; i < numeros.length; i++) {
            const numero = numeros[i];
            total += numero;
        }
        alert(`A soma dos valores do array é ${total}`);

    } else {
        alert("Array só pode conter numeros");
    }
}

function validarArrayNumerico(numeros) {
    let isValido = true;

    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];

        if (typeof numero != "number") {
            isValido = false;
        }
    }

    return isValido;
}

somarValoresArray(['gabriel', 20, 30])