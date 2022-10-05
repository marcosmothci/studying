


document.getElementById('acender').addEventListener('click', ()=> 
document.getElementById('lampada').src == 'http://i.stack.imgur.com/ybxlO.jpg'? 
document.getElementById('lampada').src = 'http://i.stack.imgur.com/MRjsF.jpg' : 
document.getElementById('lampada').src == 'http://i.stack.imgur.com/MRjsF.jpg' ?  
alert('Tá quebrada, tem que arrumar') : document.getElementById('lampada').src = 'http://i.stack.imgur.com/ybxlO.jpg');

document.getElementById('apagar').addEventListener('click', ()=> 
document.getElementById('lampada').src == 'https://i.stack.imgur.com/b983w.jpg'?
document.getElementById('lampada').src = 'http://i.stack.imgur.com/MRjsF.jpg' :
document.getElementById('lampada').src == 'http://i.stack.imgur.com/MRjsF.jpg'?
alert('Tá quebrada, tem que arrumar') : document.getElementById('lampada').src = 'https://i.stack.imgur.com/b983w.jpg');


document.getElementById('arrumar').addEventListener('click', ()=>
document.getElementById('lampada').src == 'http://i.stack.imgur.com/MRjsF.jpg'?
document.getElementById('lampada').src = 'https://i.stack.imgur.com/b983w.jpg' : alert('nao tem o que arrumar'))





function quebraLampada() {
    document.getElementById('lampada').src = 'http://i.stack.imgur.com/MRjsF.jpg'
}

setInterval(quebraLampada, 10500);



