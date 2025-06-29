import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username || username === "") return;

        onLogin(username);
        navigate('/');
    };

    return(
        <div className="login-form">
            <img 
                className="logo-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" 
                alt="logo"
            />
            <h2>Sign in to Twitter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className="btn-login" type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;