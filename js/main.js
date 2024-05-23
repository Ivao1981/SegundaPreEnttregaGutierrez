// Variables para almacenar el historial de lanzamientos de los dados
let historialLanzamientos = [];

// Objeto para representar el resultado de un lanzamiento de dados
class Resultado {
    constructor(dado1, dado2, total) {
        this.dado1 = dado1;
        this.dado2 = dado2;
        this.total = total;
    }

    // Método para convertir el resultado a una cadena de texto
    toString() {
        return `Dado 1: ${this.dado1}, Dado 2: ${this.dado2}, Total: ${this.total}`;
    }
}

// Función para lanzar los dados y retornar el resultado
function lanzarDados() {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let total = dado1 + dado2;

    // Crear un objeto Resultado
    let resultado = new Resultado(dado1, dado2, total);
    
    // Agregar el resultado al historial
    historialLanzamientos.push(resultado);

    // Mostrar los resultados utilizando alert
    alert(resultado.toString());
}

// Función para mostrar el historial de lanzamientos
function mostrarHistorial() {
    if (historialLanzamientos.length === 0) {
        alert("No hay lanzamientos en el historial.");
    } else {
        let historialTexto = historialLanzamientos.map((resultado, index) => `${index + 1}. ${resultado.toString()}`).join('\n');
        alert("Historial de lanzamientos:\n" + historialTexto);
    }
}

// Función principal para iniciar el juego
function iniciarJuego() {
    alert("¡Bienvenido al juego de dados!");

    while (true) {
        let respuesta = prompt("¿Quieres lanzar los dados o ver el historial? (Lanzar/Historial/Salir)").toLowerCase();

        if (respuesta === "lanzar") {
            lanzarDados();
        } else if (respuesta === "historial") {
            mostrarHistorial();
        } else if (respuesta === "salir") {
            alert("Gracias por jugar. ¡Hasta luego!");
            break;
        } else {
            alert("Por favor, responde con 'Lanzar', 'Historial' o 'Salir'.");
        }
    }
}

// Iniciar el juego al cargar la página
iniciarJuego();
