// Retângulo 1
const altura1 = 3
const largura1 = 2
const area1 = altura1 * largura1 * 2
console.log("Área do retângulo 1 = ", area1)

// Retângulo 2
const altura2 = 5
const largura2 = 2
const area2 = altura2 * largura2  * 2
console.log("Área do retângulo 2 = ", area2)


// Retângulo como Função
function calculaAreaRetangulo(altura, largura) {
  const area = altura * largura
  console.log("Retângulo como função = ", area)
}

// aqui console.log(area)

calculaAreaRetangulo(2.6, 3.2)
calculaAreaRetangulo(3, 5)
calculaAreaRetangulo(1, 2)
calculaAreaRetangulo(6, 4)
calculaAreaRetangulo(12, 13)

const alturaPrompt = prompt("Manda a altura ae!")
const larguraPrompt = prompt("Manda a largura ae!")

calculaAreaRetangulo(alturaPrompt, larguraPrompt)

// Mais difícil de ler
// calculaAreaRetangulo(prompt("Manda a altura ae!"), prompt("Manda a largura ae!"))
