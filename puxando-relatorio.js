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


let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else {
        relatorio += ` 
        ${info} -> ${cliente[info]}`
    }
    
}

console.log(relatorio)
