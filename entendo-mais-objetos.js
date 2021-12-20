const pessoa = {
    nome: "Ana",
    email: "ana@gmail.com",
    imprimeNome: function(){
        //Fazendo referência ao próprio objeto => pessoa.nome
        console.log(`Imprimendo nome sem o This ${pessoa.nome}`)

        //Substituindo o objeto por THIS
        console.log(`Imprimindo utilizando o This ${this.nome}`)
    }
}

pessoa.imprimeNome()



function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}


const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
   }
   
   pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
   pessoa2.imprimeInfo()
   //nome: Paula, email p@email.com


   function Pessoa(nome, email){
       this.nome = nome
       this.email = email
       this.imprimeNomeEmail = function(){
           console.log(`nome: ${this.nome}, email: ${this.email}`)
       }
   }

   //É possível manipular os valores de THIS e o JavaScript tem três métodos para isso:
   
   //call() -> Esse MÉTODO permite que uma função seja chamada com parâmetros e valor de THIS específicos
   //primeiro parâmetro: objeto que será usado como contexto do THIS
   //segundo parâmetro: argumentos padrão que a função deve receber


   function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }

   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com


//apply() -> O método apply funciona de forma parecida com o call(), porém recebe os arumentos em um array
//ao invés de separados.

function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }
   


//Chamando imprimeNomeEmail com o método apply() e passando um array de dados como segundo parâmetro 
//(lembrando que o primeiro parâmetro de apply() se refere ao contexto de this, igual ao método call():

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]


imprimeNomeEmail.apply(cliente1, clienteEspecial) // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com
imprimeNomeEmail.apply(cliente2, clienteEstudante) // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com

//bind() -> esse método ele "prende" ou "liga" uma função ao contexto de um objeto, por exemplo:

const personagem = {
    nome: "Princesa Leia", //propriedade
    apresentar: function(){ //método
        return `A personagem é ${this.nome}`
    }
}


const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined