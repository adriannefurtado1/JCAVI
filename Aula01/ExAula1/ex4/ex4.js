/**
 * 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
parcelamento for em 5 vezes, o acréscimo será de 20%. 
 * 
 */
const tresParc        = 3;
const cincoParc        = 5;

let precoAVista    = 10;
let valorTotal     = 0;
let valorParcela   = 0;
let texto3Parcelas = ''
let texto5Parcelas = '';


// calculo para 3 parcelas
valorTotal   = precoAVista * 1.1;
valorParcela = valorTotal / tresParc;

alert(`Preço a Vista: ${precoAVista} \n\r3 Parcelas de: ${valorParcela} \n\rValor Total: ${valorTotal}`);

// calculo para 5 parcelas
valorTotal   = precoAVista * 1.2;
valorParcela = valorTotal / cincoParc;

alert(`Preço a Vista: ${precoAVista} \n\r5 Parcelas de: ${valorParcela} \n\rValor Total: ${valorTotal}`);

