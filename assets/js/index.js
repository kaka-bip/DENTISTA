function marcar(Restauração) {
  let telefone = "5575991890654";
  let mensagem = `Olá, boa tarde! Gostaria de marcar um horário para fazer o tratamento:  ${Restauração}`;
  let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blanck");
}
