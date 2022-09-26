/* <!-- Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit. -->
 */
 
    const temperatura = Number(prompt('informe a temperatura em graus celsius'))

    const fahrenheit = ((temperatura * 9) + 160) / 5
    document.write(`${temperatura} Graus Celsius equivalem a ${fahrenheit} Graus Fahrenheit.`)
