// Como fazer comentários em arquivos Javascript:
// Comentário de linha

/*
Comentário em bloco de linhas
*/

// Como imprimir informações no console do navegador: console.log()
// console.log("Hello World!!!")
// console.log("Essa é a primeira aula de Javascript da Maryam!!! Bóra!")

//Como pedir informações ao usuário: prompt()
// const nome = prompt("Qual seu nome?")
// console.log(nome)

// const idade = prompt("Qual sua idade?")
// console.log(idade)


// TIPOS DE VARIÁVEIS E typeof
// EXERCÍCIO 1

// const nome = 'Marina'
// const sobrenome = 'Azzi Nogueira'
// let idade = 31
// const ehEstudante = false

// console.log("Meu nome é", nome, sobrenome, "e tenho", idade, "anos.", "Sou estudante?", ehEstudante)

// const nome = "Leticia" // string
// const sobrenome = "Chijo" // string
// const idade = 27 // number
// const ehEstudante = true // boolean

// console.log("Meu nome é", nome, sobrenome, "e tenho", idade, "anos. Sou estudante?", ehEstudante)

// console.log(typeof nome)
// console.log(typeof sobrenome)
// console.log(typeof idade)
// console.log(typeof ehEstudante)



// let anoDeNascimento
// console.log(typeof anoDeNascimento)

// anoDeNascimento = 1990
// console.log(typeof anoDeNascimento)

// anoDeNascimento = "mil novecentos e noventa"
// console.log(typeof anoDeNascimento)

// anoDeNascimento = null
// console.log(anoDeNascimento)

// const nome = null
// console.log(nome)

// EXERCÍCIO 2

// const nome = prompt("Qual seu nome?")
// const idade = prompt("Qual sua idade?")

// console.log("Nome:", typeof nome)
// console.log("Idade:", typeof idade)
// console.log(typeof nome, typeof idade)


// CONVERSÃO DE TIPOS
// const idadeNumero = 34
// const idadeTexto = idadeNumero.toString()

// console.log(typeof idadeNumero) // number
// console.log(typeof idadeTexto) // string

// const idadeTexto = "31"
// const idadeNumero = Number(idadeTexto)

// console.log(typeof idadeTexto) //string
// console.log(typeof idadeNumero) //number


// const anoDeNascimento = prompt("Em que ano você nasceu?")
// const anoDeNascimentoNumber = Number(anoDeNascimento)

// const anoDeNascimento2 = Number(prompt("Em que ano você nasceu?"))


// console.log(typeof anoDeNascimento)
// console.log(typeof anoDeNascimentoNumber)
// console.log(typeof anoDeNascimento2)