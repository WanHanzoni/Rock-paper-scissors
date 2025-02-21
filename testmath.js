function solicitarDato() {
    let dato = prompt("Ingresa un número mayor que 10:");

    if (dato === null) {
        // Si el usuario cancela el prompt, salir de la función
        alert("Operación cancelada.");
        return;
    }

    dato = parseInt(dato, 10); // Convertimos el dato a número

    if (isNaN(dato) || dato <= 10) {
        alert("Dato inválido. Inténtalo de nuevo.");
        solicitarDato(); // Vuelve a llamar a la función si la condición no se cumple
    } else {
        alert("Dato válido ingresado: " + dato);
    }
}

solicitarDato(); // Llamamos la función inicialmente
