let turno = prompt('qual turno voce estuda? digitar “M” para matutino, “V” para vespertino ou “N” para noturno')
turno = turno.toUpperCase()
switch(turno){
    case M:
        console.log('Bom dia!')
    case V: 
        console.log('Boa tarde!')
    case N:
        console.log('Boa noite!')
    default:
    console.log('valor inválido, favor verificar.')
}