var botonEncriptar = obtenerElemento("#btn-encriptar");
var botonDesencriptar = obtenerElemento("#btn-desencriptar");
var botonCopiar = obtenerElemento("#btn-copy");
var baseEncriptar = true;
var baseDesencriptar = false;


botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    procesarPeticionBtn(baseEncriptar);

})

botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    procesarPeticionBtn(baseDesencriptar);

})

botonCopiar.addEventListener("click", function (event) {
    var textoEntrada = obtenerElemento("#input-texto");
    var mensaje = obtenerElemento("#msg");
    textoEntrada.value = "";

    textoEntrada.value = mensaje.value;
    mensaje.value = "";

})

function procesarPeticionBtn(peticionBase){
    var textoEntrada = obtenerValorElemento("#input-texto");
    var textoRequisito = obtenerElemento("#textoValidar");
    var mensaje = obtenerElemento("#msg");
    mensaje.value = "";
    var textoValido = validarTexto(textoEntrada);

    if (textoEntrada.length > 0) {
        if (textoValido) {
            
            if (peticionBase) {
                mensaje.value = encriptar(textoEntrada);
            } else {
                mensaje.value = desencriptar(textoEntrada);
            }

            
            textoRequisito.classList.remove("resaltar");
        } else {
            textoRequisito.classList.add("resaltar");
        }
    }

}

function validarTexto(texto){
    // Expresion para detectar letras mayusculas y acentos    
    var expresion = new RegExp(/[A-Z\u00C0-\u017F]/);
    if (!expresion.test(texto)){
        //minusculas
        return true;
    } else {
        return false;
    }
    
}

function obtenerValorElemento(identificador) {
    var idObtenido = document.querySelector(identificador);
    return idObtenido.value;
}

function obtenerElemento(identificador) {
    return document.querySelector(identificador);
}
