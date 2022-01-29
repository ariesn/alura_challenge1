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

// Codigos base Reglas de encriptación
var codigos = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

//Referente a funciones encriptar y desencriptar:
//codigo: e i a o u
//codigos[codigo]: enter imes ai ober ofat

function encriptar(texto){

    var nuevoTexto = texto;

    for (var codigo in codigos) {
            
        nuevoTexto = nuevoTexto.replaceAll(codigo,codigos[codigo]);
    }
    return nuevoTexto;

}

function desencriptar(texto){
    
    var nuevoTexto = texto;

    for (var codigo in codigos) {
            
        nuevoTexto = nuevoTexto.replaceAll(codigos[codigo],codigo);
    }
    return nuevoTexto;

}
