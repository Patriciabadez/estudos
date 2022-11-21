const aluna = { // instrutora objeto
    nome: 'Patricia', // nome , idade, email chave
    idade: 36,
    email:'patricia@gmail', // valor
    isDandoEstaAula: false
};

aluna.nome = 'Patricia Baldez'; // ;44

const alunaPatricia = {
    nome: 'Paty',
    idade: 26,
    email:'patricia@gmail.com',
    isAluna: true,
    responsabilidades:['|Cuidar do Danyy', 'Lavar a louça'],
    contaPiada: (target)=> {
        console.log(target+ 'Menina ')

    }
}
// console.log('Patricia', aluna )
// const aluna = aluna.nome
console.log('Nome: ', aluna.nome,'idade:', aluna.idade,'email:', aluna.email ) //melhor fazer assim que é o mais comum.
console.log('Nome: ', aluna['nome'],'idade:', aluna['idade'],'email:', aluna['email'] )
// console.log('Paty' , alunaPatricia)


