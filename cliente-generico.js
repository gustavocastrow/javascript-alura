function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf 
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}


const andre = new Cliente("André", "1234568910","andre@gmail.com", 3000)

console.log(andre)