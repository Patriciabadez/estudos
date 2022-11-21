// console.log("Ola")

// const valor1 = 10
// const valor2 = 20
// const valor3 = 40
// const valor4 = 80
// const valor5 = 3

// let resultado

// resultado = valor1 + valor2
// console.log("O resultado da soma é igual a: ",resultado)

// resultado = valor4 - valor3
// console.log("O resultado da subtração: " ,resultado)

// resultado = valor1 * valor3
// console.log("O resultado da multiplicação é: " ,resultado)

// resultado = valor3 / valor2
// console.log("O resultado da divisão é: " ,resultado)

// modulo ou mod - pega o resto da divisão, serve para verificar se o numero é par ou impar
// resultado = valor1 % valor5
// console.log("Resultado modulo-resto da divisão é: " ,resultado)

// resultado = 10 % 2
// console.log("Resultado modulo - exemplo2 da divisão é: " ,resultado)

// resultado = 11 % 2
// console.log("Resultado modulo - exemplo3 da divisão é: " ,resultado)

//---------------------------------------------27
// let minhaIdade = 26
//modo simplificado
// minhaIdade+= 1
// minhaIdade = minhaIdade + 1
// console.log(minhaIdade)

//-----------------------------------------300
// let saldo = 100
// const deposito = 200
//modo simplificado
// saldo+=deposito
// saldo = saldo + deposito

// console.log('Novo saldo: ',saldo)

//COMPARADORES:

//----------------------------------------
// === verifica se o valor e tipo são iguais

// resultado = 1 === '1' //false
// console.log('Resultado1):',resultado)
// resultado = 1 === 1 // true
// console.log('Resultado2):',resultado)
// resultado = 2 === 1 // false
// console.log('Resultado3):',resultado)
//obs:
// -----------------------------------------==
// compara somente valor mas o bom é sempre usar o (===), pois ele compara tipo e valores
// resultado = 1 == '1' //true
// console.log('Resultado4):',resultado)

// resultado = 1 == 1 // true
// console.log('Resultado5):',resultado)

// resultado = 2 == 1 // false
// console.log('Resultado6):',resultado)

// ---------------------------------!== diferente
// resultado = 2 !== '2'//true
// console.log('Resultado7):',resultado)
// resultado = 2 !== 2 //false
// console.log('Resultado8):',resultado)

//------------------------- > maior que
// resultado = 2 > 3 // false
// console.log('Resultado9):',resultado) 
// resultado = 2 > 2 // false
// console.log('Resultado10):',resultado)
// resultado = 5 > 2 // true
// console.log('Resultado11):',resultado)

//------------------------------ >= maior ou igual
// resultado = 2 >= 3 // false
// console.log('Resultado12):',resultado) 
// resultado = 2 >= 2 // true
// console.log('Resultado13):',resultado)
// resultado = 5 >= 2 // true
// console.log('Resultado14):',resultado)
// // < menor que
// resultado = 2 < 3 // true
// console.log('Resultado15):',resultado) 
// resultado = 2 < 2 // false
// console.log('Resultado16):',resultado)
// resultado = 5 < 2 // false
// console.log('Resultado17):',resultado)

//OPERADORES LOGICOS:


//EXERCICIOS 1:

// const numero1 = 3
// const numero2 = 4
// const numero3 = 5
// const numero4 = 2
// const numero5 = 234
// const numero6 = -5

//1)soma de 3 e 4
// let soma = numero1 + numero2
// console.log("Resultado da soma: ",soma)

//2)Multiplicar 3 com 5 e dividir o resultado por 2
// let multiplicaEDivide = 3 * 5 / 2
// console.log('O resultado da multiplicação é: ' ,multiplicaEDivide)

//3)Subtrair 5 de 4 e multiplicar o resultado por -1
// let subtraiEMultiplicar = (numero6 + numero2) * -1
// console.log('O resultado é: ' ,subtraiEMultiplicar)

//4)Determinar o resto da divisão de 234 por 5
// let restoDaDivisao = numero5 % numero3
// console.log("O resto da divisão é: ",restoDaDivisao)
//________________________________________________________
//OPERADORES LOGICOS
// && O resultado é true se e somente se os valore e todos os valores forem true.
//para boleano podemos usar let ou const

// const fazSol = true
// const estaCalor = false
// const temPraia = false

// const vouParaPraia = fazSol &&  estaCalor && temPraia
// console.log('Vou para praia?',vouParaPraia)
// No caso de || ou : so da false se todos forem false.
//  || O resultado é false se somente se todos os valores forem false
// const estouComFome = true
// const estouEmCasa = false
// const estouTriste = false

// const vouComerChocolate = estouComFome || estouComFome || estouTriste
// console.log('Vou comer chocolate: ' ,vouComerChocolate) // true

// const queroSair = false
// const estouNaRua = false
// const estouEntediada = false

// const vouSair = queroSair || estouNaRua || estouEntediada
// console.log('Vou sair: ' ,vouSair) // false

//   !true  !false - neste caso ele inverte se é false vira true e vice versa. no caso é uma negação

// const  oBrasilGanhouMedalhas = true
// console.log('O brasil ganhou medalhas? ', !oBrasilGanhouMedalhas) // false

//_____________________________________________________


//EXERCICIOS 2:

// const valor01 = 10
// const valor02 = 5

// resultado = 10 === 5//false
// console.log('O primeiro numero é igual que o segundo numero?',resultado) 

// resultado = 10 !== 5 // true
// console.log('O primeiro numero é diferente que o segundo numero?',resultado) 

// resultado = 10 > 5 // true
// console.log('O primeiro numero é maior que o segundo numero?',resultado)

// resultado = 10 < 5 //false
// console.log('O primeiro numero é menor que o segundo numero?',resultado) 

//EXERCICIO 3

// const a = true
// const b = false
// const c = true

// console.log('A e B é igual a: ',a && b) // false
// console.log('B e C é igual a: ',b && c) // false
// console.log('A e C é igual a: ',a && c) //true
// console.log('A , B e C é igual a: ',a && b && c) //false

// EXERCICIO 4

// console.log('A e B é igual a: ',a || b) // true
// console.log('B e C é igual a: ',b || c) // true
// console.log('A e C é igual a: ',a || c) // true
// console.log('A , B e C é igual a: ',a || b || c) //true


// EXERCICIO 5

// const nome = prompt('Digite seu nome: ')
// const anoDeNascimento = Number(prompt('Digite seu ano de nascimento: '))

// const anoAtual = Number(prompt('Insira o ano atual: '))
// console.log('Ola' ,nome)

// const idade = anoAtual - anoDeNascimento
// console.log('Idade: ',idade)

// console.log('E maior de idade: ',idade >= 18)

// const idadeFuturo = 2050 - anoDeNascimento

// console.log('Em 2050 eu terei: ', idadeFuturo ,'anos')


