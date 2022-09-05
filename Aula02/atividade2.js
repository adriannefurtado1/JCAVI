/*
2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha 
igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 
*/

function cadastro(){
    let user    = window.prompt(`Digite o usuário: `)
    let password = window.prompt(`Digite a senha: `)

    if(user == password){
        alert(`Senha e Usuário não podem ser iguais.`)
        cadastro();
    }
}

cadastro()