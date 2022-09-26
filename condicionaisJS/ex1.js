const idade = prompt('Informe a idade do motorista')
const habilitado = prompt('Já possui habilitação? S ou N')
if (idade !== NaN) {
    (idade > 18 && habilitado.toUpperCase() == 'S')? document.getElementById("ex1").innerHTML = '<h1>Pode dirigir</h1>' : document.getElementById("ex1").innerHTML = '<h1>Não pode dirigir</h1>'
}