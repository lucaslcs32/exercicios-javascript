function menu() {
    return parseInt(prompt(
        "--Calculadora Geométrica--\n\n" +
        "1. Área do Triângulo\n" + 
        "2. Área do Retângulo\n" + 
        "3. Área do Quadrado\n" + 
        "4. Área do Trapézio\n" + 
        "5. Área do Círculo\n" +
        "6. Sair\n\n" + 
        "Escolha uma opção:"))
}

function areaTriangulo() {
       const base = parseFloat(prompt("Insira o valor da base:"))
       const altura = parseFloat(prompt("Insira o valor da altura:"))
    return base * altura / 2
}
function areaRetangulo() {
    const base = parseFloat(prompt("Insira o valor da base:"))
    const altura = parseFloat(prompt("Insira o valor da altura:"))
    return base * altura
}
function areaQuadrado() {
    const lado = parseFloat(prompt("Insira o valor do lado:"))
    return lado ** 2
}
function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Insira o valor da base maior:"))
    const baseMenor = parseFloat(prompt("Insira o valor da base menor:"))
    const altura = parseFloat(prompt("Insira o valor da altura:"))
    return (baseMaior + baseMenor) * altura / 2
}
function areaCirculo() {
    const pi = 3.14
    const raio = parseFloat(prompt("Insira o valor do raio:"))
    return pi * raio ** 2
}

function executarOpcao(opcao) {
    switch (opcao) {
        case 1:
            alert("Resultado: " + areaTriangulo() + "m²")
            break
        case 2:
            alert("Resultado: " + areaRetangulo() + "m²")
            break
        case 3:
            alert("Resultado: " + areaQuadrado() + "m²")
            break
        case 4:
            alert("Resultado: " + areaTrapezio() + "m²")
            break
        case 5:
            alert("Resultado: " + areaCirculo() + "m²")
            break
        case 6:
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")
            break
    }
}

function main() {
    let opcao
    do {
        opcao = menu()
        executarOpcao(opcao)
    } while (opcao !== 6)
}

main()