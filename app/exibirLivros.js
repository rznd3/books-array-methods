const elementoInserirLivros = document.getElementById('livros')
const elementoValorTotalLivros = document.getElementById('valor_total_livros_disponiveis')

function exibirLivros(listaLivros) {
    console.log('exibir')
    elementoInserirLivros.innerHTML = ''
    elementoValorTotalLivros.innerHTML = ''

    
    listaLivros.forEach(livro => {
        
        let disponibilidade = (livro.quantidade <= 0) ? 'indisponivel' : ''
        
        elementoInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${parseFloat(livro.preco.toFixed(2))}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `
    })
    
}