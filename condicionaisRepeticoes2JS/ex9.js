let grupo1 = []
let soma = 0
let x = 0
    for (x = 13; x < 73; x++){
    grupo1.push(x)
    }
    console.log(grupo1)
    for( i = 0; i < grupo1.length; i++) {
    soma += grupo1[i];
    }
    let media = soma/grupo1.length
    console.log(media)
