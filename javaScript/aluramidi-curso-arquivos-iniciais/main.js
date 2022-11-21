function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//**criar lista */
const ListaDeTeclas = document.querySelectorAll('.tecla')

//***condição*/
let contador = 0;
//**

//*enquanto - aplicar rotina em cada elemnto da lista**/
while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //***template string */
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    // console.log(contador);

}


