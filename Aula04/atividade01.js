/*
⦁ Crie um programa de cadastro de veículos de uma loja de seminovos (utilizando array como base de dados ex: baseDeAutomoveis: [ob1, obj2,]).  O programa deve implementar as funcionalidades descritas na figura abaixo:
 
(1) - Cadastrar automóvel;
(2) - Pesquisar automóvel;
(3) - Excluir automóvel;
(0) - Sair;


dica: Crie uma função criarAutomovel(<informacoes>) que retorne um objeto automóvel 

O cadastro do automóvel deve solicitar modelo do veículo, marca, placa e ano de fabricação. O programa deve respeitar as seguintes restrições:
⦁ Não se pode cadastrar uma placa previamente cadastrada;
⦁ A pesquisa deve ser feita pela placa, marca ou modelo e deve listar todos os resultados que correspondem à pesquisa;
⦁ A exclusão deve ser feita pela placa do veículo;
⦁ O usuário deve pesquisar um veículo pela placa para alterar o cadastro e só deve permitir alterar o modelo e marca;
 */

const veiculos = [];

console.log(veiculos)

function executarMenu(){
    const resultado = prompt(`
            (1) Cadastrar Automóvel
            (2) Pesquisar Automóvel
            (3) Excluir Automóvel
            (4) Sair`)

    if(resultado == '1'){
        cadastrarVeiculo();
    }
    
    if(resultado == '2'){
        pesquisarVeiculo();
    }
        
    if(resultado == '3'){
        excluirVeiculo();
    }

    if(resultado != '4'){
        executarMenu();
    }
}

function cadastrarVeiculo(){
    const veiculo = {
        modelo: prompt(`MODELO do veículo:`),
        marca: prompt(`MARCA do veículo:`),
        placa: prompt(`PLACA do veículo:`),
        anoFabricação: prompt(`ANO DE FABRICAÇÃO do veículo`)
    }        
    veiculos.push(veiculo)
}


function pesquisarVeiculo(){
    const resultado = prompt(`
    Pesquisar por: 
    (1) Placa
    (2) Marca
    (3) Modelo
    (4) [MENU ANTERIOR]`) 

    if(resultado == '1'){
        const placa = prompt(`PESQUISA - Digite a placa: `)
        return pesquisaArrayVeiculos(1,placa)
    }
    
    if(resultado == '2'){
        const marca = prompt(`PESQUISA - Digite a marca: `)
        return pesquisaArrayVeiculos(2,marca)
    }
        
    if(resultado == '3'){
        const modelo = prompt(`PESQUISA - Digite o modelo: `)
        return pesquisaArrayVeiculos(3,modelo)
    }

    if(resultado != '4'){
        executarMenu();
    }    
}


function excluirVeiculo(){

    const placa = prompt(`Digite a placa: `)
    
    for (let i = 0; i < veiculos.length; i++) {
        if(veiculos[i].placa == placa){
            veiculos.slice(i,i+1)
        }     
        
    }
}

executarMenu()

function pesquisaArrayVeiculos(tipo, dadoPesquisa){
    let textoRetorno  = ``

    veiculos.forEach(veiculo => {
        let achou = false
        switch (tipo) {
            case 1:
                if(veiculo.placa == dadoPesquisa){
                    achou = true                    
                }    
                break;
            case 2:
                if(veiculo.marca == dadoPesquisa){
                    achou = true
                }    
                break;
            case 3:
                if(veiculo.modelo == dadoPesquisa){
                    achou = true                   
                }    
            break;                1
            default:
                break;
        }

        if (achou){
            textoRetorno += `VEÍCULO: ${veiculo.marca} - ${veiculo.modelo} - ${veiculo.placa} - ${veiculo.anoFabricação} \n`
        }         
        
    });
    if(!textoRetorno){
        textoRetorno = `Não foram encontrados veículos com os dados informados.`
    }

    imprimeVeiculo(textoRetorno)
    return textoRetorno
}



function imprimeVeiculo(textoRetorno){
    alert(textoRetorno)
}