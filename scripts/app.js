let areaTextoUsuario = document.getElementById("area-texto-desencriptar");
let areaTextoListo = document.getElementById("area-texto-listo");
let botonEncriptar = document.getElementById("boton-encriptar");
let botonDesencriptar = document.getElementById("boton-desencriptar");
let botonCopiar = document.getElementById("boton-copiar");
let dibujo = document.getElementById("dibujo");
let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");


function encriptar() {
    let textoUsuario = areaTextoUsuario.value;
    let textoEncriptado = '';
    
    if (validarTexto(textoUsuario)){
        for (let letra of textoUsuario) {
            if (letra == 'a')
                textoEncriptado += 'ai';
            else if (letra == 'e')
                textoEncriptado += 'enter';
            else if (letra == 'i')
                textoEncriptado += 'imes';
            else if (letra == 'o')
                textoEncriptado += 'ober';
            else if (letra == 'u')
                textoEncriptado += 'ufat';
            else
                textoEncriptado += letra;
        }
        areaTextoListo.innerHTML = textoEncriptado;
    }
}

function desencriptar() {
    let textoUsuario = areaTextoUsuario.value;
    let textoDesencriptado = '';

    if(validarTexto(textoUsuario)) {

        for (let i = 0; i < textoUsuario.length; i++) {
            if (textoUsuario.startsWith('ai', i)) {
                textoDesencriptado += 'a';
                i += 1;
            } else if (textoUsuario.startsWith('enter', i)) {
                textoDesencriptado += 'e';
                i += 4;
            } else if (textoUsuario.startsWith('imes', i)) {
                textoDesencriptado += 'i';
                i += 3;
            } else if (textoUsuario.startsWith('ober', i)) {
                textoDesencriptado += 'o';
                i += 3;
            } else if (textoUsuario.startsWith('ufat', i)) {
                textoDesencriptado += 'u';
                i += 3;
            } else {
                textoDesencriptado += textoUsuario[i];
            }
        }
        areaTextoListo.innerHTML = textoDesencriptado;
    }
}
    
function validarTexto(texto) {
    for (let i = 0; i < texto.length; i++) {
        let codigoASCII = texto.charCodeAt(i);

        if ((codigoASCII < 97 || codigoASCII > 122) && codigoASCII !== 32) {
            alert("Por favor, ingrese solo letras minúsculas.");
            return false;
        }
    }
    areaTextoListo.style.display = 'block';
    dibujo.style.display = 'none';
    texto1.style.display = 'none';
    texto2.style.display = 'none';
    return true;
}