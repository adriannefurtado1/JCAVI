alert('Alerta!!!')

//console.log('Alerta Teste!!!');

//cAlerta = "alerta com variavel"

//string
//let variavelTexto = "Alert"

//variavelTexto.length

//number
const variavelNumerica = 333.0

//Array
/*
let nomes = ['Gabriel','Ana','Marcos']
let texto = ''
for (let index = 0; index < nomes.length; index++) {
    texto += nomes[index];
}
alert(texto)
*/


/*
let email = 'gabriel@gmail.com'
let primeiroNome = 'Adrianne'
let ultimoNome = 'Furtado'
let nomeCompleto = primeiroNome+' '+ultimoNome
let nomeCompletoNovo = `${primeiroNome} ${ultimoNome}`

//alert(nomes[0])
//alert(nomeCompleto)
console.log(email.indexOf('@'));
console.log(email.split('@'));

let emailDividido = email.split('@')

console.log(emailDividido[0]);
*/

//Number
//console.log(3 ** 3)

/*
let likes = 25;
//likes ++
//++likes
//likes += 1
console.log(++likes);
*/



//Boolean

/*
const age = 20;

let maiorDeIdade = age > 17

if(maiorDeIdade){
    console.log("maior de idade")
} else{
    console.log("menor de idade");
}
*/

/*
let senha = '1234'

if(senha.length > 6){
    console.log('Senha cadastrada.');
}else{
    console.log('Senha deve ter mais do que 6 caracteres.');
}
*/


//criança até 18
//adulto até 60
//idoso + 60
/*
const age = 65;
let isMaiorDeIdade = age >= 18;

if(age < 18) {
    console.log("Criança");
} else if(age <60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

*/

//"Nome: Gabriel; Idade: 25"

let nomes = ['Gabriela','Ana','Pietra']
let idade = [25,12,45]


alert(nomes[0]);

for (let i = 0; i < nomes.length; i++) {
    alert(`Nome: ${nomes[i]}; Idade: ${idade[i]}`)
    //console.log(nomes[i]);
}