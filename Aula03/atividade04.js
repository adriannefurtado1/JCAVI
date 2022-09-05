/**
 * 4- Crie uma função que receba um string como parâmetro  e execute um "windows.prompt" 
 * com o texto recebido como parâmetro, e em seguida retorne o valor que o usuário digitou.
 */

function doPrompt(text){
    const userInput = window.prompt(`${text}`)
    alert(`${userInput}`)
}

doPrompt(`What do you know about Java Script? `)