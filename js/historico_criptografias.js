
var historico = document.querySelector('#history-box');
var listaDeCriptografias = document.querySelector('#lista-criptografias');

historico.atualizar = atualizar;
historico.listaDeCriptografias = listaDeCriptografias;
historico.addCriptografia = addCriptografia;
listaDeCriptografias.criarCriptografia = criarCriptografia;
function atualizar(){
	
	if (document.getElementById('lista-criptografias').children.length > 0){
			
			document.querySelector('#lista-criptografias').classList.remove('invisivel');
			document.querySelector('.sem-historico-criptografias').classList.add('invisivel');
			document.querySelector('.sem-historico-msgm').classList.add('invisivel');
			
			document.querySelector('.pesquisar-historico-input').disabled = false;
		
			
		}else{
			
			document.querySelector('#lista-criptografias').classList.add('invisivel');
			document.querySelector('.sem-historico-criptografias').classList.remove('invisivel');
			document.querySelector('.sem-historico-msgm').classList.remove('invisivel');
			
			document.querySelector('.pesquisar-historico-input').disabled = true;
			
		}
	
}

function addCriptografia(criptografia, fonte){
	
	historico.listaDeCriptografias.criarCriptografia(criptografia, fonte);
	historico.atualizar();
	
}

function criarCriptografia(criptografia, fonte){
					
	var li = document.createElement('li');
	li.classList.add('item-criptografado');
	var img = document.createElement('img');
	img.id = 'chave-digital-criptografia';
	img.src = 'img/rsz_digital-encry-key.jpg';
	li.appendChild(img);
	li.appendChild(document.createElement('hr'));
	var div = document.createElement('div');
	div.classList.add('resumo-item-criptografado');
	var p = document.createElement('p');
	var innerHtml = '<strong>FRASE</strong>'+ fonte.join('') + '<br>'+
									'<strong>CRIPTO</strong>'+ criptografia.join('')+'<br>'+
									'<small>'+ 'data aqui' + '</small>';
	p.innerHTML = innerHtml;
	div.appendChild(p);
	li.appendChild(div);
	li.appendChild(document.createElement('hr'));
	var span = document.createElement('span');
	span.classList.add('mais-info-item-criptografado');
	span.innerHTML = '⋮';
	li.appendChild(span);
	this.appendChild(li);
	this.appendChild(document.createElement('hr'));
	
}