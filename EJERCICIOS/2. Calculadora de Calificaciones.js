// Teniendo una calificación final, imprime un mensaje indicando si la calificación es A (17 o más), B (13-16), C (10-12), D (7-9) o F (menos de 6).

function verificarCalificacion (calificacion) {
    if (calificacion >= 17) {
        console.log("Tu calificación es A.");
    } else if (calificacion >= 13 && calificacion <= 16) {
        console.log("Tu calificación es B.");
    } else if (calificacion >= 10 && calificacion <= 12) {
        console.log("Tu calificación es C.");
    } else if (calificacion >= 7 && calificacion <= 9) {
        console.log("Tu calificación es D.");
    } else {
        console.log("Tu calificación es F.");
    }
}

// Prueba la función con diferentes calificaciones
verificarCalificacion(19); // Salida: Tu calificación es A.
verificarCalificacion(13); // Salida: Tu calificación es B.
verificarCalificacion(11); // Salida: Tu calificación es C.
verificarCalificacion(7); // Salida: Tu calificación es D.
verificarCalificacion(4); // Salida: Tu calificación es F.