/**
 * 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
para aprovação é igual ou superior a 8.  

 */

let nomeAluno   = 'Silvio Santos'
let notas       = [6, 8, 10]
let somaNotas   = 0
let media       = 0

for (let i = 0; i < notas.length; i++) {
     somaNotas += notas[i];
}

media = somaNotas / 3;

if(media >= 8){
    alert(`Aluno ${nomeAluno} aprovado com media: ${media}`)
} else {
    alert(`Aluno ${nomeAluno} reprovado com media: ${media}`)
}
