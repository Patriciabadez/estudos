const nome = prompt('Hello World')
console.log('ola')
document.write('Patricia')

var nota1, nota2, nota3;
// const numero = 3
// numero = 4
nota1 = Number(prompt("Informe uma nota"))
nota2 = Number(prompt("Informe uma nota"))


function calcularMedia () {
    media = (nota1 + nota2) / 2
}
if (media  >= 0){
    document.write('<br>Media negativa:',media)
}else{
    
}
calcularMedia()
document.write('<br>Media:',media)
