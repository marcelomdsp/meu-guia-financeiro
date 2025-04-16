const busca = document.getElementById('busca');
const produtos = document.querySelectorAll('.produto');
const mensagemVazia = document.getElementById('mensagem-vazia');

busca.addEventListener('input', () => {
  const termo = busca.value.toLowerCase();
  let encontrados = 0;

  produtos.forEach(produto => {
    const titulo = produto.querySelector('h2').textContent.toLowerCase();
    const descricao = produto.querySelector('p').textContent.toLowerCase();
    const corresponde = titulo.includes(termo) || descricao.includes(termo);

    if (corresponde) {
      produto.classList.remove('oculto');

      // Remove a animação antiga e força reflow
      produto.classList.remove('animado');
      void produto.offsetWidth; // "reflow" para reiniciar animação
      produto.classList.add('animado');

      encontrados++;
    } else {
      produto.classList.add('oculto');
    }
  });

  if (encontrados === 0) {
    mensagemVazia.classList.add('visivel');
  } else {
    mensagemVazia.classList.remove('visivel');
  }
});

