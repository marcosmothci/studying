/* <!-- Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu). --> */

const nascimento = prompt('Informe seu ano de nascimento');
let ano = Number(new Date().getFullYear());
let idade = ano - nascimento;
idade >= 18? console.log('Deve votar.') : console.log('Não precisa votar.');