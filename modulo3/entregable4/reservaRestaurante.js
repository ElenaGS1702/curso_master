const mesasDisponibles = 5;

// Función para la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(mesasSolicitadas > mesasDisponibles){
                reject({"disponibilidad": false, "message": "El numero de mesas solicitadas no esta disponible"});
            } else {
                resolve({"disponibilidad": true, "message": "El numero de mesas solicitadas se encuentran disponibles"});
            }
        }, 2000);
    });
}

// Función para el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const enviado = Math.floor(Math.random() * 2);
            if(enviado === 0){
                resolve(`Correo enviado exitosamente al cliente ${nombreCliente}`);
            } else {
                reject("Error al enviar el correo");
            }
        }, 1500);
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
        console.log("Verificando disponibilidad de mesas...");
        const response = await verificarDisponibilidad(mesasSolicitadas);
        console.log("DISPONIBILIDAD: ", response);

        if(response['disponibilidad']){
            const result = await enviarConfirmacionReserva(nombreCliente);
            console.log("ENVIO DE CORREO: ", result);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

hacerReserva("Juan Pérez", 3);