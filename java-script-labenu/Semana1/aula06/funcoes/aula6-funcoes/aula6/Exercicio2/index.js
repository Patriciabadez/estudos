// Crie uma função
// que receba um nome
// e imprima no console`Olá [nome]`,
// e a invoque com 3 nomes diferentes

imprimeNome("Lucas Homero antes da declaração")

function imprimeNome(nome) {
  // console.log("Olá ", nome)
  console.log(`Olá ${nome}`)
}

imprimeNome("Lucas Homero")
imprimeNome("Luis Henrique")
imprimeNome("Gabriel Mina")

const nomePrompt = prompt("Manda um nome ae")
imprimeNome(nomePrompt)
