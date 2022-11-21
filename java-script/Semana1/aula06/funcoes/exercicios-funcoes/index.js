function minhaFuncao(variavel) {
    return variavel * 5

}
console.log(minhaFuncao(2)) //10
console.log(minhaFuncao(5)) // 25

// a) O que vai ser impresso no console? 10 25

// b) O que aconteceria se no VSCode retirássemos os dois `console.log` e simplesmente invocássemos a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? não apareceria nada

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// esta funcao transforma tudo em minusculas e procura a plaalaa cenoura
// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` true
//      ii.  `CENOURA é bom pra vista` true
//      iii. `Cenouras crescem na terra` true


const frase = (nome, idade, cidade, ehEstudante) => {
    
    const nome = 'Patricia'
    const idade = 36
    const cidade = 'Porto Alegre'
    const ehEstudante = 'estudante'
    

  const fraseDados = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ehEstudante}.`)
return frase
  
   
}
console.log(fraseDados)

