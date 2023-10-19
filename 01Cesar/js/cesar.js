const desplazamiento = document.getElementById("desplazamiento");
const desplaza = document.getElementById("desplazamiento2");
const texto = document.getElementById("texto");
const textodes = document.getElementById("texto2");
const textoCifrado = document.getElementById("cifrado");
const textoDescifrado = document.getElementById("descifrado");

// Crea una función para cifrar y descifrar
function cifrado() {
    const textoIngresado = texto.value;
    const valorDesplazamiento = parseInt(desplazamiento.value);
    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            if (valorEntero + valorDesplazamiento > 122) {
                valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
            } else {
                valorEntero = valorEntero + valorDesplazamiento;
            }
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

function descifrado() {
    const textoIngresado = textodes.value;
    const valorDesplazamiento = parseInt(desplaza.value);
    textoDescifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            if (valorEntero - valorDesplazamiento < 97) {
                valorEntero = 123 - (97 - valorEntero) - valorDesplazamiento;
            } else {
                valorEntero = valorEntero - valorDesplazamiento;
            }
        }
        let descifrado = String.fromCharCode(valorEntero);
        return mayus ? descifrado.toUpperCase() : descifrado; // Cambiar "cifrado" a "descifrado"
    }).join('');
}

texto.addEventListener("input", cifrado);
desplazamiento.addEventListener("input", cifrado);

textodes.addEventListener("input", descifrado);
desplaza.addEventListener("input", descifrado);


