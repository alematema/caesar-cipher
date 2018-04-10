
var historico = document.querySelector('#history-box');

historico.atualizar = atualizar;

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