const cliente = {
    nome: "André",
    idade : 36,
    cpf: "123456",
    email: "andre@gmail.com"
}

console.log(cliente);
cliente.fone = "3432432423423"
console.log(cliente);

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined


const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
}

pessoa.seguroSocial = "55555"
pessoa.cpf = "33423433232"
console.log(pessoa.cpf.substring(0, 4))