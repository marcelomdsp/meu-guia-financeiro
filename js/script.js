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

    produto.classList.toggle('oculto', !corresponde);
    if (corresponde) encontrados++;
  });



  if (encontrados === 0) {
    mensagemVazia.classList.add('visivel');
  } else {
    mensagemVazia.classList.remove('visivel');
  }
   
});
