//Teniendo una edad. Luego, verifica si es mayor de edad (55 años o más) e imprime un mensaje correspondiente.

function verificarEdadParaPension (edad) {
    if (edad >= 55) {
        console.log("Ya con " + edad + " años cumples con la edad requerida !Eres elegida para la pensión!.");
    } else {
        console.log("Lo siento, con " + edad + " años, aún no cumples con la edad requerida para la pensión.");
    }
}

// Prueba la función con diferentes edades
verificarEdadParaPension(58); // Salida: ¡Felicidades! Con 60 años, eres elegible para la pensión.
verificarEdadParaPension(33); // Salida: Lo siento, con 45 años, aún no cumples con la edad requerida para la pensión.