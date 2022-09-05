/**
 * 3 - Crie uma função que receba duas strings como parâmetro, primeiro nome e segundo nome, em seguida retorne o nome completo do indivíduo.
 */



function escreveNome(primeiroNome, segundoNome){
    return (`${primeiroNome} ${segundoNome}`) 
}

const nomeCompleto = escreveNome('Adrianne', 'Furtado')

alert(`O nome completo é ${nomeCompleto}`)