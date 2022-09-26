/* a vista desconto 2.5
2 a 5 vezes preco sem desconto
6 a 10 vezes tem juros de 6%
11 a 15 juros de 13% */

let preco = Number(prompt('informe o preço de tabela do produto: '))
let numeroParcelas = Number(prompt('Informe em quantas vezes será feito o pagamento: '));

if (parcela == 1) {
    precoTotal = preco*0.975
    document.write(`O preco final é ${precoTotal} e será pago à vista.`)
}else if (parcela <= 5) {
    precoTotal = preco
    document.write(`O preco final é ${precoTotal} e será pago em ${numeroParcelas} vezes de R$${precoTotal/numeroParcelas}.`)
}else if (parcela <=10){
    precoTotal = preco*1.06
    document.write(`O preco final é ${precoTotal} e será pago em ${numeroParcelas} vezes de R$${precoTotal/numeroParcelas}.`)
}else if (parcela <=15) {
    precoTotal = preco * 1.13
    document.write(`O preco final é ${precoTotal} e será pago em ${numeroParcelas} vezes de R$${precoTotal/numeroParcelas}.`)
}else{
    document.write('Plano de parcelamento invalido. Verifique e tente novamente.')
}

