/* Escreva um algoritmo que armazene três valores numéricos
diferentes e, em seguida, mostre no console a soma, a média, o
produto, o menor e o maior desses números. O algoritmo deve
validar e parar a execução ao mostrar um alerta com a mensagem
“Você repetiu algum número na digitação" se caso duas variáveis
estiverem armazenando o mesmo valor. Utilize o console.log() para
mostrar o resultado esperado. */

const numero1ex1 = Number(prompt('Digite um numero'))
const numero2ex1 = Number(prompt('Digite um numero'))
const numero3ex1 = Number(prompt('Digite um numero'))
const numerosEx1 = [numero1ex1, numero2ex1, numero3ex1]
const soma = numero1ex1 + numero2ex1 + numero3ex1
const media = soma/3
const produto =  numero1ex1 * numero2ex1 * numero3ex1
const maior = Math.max(...numerosEx1)
const menor = Math.min(...numerosEx1)

console.log(`Os numeros digitados foram ${numerosEx1}` )
console.log(`A soma dos numeros ${numerosEx1} é ${soma}`)
console.log(`A media dos numeros ${numerosEx1} é ${media}`)
console.log(`O produto dos numeros ${numerosEx1} é ${produto}`)
console.log(`O maior numero é ${maior}`)
console.log(`O menor numero é ${menor}`)