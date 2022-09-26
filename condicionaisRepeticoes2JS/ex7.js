let impares = []
let i = 0
let numero = Number(prompt('digite um numero'))
for (i=0; i<=numero; i++){
    if (i%2 !== 0){
        impares.push(i)
    }
}
console.log(impares)