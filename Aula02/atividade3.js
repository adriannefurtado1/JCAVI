/**
 * 3 - Faça um programa que leia e valide as seguintes informações:
 - Nome: maior que 3 caracteres;
 - Idade: entre 0 e 150;
 - Salário: maior que zero;
 - Sexo: 'f' ou 'm';
 - Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
*/

function cadastro(){
    leNome();
    leIdade();
    leSalario();
    leSexo();
    leEstadoCivil();
}

function leNome(){
    
    let nome = window.prompt(`Nome: `)
    
    if(nome.length <= 3){
        alert(`Nome inválido. Digite novamente.`)
        leNome()
    }
}

function leIdade(){
    
    let idade = window.prompt(`Idade: `)
    
    if( idade < 0 || idade > 150){
        alert(`Idade inválida. Digite novamente.`)
        leIdade()
    }
}

function leSalario(){
    let salario = window.prompt(`Salário: `)
    if(salario <= 0){
        alert(`Salário inválido. Digite novamente.`)
        leSalario()
    }
}

function leSexo(){
    let sexo = window.prompt(`Sexo(f/m): `)
    
    sexo = sexo.toUpperCase();

    let informacaoValida = false;
    
    //if( (sexo.indexOf("F") != -1) || (sexo.indexOf("M") != -1) ){    
    
    if( sexo.length == 1 && ("F|M".indexOf(sexo) != -1) ) {    
        informacaoValida = true;
    }

    if(!informacaoValida){
        alert(`Sexo inválido. Digite novamente.`)
        leSexo();
    }
}

function leEstadoCivil(){
    let estadoCivil = window.prompt(`Estado Civil (s/c/v/d): `)
    estadoCivil = estadoCivil.toUpperCase();

    let estadoCivilValido = false;

    if(estadoCivil == 'S' || estadoCivil == 'C' || estadoCivil == 'V' || estadoCivil == 'D' ){
        estadoCivilValido = true;
    }

    if(!estadoCivilValido){
        alert(`Estado Civil inválido. Digite novamente.`)
        leEstadoCivil();
    } 
    
}

cadastro();


//.indexof