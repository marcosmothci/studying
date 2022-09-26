const numeroTeste = parseInt(prompt("Digite um numero "));
let checkPrimo = true;
if (numeroTeste <= 1) {
    document.write("Numero inválido. Verifique e tente novamente");
}
else if (numeroTeste > 1) {
    for (let i = 2; i < numeroTeste; i++) {
        if (numeroTeste % i == 0) {
            checkPrimo = false;
            break;
        }
    }
    if (checkPrimo) {
        document.write(`${numeroTeste} é um numero primo`);
    } else {
        document.write(`${numeroTeste} não é um numero primo`);
    }
}