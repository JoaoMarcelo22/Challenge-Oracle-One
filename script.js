const texto = document.querySelector('#texto').value;


const textoModificado = texto.replace(/[a\á\à\â\ã]/gi, '01').replace(/[e\é\è\ê]/gi, '05').replace(/[i\í\ì\î]/gi, '09').replace(/[o\ó\ò\ô\õ]/gi, '15').replace(/[u\ú\ù\û]/gi, '21');

let textoResultado = document.querySelector('#msg');

textoResultado.value = textoModificado;


console.log(textoModificado);