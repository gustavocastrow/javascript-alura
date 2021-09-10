const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//Somando notas
for(let i = 0; i <notas.length; i++){
  somaDasNotas += notas[i];
}

let medias = somaDasNotas / notas.length;

console.log(`A soma das notas foi: ${somaDasNotas}`)
console.log(`A média das notas foi: ${medias}`)