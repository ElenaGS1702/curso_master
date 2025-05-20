document.addEventListener('DOMContentLoaded', () => {
    const onSubmit = (event) => {
        event.preventDefault();

        // Variables
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const intereses = document.querySelectorAll('input[name="intereses"]:checked');
        const horario = document.querySelector('input[name="horario"]:checked');
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        // Validaciones básicas
        if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        if(!correo.includes('@')){
            alert("Ingresa un correo valido");
            return
        }

        if(telefono.length < 10){
            alert("El numero de telefono debe de contener 10 digitos");
            return;
        }

        const numberRegex = /^\d+$/;
        if(!numberRegex.test(telefono)){
            alert("El numero de telefono debe de contener solo numeros");
            return;
        }

        alert('Registro exitoso. ¡Gracias por registrarte!');
    }

    document.getElementById('registroEvento').addEventListener('submit', onSubmit);

});