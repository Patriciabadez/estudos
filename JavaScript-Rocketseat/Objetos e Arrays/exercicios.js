//1. Declare uma variavel de nome weight.

// let weight

//2. Que tipo de dado é a variável acima?
//undefined

// console.log(typeof weight)

/*

3. Declare uma variável e atribua valores para cada um dos dados.

*name: String
*age: Number(intereger)
*stars:Number(float)
*isSubscribed:Booleam

*/

// let name = "Patricia"
// let age= 36
// let stars = 4.8
// let isSubscribed=true

/*
4. A variavel student é de que tipo de dados?

4.1 Atribua a ela as mesmas propriedades e valores

4.2 Mostre no console a seguinte mensagem:
<name> de <age> pesa <weigth> kg.
*/
let student={
name: "Patricia",
age: 36,
weight: 50.8,
isSubscribed:true
}
console.log(`${student.name} de ${student.age} pesa ${student.weight} kg.`)

/*
5.Declare uma variável do tipo de Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

*/
let students=[]

/*
6.Retribua valor para variavel acima, colocando dentro dela o objeto da questão 4.(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/
students = [
    student
]
/*
7.Coloque no console o valor da posição zero do Array acima.
*/
console.log(students[0])
/*
8.Crie um novo student e coloque na posição 1 do Array studentes
*/
const john = {
    name:"Paula",
    age:23,
    weight:74.8,
    isSubscribed:true
}
students[1]=john
console.log(students)

/*
9.Sem rodar o codigo responda qual é a resposta do código abaixo e por que?Após sua resposta, rode o código e veja se voce acertou.
*/
console.log(a)
var a = 1
//undefinid