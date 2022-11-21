// function checaRenovacaoRG() {
//     const anoAtual = Number(prompt('Digite o ano atual'))
//     const anoDoNascimento = Number(prompt('Digite o ano do nascimento'))
//     const anoDeEmissao = Number(prompt('Digite o ano de emissão do documento'))

//     const idade = anoAtual - anoDoNascimento
//     const tempoCarteira = anoAtual - anoDeEmissao

//     const cond1 = idade <= 20 && tempoCarteira >= 5
//     const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3 = idade > 50 && tempoCarteira >= 15
    
//     console.log( cond1 || cond2 || cond3 ) // retorna true ou false
// }
// checaRenovacaoRG()