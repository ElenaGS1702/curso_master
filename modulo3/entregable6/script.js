const { z } = window.Zod;

const registerSchema = z.object({
    name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres.'),
    email: z.string().email('Ingresa un correo valido.'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres.')
});

const showErrors = (errors) => {
    const listErrors = document.getElementById('list-errors');
    listErrors.innerHTML = "";

    const successMsg = document.getElementById('success');
    successMsg.style.display = "none";

    errors.forEach(element => {
        const err = document.createElement('li');
        err.textContent = element.message;
        err.style.color = "red";
        listErrors.appendChild(err);
    });

    listErrors.style.display = "block";
}

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try {
        const result = registerSchema.safeParse(formData);

        if (!result.success) {
            showErrors(result.error.issues);
        } else {
            const listErrors = document.getElementById('list-errors');
            listErrors.innerHTML = "";
            listErrors.style.display = "none";
            
            const successMsg = document.getElementById('success');
            successMsg.style.display = "block";
            successMsg.textContent = "¡Registro exitoso!";
        }

    } catch (error) {
        showErrors(error.errors);
    }
});