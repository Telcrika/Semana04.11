const comidas = ['lasanha','Batata','Bacon']


console.log(comidas[2]);

comidas.forEach((comida, posicao) => {
    console.log(`Na posicao ${posicao} temos a comida: ${comida}`);
   
})

 //usando concat vc pode adicionar itens ao array, no entanto o nome da variável que armazena os itens será alterado.
    //ex: let outrasComidas = comidas.concat("Jiló")

//usando join vc cria uma string do array e ele utiliza o argumento como separador
//ex: let stringArray = comidas.join(" , ") ou vc pode usar tbm ("...")

//usando o shift ele arranca o primeiro valor do array, modificando a variável. Sua declaração dá-se diretamente, sem declaração de variável
//ex: console.log(comidas.shift())

//usando o pop ele executa a mesma função do shift,mas arranca o último elemento. A sintaxe é a mesma - console.log(comidas.pop())
//para adicionar um item na primeira posição é só usar unshift - comidas.unshift("Macarrão")
//para adicionar um item na ultima posição, usar push
//para inverter o array, usar o reverse - comidas.reverse()
//usando o slice, vc pode pegar os itens a partir de um certo ponto do array ex: let cortarComida = comidas.slice(1,2)
// o splice pode remover e adicionar valores utilizando posição, índice de apagar,
comidas.splice(1, 0, "alface")//ele vai adicionar a alface a partir da primeira posição
console.log(comidas);

// o sort, coloca o array em ordem
//indexOf
//lastIndexOf
//map, mapeia o array e adiciona algo a mais
let mapArray= comidas.map((comida) => `${comida} Gostosa`)
console.log(mapArray);

//filter, filtra o array e faz um comparativo do que vc deseja encontrar
let arrayProcura = comidas.filter((comida) => comida === 'Batata')
console.log(arrayProcura);

//reduce
let juntaComida = comidas.reduce()

//find e findIndex
console.log(numeros.find(numero => numero === -1));
console.log(numeros.findIndex(numero => numero === 9));

//every
menorQueDez = (algumValor) => algumValor < 10
console.log(numeros.every(numero => menorQueDez(numero)))







