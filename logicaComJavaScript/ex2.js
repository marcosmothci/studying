/* <!--    Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar; --> */


        numero = parseInt(prompt('informe um numero'))
            if (numero > 0) {
                numero%2 ? alert('é impar') : alert('é par');
            }else{
                alert('valor inválido, favor verificar e tentar novamente')
            }