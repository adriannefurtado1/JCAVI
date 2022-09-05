
/**
10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres.
 */
let idades  = [ 25, 26, 27, 32, 35, 18, 25, 12, 13, 44];
let pesos   = [ 45, 55, 58, 63, 68, 50, 60, 41, 48, 75];
let sexos   = ['F','M','F','M','F','M','M','F','F','F'];
let totMulheres  = 0 
let totHomens    = 0
let pesoMulheres = 0
let idadeHomens  = 0
let textoAlerta  = ''

for (let i = 0; i < idades.length; i++) {
    if(sexos[i]=='F'){
        totMulheres++;
        pesoMulheres+=pesos[i];
    } else {
        totHomens++
        idadeHomens+=idades[i];
    }
    
}

pesoMulheres = pesoMulheres / totMulheres; 
idadeHomens  = idadeHomens  / totHomens;

textoAlerta += `HOMENS\n`;
textoAlerta += `Quantidade: ${totHomens}\n`;
textoAlerta += `Média Idade: ${idadeHomens}\n\n`;
textoAlerta += `MULHERES\n`;
textoAlerta += `Quantidade: ${totMulheres}\n`;
textoAlerta += `Média Peso: ${pesoMulheres}\n\n`;

alert(textoAlerta);
