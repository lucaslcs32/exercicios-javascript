const cartas = []
let op = 0

do {
    op = parseInt(prompt(
        "Quantidade de Cartas: " + cartas.length + "\n" +
        "\n1. Adicionar uma carta" +
        "\n2. Puxar uma carta" +
        "\n3. Sair"
    ))

    switch(op) {
        case 1:
            const cartaAdicionada = prompt("Qual o nome da carta?")
            if(!cartaAdicionada) {
                alert("O nome não pode ficar em branco!")
            } else {
                cartas.unshift(cartaAdicionada)
                alert(cartaAdicionada + " adicionado(a) ao topo do baralho!")
            }
            break
        case 2:
            if (cartas.length > 0) {
                const cartaRetirada = cartas.shift()
                alert("Você puxou o(a) " + cartaRetirada + " do topo do baralho!")
            } else {
                alert("Adicione cartas primeiro!")
            }
            break
        case 3:
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")
            break
    }

} while (op !== 3) 