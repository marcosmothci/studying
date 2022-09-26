/* Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores. */

const eleitores  = Number(prompt('Informe o total de eleitores'))
const brancos = Number(prompt('Informe o total de votos em branco'))
const nulos = Number(prompt('Informe o total de votos nulos'))
const validos = Number(prompt('Informe o total de votos válidos'))
const totalVotos = brancos + nulos + validos

if (totalVotos > eleitores) {
        console.log('tem voto a mais')
}else if (totalVotos < eleitores) {
        console.log ('tem voto faltando')
}else{
    console.log('Resultado da ELEIÇÃO')
    console.log(`total de eleitores ${eleitores}`) 
    console.log(`total de votos: ${totalVotos}, ou ${(totalVotos/eleitores)*100}`)
    console.log(`total de votos em branco: ${brancos}, ou ${(brancos/totalVotos)*100} %`)
    console.log(`total de votos nulos: ${nulos}, ou ${(nulos/totalVotos)*100} %`)
    console.log(`total de votos em validos: ${validos}, ou ${(validos/totalVotos)*100} %`)
}