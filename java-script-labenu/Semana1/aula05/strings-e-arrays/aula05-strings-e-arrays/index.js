
// const nome = 'Patricia'
// const idade = 36
// const frase = ('Ola meu é ' + nome + ' e tenho ' + idade + ' anos')
//  const frase = (`Ola meu é ${nome} e tenho ${idade} anos`)
// console.log(frase)


// EXERCICIO 1

// const nomeUsuario =prompt('Digite seu nome')
// const corFavorita =prompt('Qual a sua cor favorita?')
// console.log(`A cor favorita de ${nomeUsuario} é ${corFavorita}`)

// const nome = 'Patricia'
// const nomeComEspaco = " Patricia Dias "
// const fraseCenoura = ' Hoje eu comi cenoura'

// console.log(nome.length) // ve o tamanho
// console.log(nome.toLowerCase()) // tudo minusculas
// console.log(nome.toUpperCase()) // tudo maiusculas
// console.log(nomeComEspaco.trim()) // tira os espaços
// console.log(nomeComEspaco)
// console.log('Tem Baldez?' , nome.includes('Baldez')) //false verifica se tem o baldez
// console.log(fraseCenoura.replaceAll('cenoura', 'chocolate')) // substitui cenoura por chocolate.

// const fraseUsuario = prompt('Digite uma frase')
// const fraseModificada = fraseUsuario.toUpperCase()
// .replaceAll('A', 'I')
// .replaceAll('E', 'I')
// .replaceAll('I', 'I')
// .replaceAll('O', 'I')
// .replaceAll('U', 'I')
// .replaceAll('Ô', 'I')

// console.log(fraseModificada)
// console.log('Tamanho da frase: ', fraseModificada.length)


// Array

// const listaFilmes = [ 'Rei Leão', 'Patrulha canina', 'Galinha pintadinha']
// console.log(listaFilmes)
// console.log(listaFilmes[1]) // Patrulha canina
// console.log(listaFilmes[0]) // Rei Leao
// console.log(listaFilmes[3]) // undefined
// console.log(listaFilmes[2]) // Galinha pintadinha

//EXERCICIOS 3

// const cachorros = ['vira-lata', 'pooble', 'pug', 'husky', 'yorkshire']
// const numeroUsuario = Number(prompt('Digite um numero de 1 a 5'))

// console.log(cachorros [ numeroUsuario -1] )

// const pokemons = ['bulbassauro','squirtle', 'chamander']
// console.log(pokemons) // ve o tamanho da lista
// console.log(pokemons.length) // ve o tamanho da lista

// pokemons.push('Novo item')// adciona novo item na lista
// console.log(pokemons)

// pokemons.pop()// tira ultimo item da lista
// console.log(pokemons)

// console.log(pokemons.includes('bulbassauro'))// true
// console.log(pokemons.includes('paty')) // false

// const arrayDeNumeros = [1,2,3,4,5,6,7,9,10]
// arrayDeNumeros.splice(3,4) // 0,1,2,3,4,5,6,7,8,9,10 exclui o item que esta na posição 3 ate a posição 4
// console.log(arrayDeNumeros)

// const listaDeCompras = ['batata', 'cebola', 'cenoura', 'banana']
// listaDeCompras.splice(2,1)
// console.log(listaDeCompras)

// EXERICIOS
const arrayNumeros = [1,2,3,4,5,6]
console.log('Tamanho do array:',arrayNumeros.length)
arrayNumeros.push(7)
console.log(arrayNumeros)
arrayNumeros.splice(3,2)
console.log(arrayNumeros)

console.log('Tamanho do novo array: ',arrayNumeros.length)


// EXTRA
//ACESSAR O ULTIMO ITEM DA LISTA

const lista = ['vermelho', 'azul', 'amarelo']
const tam = lista.length
const ultimaPosicao = tam - 1
console.log(lista[ultimaPosicao])