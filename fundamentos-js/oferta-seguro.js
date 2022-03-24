const cliente = {
    nome: "André",
    idade : 36,
    cpf: "123456",
    email: "andre@gmail.com",
    fones: ["5512981140199", "55129841524"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    },
    {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"

    }
    ],
    saldo: 100,
    depositar: function(valor){ //metodo
        this.saldo += valor //cliente.saldo += valor
    }
}


function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj) //retorna todas as chaves do objeto cliente
    console.log(propsClientes)

    if (propsClientes.includes("dependentes")){ //verifica se no array existe determinado dado
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    } 
}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)

