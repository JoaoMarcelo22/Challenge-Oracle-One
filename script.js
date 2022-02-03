function criptografar(){
    let texto = document.getElementById('texto').value;

    const textoModificado = texto.replace(/[a\á\à\â\ã]/gi, '01').replace(/[e\é\è\ê]/gi, '05').replace(/[i\í\ì\î]/gi, '09').replace(/[o\ó\ò\ô\õ]/gi, '15').replace(/[u\ú\ù\û]/gi, '21');

    let textoResultado = textoModificado;

    document.querySelector('#msg').value = textoResultado;

};

function verificar(){

    var palavraChave = ['01', '05', '09', '15', '21'];

    var verificar = palavraChave.some(elementoArray => textoResultado.includes(elementoArray));

    if (verificar == true){
        descriptografar();
    } else {
        alert('A mensagem não está criptografada!!');
    }
}

//function  descriptografar(){
 //   const textoModificado = texto.replace(/'01'/gi, 'a').replace(/'05'/gi, 'e').replace(/'09'/gi, 'i').replace(/'15'/gi, '0').replace(/'21'/gi, 'u');
//}