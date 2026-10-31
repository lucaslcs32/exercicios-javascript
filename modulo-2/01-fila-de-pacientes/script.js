const listaPacientes = []
let op = 0

do {
    let paciente = ""
    for(let i = 0; i < listaPacientes.length; i++) {
        paciente += "\n" + (i + 1) + "º " + listaPacientes[i]
    } 

    op = parseInt(prompt("Lista de Pacientes: " + paciente + "\n\n" +
        "1. Novo Paciente \n" +
        "2. Consultar Paciente \n" +
        "3. Sair"))

    switch (op) {
        case 1:
            const nomePaciente = prompt("Insira o nome do paciente para adicionar a fila:")
            listaPacientes.push(nomePaciente)
            alert("Paciente " + nomePaciente + " adicionado ao fim da fila!")
            break
        case 2:
            // confirm("Deseja mesmo consultar o paciente ----?")
            if (listaPacientes.length > 0) {
                const pacienteConsultado = listaPacientes.shift()
                alert("O(A) paciente " + pacienteConsultado + " foi consultado(a)!")
            } else {
                alert("Adicione pacientes a fila primeiro!")
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