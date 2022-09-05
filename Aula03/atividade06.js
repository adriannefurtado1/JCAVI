/**
 * 6- Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:
let vetor = ["a", "b", "a", "a", "c", "b"]
Aqui, temos:
 vetor[0] = "a"; 
 vetor[1] = "b";
 vetor[2] = "a";
 vetor[3] = "a";
 vetor[4] = "c";
 vetor[5] = "b";
Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, crie uma função que retornar este elemento.
 */


let vector = ["a", "b", "a", "a", "c", "b"]

function validateRepetition(list){
let repetitionFree = []
let repeated = false

    for (let i = 0; i < list.length; i++) {

        const search = list[i];
        
        for (let j = 0; j < list.length; j++) {
            
            if(j != i && list[j] == list[i]){

                j = list.length
                repeated = true;
            }
        }

        if(!repeated){
            repetitionFree.push(list[i])
        }
        repeated = false;
    }

    alert(`Follow the itens that don't repeat: ${repetitionFree}`)
}

function validateRepetition2(list){
let repetitionFree = ''

    for (let i = 0; i < list.length; i++) {

        const isActualContent = (element) => element == list[i];

        const found1 = list.findIndex(isActualContent)
        const foundLast = list.findLastIndex(isActualContent)

        if(found1 == foundLast){
            repetitionFree += `${list[i]} `
        }
    }

    alert(`Follow the itens that don't repeat: ${repetitionFree}`)
}
    

validateRepetition2(vector)

