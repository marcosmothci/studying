//separando pares e impares de 0 a 10 em dois arrays com FOR
let pares = []
let impares = []

for (let i=0; i<=10; i++) {
    i%2==0 ? pares.push(i) : impares.push(i)  
}
document.write(`Essa é a lista dos numeros PARES: ${pares} <br> e essa a dos numeros IMPARES: ${impares}`);

/* fazendo a mesma coisa com DO WHILE
let i = 0
do {
    i%2==0 ? pares.push(i) : impares.push(i);
    i++;
}while (i<=20);
document.write (`Essa é a lista dos numeros PARES: ${pares} <br> e essa a dos numeros IMPARES: ${impares}`); */