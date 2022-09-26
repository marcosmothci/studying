let altura = prompt('qual sua altura?')
let sexo = prompt('digite 1 para sexo feminino e 2 para masculino')
     if (sexo < 1 || sexo > 2) {
    console.log('Por favor verifique os dados informados e tente novamente.')
    }else if (sexo == 1) {
        console.log(`Seu peso ideal é ${(altura*62.1)-44.7}`)
    }else {
        console.log(`Seu peso ideal é ${(altura*72.7)-58}`)
    }