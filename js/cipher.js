var btnCriptografar = document.querySelector('#btn-criptografar');
var input = document.querySelector('#input');
var output = document.querySelector('#output');
var fraseCriptografadaContainer = document.querySelector('#frase-criptografada-container');
var myInterval;
var criptoArrayGB, srcArrayGB;
var init = new Date().getTime();
var i = 0; //controla duration de  duracaoCriptoUmaLetra ms 
var j = 0; // indice para navegar 1 letra do array a cada duracaoCriptoUmaLetra ms
var duracaoCriptoUmaLetra = 2000;


btnCriptografar.criptografar = criptografar;
input.atualizarBotaoCriptografar = atualizarBotaoCriptografar;
output.write = write;
output.fraseCriptografadaContainer = fraseCriptografadaContainer;
output.addLetraCriptografada = addLetraCriptografada;
fraseCriptografadaContainer.toCharArray = toCharArray;

function toCharArray(){
	
	var charArray=[];
	
	for(var i = 0; i < this.children.length; i++){
		
		
		charArray.push(this.children[i].textContent);
		
	}
	
	return charArray;
	
}


function addLetraCriptografada(letra) {


	var fraseArray = fraseCriptografadaContainer.toCharArray();
	fraseArray.push(letra);

	while (fraseCriptografadaContainer.firstChild) {
		fraseCriptografadaContainer.removeChild(fraseCriptografadaContainer.firstChild);
	}

	var span;

	fraseArray.forEach(char => {

		span = getSpan(char);
		fraseCriptografadaContainer.appendChild(span);

	});

	if (span) span.classList.add('selecionada');


}

function getSpan(char) {

	var span = document.createElement('span');
	span.classList.add('letra');
	span.textContent = char;

	return span;

}

function write(criptoArray, srcArray) {

	console.log(criptoArray.join(''));
	console.log(srcArray.join(''));
	document.querySelector('.cipher-engine-gif').classList.remove('invisivel');
	document.querySelector('#letra-em-criptografia').classList.remove('invisivel');
	document.querySelector('#letra-em-criptografia').textContent = srcArray[0];
	document.querySelector('#letra-em-criptografia').style.animationPlayState = 'paused';

	criptoArrayGB = criptoArray;
	srcArrayGB = srcArray;

	init = new Date().getTime();



	myInterval = setInterval(myFn, 10);


}


function myFn() {

	document.querySelector('#letra-em-criptografia').style.animationPlayState = 'running';

	var interval = (new Date().getTime() - init);

	if ((interval % duracaoCriptoUmaLetra) < (duracaoCriptoUmaLetra / 2) - 1) {

		document.querySelector('#letra-em-criptografia').textContent = srcArrayGB[j];
		document.querySelector('#letra-em-criptografia').classList.remove('letra-criptografada');
		document.querySelector('#letra-em-criptografia').classList.add('letra-sendo-criptografada');

	} else {

		document.querySelector('#letra-em-criptografia').textContent = criptoArrayGB[j];
		document.querySelector('#letra-em-criptografia').classList.remove('letra-sendo-criptografada');
		document.querySelector('#letra-em-criptografia').classList.add('letra-criptografada');

	}

	i += 10;

	if (i >= duracaoCriptoUmaLetra) {


		output.addLetraCriptografada(criptoArrayGB[j]);

		i = 0;
		j++;
		if (j >= srcArrayGB.length) j = 0;
	}

	if (interval > duracaoCriptoUmaLetra * srcArrayGB.length) {
		clearInterval(myInterval);
		document.querySelector('.cipher-engine-gif').classList.add('invisivel');
		document.querySelector('#letra-em-criptografia').classList.remove('letra-criptografada');
		document.querySelector('#letra-em-criptografia').classList.add('letra-sendo-criptografada');
		document.querySelector('#letra-em-criptografia').classList.add('invisivel');
		i = 0; //controla duration de duracaoCriptoUmaLetra ms 
		j = 0; // indice para navegar 1 letra do array a cada duracaoCriptoUmaLetra ms
	}

}

function atualizarBotaoCriptografar(event) {
	if (event.srcElement.value.trim() == '') {
		btnCriptografar.disabled = true;
	} else {
		btnCriptografar.disabled = false;
	}
}

function criptografar(event) {

	var frase = input.value;
	var key = document.querySelector('.key-input').value;
	output.write(cipher.encrypt(frase, key), frase.split(''));

}
