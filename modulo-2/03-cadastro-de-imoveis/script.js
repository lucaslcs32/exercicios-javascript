const listaImoveis = []
let menu = 0

do {
    menu = parseInt(prompt(
        "Quantidade de Imóveis Cadastrados: " + listaImoveis.length + "\n\n" +
        "1. Salvar um imóvel\n" +
        "2. Exibir imóveis salvos\n" +
        "3. Sair\n"
    ))

    switch (menu) {
        case 1:
            const imovel = {}
            imovel.nome = prompt("Insira o nome do proprietário:")
            imovel.quartos = parseInt(prompt("Insira a quantidade de quartos do imóvel:"))
            imovel.banheiros = parseInt(prompt("Insira a quantidade de banheiros:"))
            imovel.garagem = prompt("Insira se o imóvel possui ou não garagem (Sim/Não):")
            const cadastrarImovel = confirm(
                "Deseja cadastrar esse imóvel?\n" +
                "\nNome do proprietário: " + imovel.nome +
                "\nQuantidade de quartos: " + imovel.quartos +
                "\nQuantidade de banheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem
            )
            if (cadastrarImovel) {
                listaImoveis.push(imovel)
                alert("Imóvel cadastrado com sucesso!")
            } else {
                alert("Cadastro cancelado! Retornando ao menu.")
            }
            break
        case 2:
            if (listaImoveis.length <= 0) {
                alert("Lista de imóveis vazia! Cadastre imóveis antes de exibir.")
            } else {
                for (let i = 0; i < listaImoveis.length; i++) {
                    alert(
                        "Imóvel nº" + (i + 1) + "\n" +
                        "\nProprietário: " + listaImoveis[i].nome +
                        "\nQuartos: " + listaImoveis[i].quartos +
                        "\nBanheiros: " + listaImoveis[i].banheiros +
                        "\nGaragem: " + listaImoveis[i].garagem
                    )
                }
            }
            break
        case 3:
            break
        default:
            alert("Opção Inválida!")
            break
    }

} while (menu !== 3) 