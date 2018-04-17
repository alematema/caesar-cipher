var header = document.querySelector('#header');
var btnCriptografar = document.querySelector('#btn-criptografar');
var input = document.querySelector('#input');
var output = document.querySelector('#output');
var fraseCriptografadaContainer = document.querySelector('#frase-criptografada-container');
var fraseDoInputContainer = document.querySelector('#frase-do-input-container');
var myInterval;
var criptoArrayGB, srcArrayGB;
var init = new Date().getTime();
var i = 0; //controla duration de  duracaoCriptoUmaLetra ms 
var j = 0; // indice para navegar 1 letra do array a cada duracaoCriptoUmaLetra ms
var duracaoCriptoUmaLetra = 2000;

header.clear = clear;
header.restore = restore;
header.writeOut = writeOut;
btnCriptografar.criptografar = criptografar;
input.atualizarBotaoCriptografar = atualizarBotaoCriptografar;
output.write = write;
output.writeSrc = writeSrc;
output.fraseCriptografadaContainer = fraseCriptografadaContainer;
output.fraseDoInputContainer = fraseDoInputContainer;
output.addLetraCriptografada = addLetraCriptografada;
output.selecionarLetra = selecionarLetra;
output.deselecionarLetra = deselecionarLetra;
fraseCriptografadaContainer.toCharArray = toCharArray;
fraseCriptografadaContainer.limpar = limpar;
fraseDoInputContainer.getLetra = getLetra;
fraseDoInputContainer.limpar = limpar;



function limpar() {
	while (this.firstChild) {
		this.removeChild(this.firstChild);
	}
}

function toCharArray() {

	var charArray = [];

	for (var i = 0; i < this.children.length; i++) {

		charArray.push(this.children[i].textContent);

	}

	return charArray;

}


function addLetraCriptografada(letra) {


	var fraseArray = fraseCriptografadaContainer.toCharArray();
	fraseArray.push(letra);

	fraseCriptografadaContainer.limpar();

	var span;

	fraseArray.forEach(char => {

		span = newSpan(char, 'letra');
		fraseCriptografadaContainer.appendChild(span);

	});

	if (span) span.classList.add('selecionada');


}

function getLetra(indexLetra) {
	return this.children[indexLetra];
}

function newSpan(char, cssClass) {

	var span = document.createElement('span');
	span.classList.add(cssClass);
	span.textContent = char;

	return span;

}

function clear() {

	document.getElementById('some-text').textContent = '';
	input.classList.add('invisivel');
	document.querySelector('.lock-key').textContent = '';
	document.querySelector('.key-input').classList.add('invisivel');
	btnCriptografar.classList.add('invisivel');

}

function restore() {

	document.getElementById('some-text').textContent = 'Caesar Cipher';
	input.classList.remove('invisivel');
	input.value = '';
	document.querySelector('.lock-key').innerHTML = '&#128272;';
	document.querySelector('.key-input').classList.remove('invisivel');
	btnCriptografar.classList.remove('invisivel');
	input.atualizarBotaoCriptografar();

}

function writeOut(string) {

	document.getElementById('some-text').textContent = string;

}

function writeSrc(srcArray) {


	srcArray.forEach(char => {

		fraseDoInputContainer.appendChild(newSpan(char, 'letra-input'));

	});

	output.selecionarLetra(0);

}

function write(criptoArray, srcArray) {

	output.writeSrc(srcArray);

	header.clear();
	header.writeOut('Criptografando...');

	document.querySelector('.cipher-engine-gif').classList.remove('invisivel');
	document.querySelector('#letra-em-criptografia').classList.remove('invisivel');
	document.querySelector('#letra-em-criptografia').textContent = srcArray[0];
	document.querySelector('#letra-em-criptografia').style.animationPlayState = 'paused';

	criptoArrayGB = criptoArray;
	srcArrayGB = srcArray;

	init = new Date().getTime();

	myInterval = setInterval(myFn, 10);

}

function selecionarLetra(indexLetra) {

	var span = this.fraseDoInputContainer.getLetra(indexLetra);
	if (span) span.classList.add('selecionada-input');

}

function deselecionarLetra(indexLetra) {
	var span = this.fraseDoInputContainer.getLetra(indexLetra);
	if (span) span.classList.remove('selecionada-input');
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
		output.deselecionarLetra(j);
		j++;
		output.selecionarLetra(j);
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
		header.restore();
		fraseDoInputContainer.limpar();
		fraseCriptografadaContainer.limpar();
		historico.addCriptografia(criptoArrayGB, srcArrayGB);
		setTimeout(function () {
			
		}, 1500);

	}

}

function atualizarBotaoCriptografar(event) {
	if (input.value.trim() == '') {
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
