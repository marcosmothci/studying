// apresentas os 30 numeros pares. cria um array vazio, vai preenchendo com os pares e verificando se já tem 30 no conjunto. 
//quando tiver, imprime.

const pares = []
for (i = 0; i <= 60; i++) {
    if (pares.length < 30) {
        if (i % 2 == 0) {
            pares.push(i)
        }
    } else {
        console.log(pares)
    }
}