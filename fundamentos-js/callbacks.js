const nomes = ['Ana', 'Ju', 'Leo', 'Paula']

//Utilizando uma função externa no forEach.
nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
  console.log(nome)
}

//Utilizando uma função direto no forEach
nomes.forEach(nome => console.log(nome))


