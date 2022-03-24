const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo']

//Remova elementos de qualquer lugar do array, e adicione elementos
//em qualquer lugar no array.

//1. Parametro: qual indice irá comecar
//2. Parametro: números de elementos que será removido (caso passe 0, não sera removido nenhum elemento do array)
//3. Parametro: Novo elemento a ser adicionado **opcional**

listaDeChamada.splice(1,2, 'Rodrigo')
console.log(`Nova lista de chamada ${listaDeChamada}`)

animaisDoAquario = ['Baleia', 'Lula', 'GOlfinho', 'TUbarao']
//animaisDoAquario = ['Baleia', 'Lula', 'Peixe Amarelo', 'Golfinho', 'Tubarao']
animaisDoAquario.splice(1,0,'Peixe Amarelo')

//animaisDoAquario = ['Baleia', 'Lula', 'Peixe Amarelo', 'Golfinho', 'Tubarao']
animaisDoAquario.splice(3,2,'Peixe Azul')

//animaisDoAquario = ['Baleia', 'Lula', 'Peixe Amarelo', 'Peixe Azul']
console.log(animaisDoAquario)
