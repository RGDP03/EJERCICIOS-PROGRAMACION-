//Escribe un bucle que realice siete llamadas a console.log para mostrar un triángulo.
 

for (let i = 1; i <= 7; i++) {
    let linea = "";
    for (let a = 1; a <= i; a++) {
     linea += "#"
    };
    console.log(linea);
}
