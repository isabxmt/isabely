var nomeUsuario = prompt('qual é seu nome?');
var texto = document.querySelector('span');

texto.textContent = nomeUsuario;

while(nomeUsuario ==''){
    nomeUsuario = prompt('qual é seu nome?')
}