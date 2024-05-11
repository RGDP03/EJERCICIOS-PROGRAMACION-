//Dado un número, determina e imprime si el número es positivo, negativo o cero.

function verificarNumero(numero) {
    if (numero > 0) {
        console.log(numero + " es un número positivo.");
    } else if (numero < 0) {
        console.log(numero + " es un número negativo.");
    } else {
        console.log(numero + " es cero.");
    }
}

// Prueba la función con diferentes números
verificarNumero(18); // Salida: 5 es un número positivo.
verificarNumero(-2); // Salida: -3 es un número negativo.
verificarNumero(0); // Salida: 0 es cero.