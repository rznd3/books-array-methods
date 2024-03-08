const elementoInserirLivros = document.getElementById('livros')

function exibirLivros(listaLivros) {

    let disponibilidade = ''

    listaLivros.forEach(livro => {

        (livro.quantidade <= 0) ? disponibilidade = 'indisponivel' : disponibilidade = ''

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