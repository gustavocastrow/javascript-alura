const clientes = [
    {
        nome: "André",
        cpf: "5645454545485",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }]
    },
    {
        nome: "Juliana",
        cpf: "58957428",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/02/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)




