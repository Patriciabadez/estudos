// const numeros = [11, 15, 18, 14, 12, 13]

// let i = 0
// let maior = -Infinity
// while(i < numeros.length) {
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }

//     i++
// }
// console.log(`O maior número é ${maior}`)


// const numeros = [11, 15, 18, 14, 12, 13,100]

// let maior = -Infinity

// for(let i = 0;i < numeros.length; i++)
// if(numeros[i] > maior){
//     maior = numeros[i]
// }
// console.log(`O maior número é ${maior}`)



// Achei esta forma mais facil de entender....

// const numeros = [11, 15, 18, 14, 150,12, 13,100]

// let maior = -Infinity

// for (let numero of numeros) {
//     if(numero > maior){
//         maior = numero
//     }    
// }
// console.log(`O maior número é ${maior}`)

//EXERCICIO 12

const prof = {
    nome: "Leticia Chijo",
    idade: 27,
    aulasFront:true,
    aulasBack:false,
    jogosFavoritos:['jogo da velha', 'cartas','futebol'],
    contaPiada: () => console.log('È pave ou pacume?'),
        pet: {
            nome:'Polly',
            especie:'Cachorrinha',
            raca:'Lasa Apso',
            snacksFavoritos: ['biscoitos', 'maçã', 'frango']

        }
    }

    const verificaAula = (aula) => {
        if(aula) {
            return 'Dou'
        }else{
            return 'Não dou'
        }
    }
    const aulasBack = verificaAula(prof.aulasBack)
    const aulasFront = verificaAula(prof.aulasFront)

    const jogos = []

    for(let i = 1; i <= prof.jogosFavoritos.length; i++){
        jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
    }

const frase = `Oi eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
${aulasFront} aulas de front e ${aulasBack} aulas de back
Meus jogos favoritos são: ${jogos}.
Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} da raça ${prof.pet.raca} e que gosta de comer ${prof.pet.snacksFavoritos[1]}

`

console.log(frase)
prof.contaPiada()