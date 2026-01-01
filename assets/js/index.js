//área de tratamentos

function marcar(Restauração) {
  let telefone = "5575991890654";
  let mensagem = `Olá, boa tarde! Gostaria de marcar um horário para fazer o tratamento:  ${Restauração}`;
  let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blanck");
}

function marcar(aparelho){
  let telefone = "5575991890654"
  let mensagem = `Olá, boa tarde! Gostaria de marcar um horário para fazer o tratamento:  ${aparelho}`
  let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank')
}

// área de contato

function enviar(){
  let nome = document.getElementById('cliente-nome')
  let mensagem = document.getElementById('cliente-msg')
  let telefone = "5575991890654"
  let email = "odomed2026@gmail.com"

  if(nome === "" || mensagem === ""){

  }

}


//animação

function mostrarStatus(tipo) {
    const overlay = document.getElementById('status-overlay');
    const container = document.getElementById('icon-container');
    const titulo = document.getElementById('status-titulo');
    const msg = document.getElementById('status-msg');

    overlay.style.display = 'flex';
    container.className = tipo === 'sucesso' ? 'success-icon' : 'error-icon';
    
    if (tipo === 'sucesso') {
        titulo.innerText = "Enviado!";
        msg.innerText = "Sua mensagem foi para o Zap e E-mail.";
    } else {
        titulo.innerText = "Erro!";
        msg.innerText = "Preencha todos os campos.";
    }
}

function fecharStatus() {
    document.getElementById('status-overlay').style.display = 'none';
}

// Na sua função de enviar:
function enviarMensagemDupla() {
    let nome = document.getElementById('cliente_nome').value;
    if (nome === "") {
        mostrarStatus('erro');
        return;
    }
    
    // Se der tudo certo:
    mostrarStatus('sucesso');
    // ... restante do código do Zap e E-mail ...
}