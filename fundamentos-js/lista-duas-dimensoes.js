const alunos = ['Joao', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

//Lista de duas dimensões

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
//                           array nomes/array nomes posicao 0               array notas/array notas posicao 0
console.log(`Olá ${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)

console.log(listaDeNotasEAlunos)