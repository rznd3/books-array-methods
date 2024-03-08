const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco() {
    livrosOrdenados = livrosComDesconto.sort((a, b) => a.preco - b.preco)

    exibirLivros(livrosOrdenados)
}