//const texto = document.getElementById('mensagem').value;
const texto = "eu quero ir para casa";
console.log(texto);


const textoModificado = texto.replace(/[a\á\à\â\ã]/gi, '01').replace(/[e\é\è\ê]/gi, '05').replace(/[i\í\ì\î]/gi, '09').replace(/[o\ó\ò\ô\õ]/gi, '15').replace(/[u\ú\ù\û]/gi, '21');

//let textoResultado = document.querySelector('#recebe');

var textoResultado = textoModificado;


console.log(textoModificado);

var palavraChave = ['01', '05', '09', '15', '21'];

var verificar = palavraChave.some(elementoArray => textoResultado.includes(elementoArray));



//if (verificar){
 //   descripitografar();
//}
//else {
 //   alert('a mensagem não esta criptografada');
//}