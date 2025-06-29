import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pista: Llamar a la función onLogin y redirigir
    };

    // ... (formulario de inicio de sesión)
};

export default Login;