// Variaveis (String, Number, Boolean, 'typeof')
// Arrays (For, ForEach)
// Funções(Parametros)

//Objetos

/*const pessoa = [{
    nome: 'Gabriel',
    cpf: '123.456.789-01',
    altura: '',
},{
    nome: 'Joao',
    cpf: '121.232.343-45'
    altura: '',
}
]

const veiculo = {
    marca: "VM",
    modelo: "Gol",
    ano: 2019,
    cor: "vermelho",
    acelerar: function() {
        alert(`O ${this.modelo} acelerou!!!`)
    },
    motorista: pessoa[0]
}

alert(veiculo.motorista.nome)

alert(veiculo.cor)
*/


const veiculos = [];

//push - add novo valor em um array
//pop - remove o ultimo valor do array

console.log(veiculos)
//alert(veiculos)

function executarMenu(){
    const resultado = prompt(`
            (1) Cadastrar Veículo
            (2) Excluir Veiculo
            (3) Apresentar Veículos
            (4) Sair`)

    if(resultado == '1'){
        cadastrarVeiculo();
    }
    
    if(resultado == '3'){
        apresentarVeiculos();
    }

    if(resultado != '4'){
        executarMenu();
    }
}

function cadastrarVeiculo(){
    const veiculo = {
        cor: prompt(`Digite a cor do veículo`),
        ano: prompt(`Digite o ano do veículo`)
    }        
    veiculos.push(veiculo)
}

function apresentarVeiculos(){
    listaImpressao = ''
    veiculos.forEach(veiculo => {
        listaImpressao += `Veiculo: ${veiculo.cor} - ${veiculo.ano} \n`        
    });
    alert(`${listaImpressao}`)
}

executarMenu()


pesquisar slice - para excluir uma posicao do array