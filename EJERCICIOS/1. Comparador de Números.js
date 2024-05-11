// Dados dos números. Luego, determina e imprime si el primer número es mayor, menor o igual que el segundo.

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(` ${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        console.log(` ${num1} es menor que ${num2}`);
    } else {
        console.log(` ${num1} es igual a ${num2}`);
    }
}

// Prueba la función con diferentes números
compararNumeros(28, 13); // Salida: 5 es mayor que 10
compararNumeros(52, 91); // Salida: 15 es menor que 7
compararNumeros(8, 8); // Salida: 3 es igual a 3