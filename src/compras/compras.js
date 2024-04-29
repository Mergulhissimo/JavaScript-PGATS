function calcularTotal(ferramentas, comprar){

    let total = 0
    let comprados = []
    let itensNaoEncontrados = []

    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    }

    for (let i = 0; i < ferramentas.length; i++) {
        for (let j = 0; j < comprar.length; j++) {
            if (ferramentas[i].nome === comprar[j]) {
                total += ferramentas[i].preco
                comprados.push(ferramentas[i].nome)
            }
        }
    }

    if (comprados.length > 0 && comprados.length < comprar.length) {
        itensNaoEncontrados = comprar.filter(item => !comprados.includes(item))
        throw new Error("Não foi possível comprar o(s) seguinte(s) item(s): " + itensNaoEncontrados)
    }else if (comprados.length === 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.")
    }else{
        return (`O valor a pagar pelas ferramentas (${comprados.join(', ')}) é R$ ${total}.00`)
    }
}

module.exports = {
calcularTotal
}