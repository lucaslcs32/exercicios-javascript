const listaImoveis = []
let menu = 0

do {
    menu = parseInt(prompt(
        "Quantidade de Imóveis Cadastrados: " + listaImoveis.length + "\n\n" +
        "1. Salvar um imóvel\n" +
        "2. Exibir imóveis salvos\n" +
        "3. Deletar um imóvel\n" +
        "4. Sair\n"
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
                alert("Ação cancelada! Retornando ao menu.")
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
            if (listaImoveis.length <= 0) {
                alert("Lista de imóveis vazia! Cadastre imóveis para deletar.")
            } else {
                const indiceImovel = parseInt(prompt("Insira o número do imóvel a ser deletado:")) - 1
                if (isNaN(indiceImovel) || indiceImovel < 0 || indiceImovel > listaImoveis.length - 1) {
                    alert("Insira um índice válido!")
                } else {
                    const confirmarDeletar = confirm(
                        "Deseja mesmo remover este imóvel?\n" +
                        "\nProprietário: " + listaImoveis[indiceImovel].nome +
                        "\nQuartos: " + listaImoveis[indiceImovel].quartos +
                        "\nBanheiros: " + listaImoveis[indiceImovel].banheiros +
                        "\nGaragem: " + listaImoveis[indiceImovel].garagem
                    )
                    if (confirmarDeletar) {
                        listaImoveis.splice(indiceImovel, 1)
                        alert("Imóvel deletado com sucesso!")
                    } else {
                        alert("Ação cancelada! Retornando ao menu.")
                    }
                }
            }
            break
        case 4:
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")
            break
    }

} while (menu !== 4) 