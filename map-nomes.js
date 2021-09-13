let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

//Padronizando nomes.

//map: percorre uma array e dentro da função map() passamos o que deve ser feito
const nomesAtualizos = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizos)


//diferença entre o método map() e forEach():
// Enquanto o método forEach não tem um retorno, o método map() pode retornar um 
//array se a função informada tiver um return em seu escopo.