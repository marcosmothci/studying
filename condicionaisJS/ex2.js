
const dia = prompt('Informe o dia da semana')
if (dia == 1) {
    document.getElementById("ex2").innerHTML = 'DOMINGO'
} else if (dia == 2) {
    document.getElementById("ex2").innerHTML = 'SEGUNDA-FEIRA'
} else if (dia == 3) {
    document.getElementById("ex2").innerHTML = 'TERÇA-FEIRA'
} else if (dia == 4) {
    document.getElementById("ex2").innerHTML = 'QUARTA-FEIRA'
} else if (dia == 5) {
    document.getElementById("ex2").innerHTML = 'QUINTA-FEIRA'
} else if (dia == 6) {
    document.getElementById("ex2").innerHTML = 'SEXTA-FEIRA'
} else if (dia == 7) {
    document.getElementById("ex2").innerHTML = 'SABADO'
} else {
    alert('DIA NÃO RECONHECIDO')
}


/* 
// pra tirar o prompt e deixar automatico: 
const dia = (new Date().getDay()) 
// altera a numeração dos dias pra ficar igual ao padrão do JS e daí roda o código a seguir:
if (dia == 1) {
    document.getElementById("ex2").innerHTML = 'Hoje é segunda-feira'
} else if (dia == 2) {
    document.getElementById("ex2").innerHTML = 'Hoje é terça-feira'
} else if (dia == 3) {
    document.getElementById("ex2").innerHTML = 'Hoje é quarta-feira'
} else if (dia == 4) {
    document.getElementById("ex2").innerHTML = 'Hoje é quinta-feira'
} else if (dia == 5) {
    document.getElementById("ex2").innerHTML = 'Hoje é sexta-feira'
} else if (dia == 6) {
    document.getElementById("ex2").innerHTML = 'Hoje é sábado'
} else if (dia == 7) {
    document.getElementById("ex2").innerHTML = 'Hoje domingo'
} else {
    alert('DIA NÃO RECONHECIDO')
}
 */

/* 
//mesma coisa, mas com switch ao invés de else if
// pra tirar o prompt e deixar automatico, altera a numeração dos dias e  => const diaEscolha = (new Date().getDay()) 
const diaEscolha = prompt('Informe o dia da semana')
switch (diaEscolha) {
    case 1:
        document.getElementById("ex2").innerHTML = 'DOMINGO';
        break;
    case 2:
        document.getElementById("ex2").innerHTML = 'SEGUNDA-FEIRA';
        break;
    case 3:
        document.getElementById("ex2").innerHTML = 'TERÇA-FEIRA';
        break;
    case 4:
        document.getElementById("ex2").innerHTML = 'QUARTA-FEIRA';
        break;
    case 5:
        document.getElementById("ex2").innerHTML = 'QUINTA-FEIRA';
        break;
    case 6:
        document.getElementById("ex2").innerHTML = 'SEXTA-FEIRA';
        break;
    case 7:
        document.getElementById("ex2").innerHTML = 'SABADO'
        break
    default:
        alert('DIA NÃO RECONHECIDO')
}
 */

// nessa mesma ideia, fiz uma função que pega automaticamente o dia e verifica se já é final de semana.
//vantagem de automatizar essa entrada é não ter que ficar tratando os possiveis erros das batatas
/*
function isItFindi() {
switch (new Date().getDay()) {
    case 6:
    case 7:
        alert('É FINAL DE SEMANA!!!!')
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert("não é final de semana :(")
        break;
    default:
        alert("sei nem que dia é hoje kkkk");
}
}
isItFindi() 
*/