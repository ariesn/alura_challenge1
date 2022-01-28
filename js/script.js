
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");


botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto");


    if (textoEntrada.value.length > 0) {
        obtenerTexto(true);
    }


})

botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();

    var textoEntrada = document.querySelector("#input-texto");

    if (textoEntrada.value.length > 0) {
        obtenerTexto(false);
    }

})

botonCopiar.addEventListener("click", function (event) {
    var textoEntrada = document.querySelector("#input-texto");
    var mensaje = document.querySelector("#msg");
    textoEntrada.value = "";

    textoEntrada.value = mensaje.value;
    mensaje.value = "";

})

function obtenerTexto(conversion){
    var textoEntrada = document.querySelector("#input-texto");
    var mensaje = document.querySelector("#msg");
    var textoSalida = "";
    mensaje.value = "";


    if (textoEntrada.value.length > 0) {
        var textoValido = validarTexto(textoEntrada.value);
        if (textoValido) {
            if (conversion) {
                textoSalida = encriptar(textoEntrada.value);
            } else {
                textoSalida = desencriptar(textoEntrada.value);
            }
            textoEntrada.value = "";
            mensaje.value = textoSalida;
        }       

    }

}

function encriptar(texto){
    var nuevoTexto = "";
    nuevoTexto = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    return nuevoTexto;
}

function desencriptar(texto){
    var nuevoTexto = "";
    nuevoTexto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    return nuevoTexto;
}

function validarTexto(texto){
    var textoRequisito = document.querySelector("#textoValidar");
    var expresion = new RegExp(/[A-Z\u00C0-\u017F]/);
    if (!expresion.test(texto)){
        //minusculas
        textoRequisito.classList.remove("resaltar");
        return true;
    } else {
        textoRequisito.classList.add("resaltar");
        return false;
    }
    
}