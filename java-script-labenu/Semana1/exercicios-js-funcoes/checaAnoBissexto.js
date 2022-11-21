
// function checaAnoBissexto(ano) {
//     ano = Number(prompt('Digite um ano'))
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     // return cond1 || cond2
//     console.log(cond1 || cond2)
// }
// checaAnoBissexto()


function checaAnoBissexto() {
    const ano = Number(prompt('Digite um ano'))
    if((ano % 400 === 0) || ano % 4 === 0 && ano % 100 !==0){
        ano.document.write('É bissexto!')
    }else{
        ano.document.write('Não é bissexto!')
        
    }
    console.log(ano)
}
checaAnoBissexto()




// if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))


// Os anos divisíveis por 4 são bissextos, porém cada 400 anos devem se eliminar 3 bissextos. Por isso, não são bissextos os que se dividem por 100, menos os que se dividem por 400, que sim são bissextos.

// Com outras palavras, são bissextos todos os anos divisíveis por 4, excluindo os que sejam divisíveis por 100, porém não os que sejam divisíveis por 400.
// Em Javascript e em linguagens de sintaxe similar como C, Java ou PHP:



// JavaScript - Como saber se o ano é bissexto
// Existem duas condições que, sozinhas, já definem se um ano é bissexto ou não:
// É múltiplo de 400. Exemplos: 1200, 1600, 2000, 2400, 2800...
// É múltiplo de 4 mas não é de 100. Exemplos: 1996, 2000, 2004, 2008, 2012, 2016...

// Se não obedecer alguma das condições anteriores, não é bissexto.

// Algoritmo do Ano Bissexto em JavaScript
// Vamos pedir o ano para o usuário.

// Quando ele clicar no botão "Validar", chamamos a função validar() do JS.
// Ela pega a string que o usuário escreveu, transforma em inteiro e armazena na variável ano.

// O primeiro teste que vamos fazer é se é múltiplo de 400:
// if(ano % 400 == 0)
// Se for, retorna true, dizemos que o ano é bissexto e acaba aí o script.
// Se não for, cai em um ELSE.

// Dentro desse ELSE, vamos usar outro IF.
// Esse novo IF vai testar duas coisas:
// Se é múltiplo de 4
// Se não é múltiplo de 100

// Se ambas condições forem verdadeiras, o ano é bissexto e o IF é true, então avisamos que é bissexto.
// Se alguma das condições não forem válidas, o teste retorna false e cai no ELSE interno, que avisa que o ano não é bissexto

// Nosso código JavaScript fica: