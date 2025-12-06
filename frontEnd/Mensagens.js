function addMensagem(identificador,mensagem) {
    let className = "";
    
    if(identificador === "usuario"){
        className = "usuario-msg";
    } else if(identificador === "bot"){
        className = "bot-msg";
    }else{
        console.error("Identificador desconhecido:", identificador);
        return;
    }

    const mensagemElemento = document.createElement('li');
    mensagemElemento.classList.add('mensagem', className);
    mensagemElemento.textContent = mensagem;

    const listaMensagens = document.getElementById('lista-mensagens'); 
    listaMensagens.appendChild(mensagemElemento);
    
    console.log("Mensagem adicionada:", mensagemElemento);
   
}