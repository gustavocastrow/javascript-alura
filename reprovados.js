const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]


//método: "nomes.filter" -> no caso filter é o método
//parametro: o vai dentro do filter
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)
console.log(`Reprovados: ${reprovados}`)

