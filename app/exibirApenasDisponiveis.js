const bntLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
bntLivrosDisponiveis.addEventListener('click', exibirApenasDisponiveis)

const elementoValorTotalLivros2 = document.getElementById('valor_total_livros_disponiveis')

function exibirApenasDisponiveis() {
    let livrosDisponiveis = livrosComDesconto.filter(livro => livro.quantidade > 0)
   
    exibirLivros(livrosDisponiveis)
    exibirValorTotalLivrosDisponiveis(livrosDisponiveis)

}

function exibirValorTotalLivrosDisponiveis(livrosDisponiveis) {
    let valorTotal = livrosDisponiveis.map(livro => livro.preco).reduce((a, b) => a + b)
    
    elementoValorTotalLivros2.innerHTML = `   
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
        </div>
    `
} 
