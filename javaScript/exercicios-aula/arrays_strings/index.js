console.log("Bom dia!")

// Concatenação de Strings
// const nome = "Cassiano"
// const idade = 27
// const outroNumero = 1

// const soma = idade + outroNumero

// const frase = "Oi! Meu nome é " + nome + ", eu tenho " + (idade + outroNumero) + " anos"
// const frase2 = `Oi! Meu nome é ${nome}, eu tenho ${idade + outroNumero} anos`

// console.log("Concatenação:", frase)
// console.log("Template String:", frase2)

// const nome = "Letícia Alves Chijo"
// const nomeComEspaco = "  Letícia Alves Chijo  "
// const fraseCenoura = "Hoje eu comi cenoura, adoro cenoura"
// const fraseBatata = fraseCenoura.replaceAll("cenoura", "batata")
// const novaFrase = fraseBatata.replaceAll("adoro", "amo")
// const maisUmaFrase = fraseCenoura.toLowerCase().replaceAll("cenoura", "batata").replaceAll("adoro", "amo")

// console.log(nome.length)
// console.log(nome.toLowerCase())
// console.log(nome.toUpperCase())
// console.log(nomeComEspaco)
// console.log(nomeComEspaco.trim())

// console.log("Tem Alves?", nome.includes("Alves"))
// console.log("Tem Batata?", nome.includes("Batata"))

// console.log(fraseBatata)
// console.log(fraseCenoura)
// console.log(novaFrase)


// ---- ARRAYS
// const listaDeJogos = ["Mario", "Hollow Knight", "Undertale"]
// console.log(listaDeJogos[1])
// console.log(listaDeJogos)



// const pokemons = ["bulbassauro", "squirtle", "charmander"]
// console.log(pokemons.length)
// console.log(pokemons)

// pokemons.push("pikachu")
// console.log(pokemons)

// pokemons.pop()
// pokemons.pop()
// console.log(pokemons)

// console.log("Tem bulba?", pokemons.includes("bulbassauro"))
// console.log("Tem Mew?", pokemons.includes("mewtwo"))

// const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arrayDeNumeros.splice(3, 4)
// console.log(arrayDeNumeros)

// const listaDeCompras = ["batata", "cebola", "cenoura", "berinjela"]
// listaDeCompras.splice(2, 1)
// console.log(listaDeCompras)





//----- EXERCÍCIO 1
// const nomeUsuario = prompt("Insira seu nome:")
// const corFavorita = prompt("Qual é sua cor favorita?")

// const frase3 = "A cor favorita de " + nomeUsuario + " é " + corFavorita
// const frase4 = `A cor favorita de ${nomeUsuario} é ${corFavorita}`

// console.log(frase3)
// console.log(frase4)

//----- EXERCÍCIO 2
// const fraseUsuario = prompt("Insira uma frase")
// const fraseModificada = fraseUsuario
//     .toUpperCase()
//     .replaceAll("A", "I")
//     .replaceAll("E", "I")
//     .replaceAll("O", "I")
//     .replaceAll("U", "I")
//     .replaceAll("Ô", "I")

// console.log(fraseModificada)
// console.log("Tamanho da frase:", fraseUsuario.length)

// console.log("Frase é maior que 10?", fraseUsuario.length > 10)

// ----- EXERCÍCIO 3
// const cachorros = ["Vira-lata caramelo", "Poodle", "Pug", "Husky", "Yorkshire"]
// const numeroUsuario = Number(prompt("Insira um número de 1 a 5"))

// console.log(cachorros[numeroUsuario-1])

// ----- EXERCÍCIO 4
const numeros = [1, 2, 3, 4, 5, 6]

console.log("Tamanho do Array:", numeros.length)

numeros.push(7)
console.log(numeros)
console.log("Tamanho novo do Array:", numeros.length)

numeros.splice(3, 2)
console.log(numeros)
console.log("Tamanho novo de novo do Array:", numeros.length)

// EXTRA
// ACESSAR O ÚLTIMO ITEM DA listaDeCompras
const lista = ["vermelho", "azul", "amarelo", "roxo"]
//                ^           ^        ^         ^
//                0           1        2         3

const tam = lista.length // quantidade de itens da lista => 4
// const ultimaPosicao = tam - 1

const ultimoItem = lista[tam - 1]
console.log("Último Item", ultimoItem)