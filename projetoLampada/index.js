
/* document.getElementById('acender').addEventListener('click', ()=> 
document.getElementById('lampada').src == 'http://i.stack.imgur.com/ybxlO.jpg'? 
document.getElementById('lampada').src = 'http://i.stack.imgur.com/MRjsF.jpg' : 
document.getElementById('lampada').src == 'http://i.stack.imgur.com/MRjsF.jpg' ?  
alert('Tá quebrada, tem que arrumar') : document.getElementById('lampada').src = 'http://i.stack.imgur.com/ybxlO.jpg'); */
/*
document.getElementById('apagar').addEventListener('click', ()=> 
document.getElementById('lampada').src == 'https://i.stack.imgur.com/b983w.jpg'?
document.getElementById('lampada').src = 'http://i.stack.imgur.com/MRjsF.jpg' :
document.getElementById('lampada').src == 'http://i.stack.imgur.com/MRjsF.jpg'?
alert('Tá quebrada, tem que arrumar') : document.getElementById('lampada').src = 'https://i.stack.imgur.com/b983w.jpg'); */
/*
document.getElementById('arrumar').addEventListener('click', ()=>
document.getElementById('lampada').src == 'http://i.stack.imgur.com/MRjsF.jpg'?
document.getElementById('lampada').src = 'https://i.stack.imgur.com/b983w.jpg' : alert('nao tem o que arrumar'))
*/

const lamp = document.getElementById('lampada')
const acesa = 'http://i.stack.imgur.com/ybxlO.jpg'
const apagada = 'https://i.stack.imgur.com/b983w.jpg'
const quebrada = 'http://i.stack.imgur.com/MRjsF.jpg'

function mandaArrumar() {
    alert('Tá quebrada, tem que mandar arrumar!')
}

function quebraLampada() {
    lamp.src = 'http://i.stack.imgur.com/MRjsF.jpg'
} 

document.getElementById('acender').addEventListener('click', ()=> lamp.src == acesa?
 lamp.src = quebrada : lamp.src == quebrada? mandaArrumar() : lamp.src = acesa)

document.getElementById('apagar').addEventListener('click', ()=> lamp.src == apagada? 
lamp.src = quebrada : lamp.src == quebrada? mandaArrumar() : lamp.src = apagada)

document.getElementById('arrumar').addEventListener('click', ()=> lamp.src == quebrada? lamp.src = apagada : alert('Não tem nada pra arrumar aqui.'))



setInterval(quebraLampada,Math.floor(Math.random() * 10000) + 3000);



