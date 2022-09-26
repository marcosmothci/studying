// inicia com 5mil vai acrescentando 30% até 10mil
const valor = []
let v = 5000
while (v <= 10000 ){
    valor.push(v *= 1.3)
}
document.write(`progressão do valor <br> ${valor}`);