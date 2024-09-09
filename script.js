// Adiciona um evento de clique à carta fechada
document.querySelector('.carta-fechada').addEventListener('click', function() {
    // Alterna a visibilidade do conteúdo da carta
    this.classList.toggle('carta-aberta');
  });