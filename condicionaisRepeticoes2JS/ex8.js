

    const num = prompt('Digite um numero para acessar sua tabuada:')
    const tabuada = []
for (let i = 0; i <= 10; i++) { 
    if (num >= 1 && num <= 10){
    tabuada.push(`<em>${i} x ${num}</em> = <strong>${i*num}</strong><br>`) 
    }else { 
        alert('informe um numero entre 1 e 10!!')
    }
}
document.write(`TABUADA DO ${num} <br> ${tabuada}`);