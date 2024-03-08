const bntLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
bntLivrosDisponiveis.addEventListener('click', exibirApenasDisponiveis)

function exibirApenasDisponiveis() {
    let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
    exibirLivros(livrosDisponiveis)
}