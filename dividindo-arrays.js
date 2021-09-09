const nomes = ['João', 'Juliana','Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme',
'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius',
'Renan', 'Renata', 'Daisy', 'Camilo']
                          //0, 10
const sala1 = nomes.slice(0, nomes.length/2)
                          //10
const sala2 = nomes.slice(nomes.length/2)

console.log(`Sala 01: ${sala1}`)
console.log(`Sala 02: ${sala2}`)