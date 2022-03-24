class Cliente{
    //Definindo atributos a serem recebidos na construção do objeto
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    //Definindo os métodos do Cliente
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(`Seu saldo é de ${this.saldo}`)
    }
}

//Criando um novo cliente

const gustavo = new Cliente("Gustavo", "gustavo@gmail.com", "4225233242", 200)

gustavo.exibirSaldo()