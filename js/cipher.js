var btnCriptografar = document.querySelector('#btn-criptografar');
var input = document.querySelector('#input');
var output = document.querySelector('#output');

btnCriptografar.criptografar = criptografar;
input.atualizarBotaoCriptografar=atualizarBotaoCriptografar;
output.write = write;

function write(strArray){
	
	console.log(strArray.join(''));
	
}

function atualizarBotaoCriptografar(event){
	if( event.srcElement.value.trim() == '' ){
		btnCriptografar.disabled = true;
	}else{
		btnCriptografar.disabled = false;
	}
}

function criptografar(event){
	
	var frase = input.value;
	var key = document.querySelector('.key-input').value;
	output.write(cipher.encrypt(frase,key));
	
}

	

