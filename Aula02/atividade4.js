function crescimentoPopulacaoPais(){
    
    let populationLowerCountry =  80000 //window.prompt('Digite a população do menor país: ')
    let growthRateLowerCountry = 3 //window.prompt('Digite a taxa % anual de crescimento do menor país: ')

    let populationBiggerCountry = 200000 //window.prompt('Digite a população do maior país: ')
    let growthBiggerLowerCountry = 1.5 //window.prompt('Digite a taxa % anual de crescimento do maior país: ')

    let numberOfYears = 0

    while(populationBiggerCountry > populationLowerCountry){
        populationBiggerCountry = populationBiggerCountry * (1+(growthBiggerLowerCountry/100))
        populationLowerCountry = populationLowerCountry * (1+(growthRateLowerCountry/100))
        numberOfYears++
    }
    
    alert(`O pais 1 ultrapassará ou igualará a população do pais 2 em ${numberOfYears} anos.`)

}

crescimentoPopulacaoPais()