//Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un carácter “#”. Los caracteres deben formar un tablero de ajedrez.

let tablero = '';
let contador = 1;

while (contador <= 8) {
    if (contador % 2 === 0) {
        tablero += ' # # # #\n';
    } else {
        tablero += '# # # # \n';
    }
    contador++;
}

console.log(tablero);