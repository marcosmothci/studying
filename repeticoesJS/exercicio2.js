//gera um array vazio, preenche com a tabuada do 5 e apresenta ela na tela - FOR

const tabuada5 = [];
for (let i = 0; i <= 10; i++) { 
    tabuada5.push(`<em>${i} x 5</em> = <strong>${i*5}</strong><br>`) 
};
document.write(`TABUADA DO 5  <br> ${tabuada5}`); 

/*
criando uma função para acessar qualquer tabuada desejada pelo usuário

function geraTabuada() {
    const num = prompt('Digite um numero para acessar sua tabuada:')
    const tabuada = []
for (let i = 0; i <= 10; i++) { 
    tabuada.push(`<em>${i} x ${num}</em> = <strong>${i*num}</strong><br>`) 
}
document.write(`TABUADA DO ${num} <br> ${tabuada}`);
} 
geraTabuada();
*/