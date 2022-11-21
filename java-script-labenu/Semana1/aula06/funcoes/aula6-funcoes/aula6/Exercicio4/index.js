// Crie uma função que:
// Receba um array de números e 
// Retorne um novo array
// com dois elementos: o primeiro e o último divididos por dois

// [A, B, C, D] = 4
//  0  1  2  3

function pegaPrimeiroEUltimoDividoPor2(arrayDeNum) {
  const resultado = []
  resultado.push(arrayDeNum[0] / 2)
  resultado.push(arrayDeNum[arrayDeNum.length - 1] / 2)

  return resultado
}

console.log(pegaPrimeiroEUltimoDividoPor2([5, 3, 7, 9])) // [2.5, 4.5]
