import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Pista: Recuperar información del usuario desde localStorage
  }, []);

  const login = (username) => {
    // Pista: Actualizar estado y guardar información en localStorage
  };

  const logout = () => {
    // Pista: Eliminar información del usuario del estado y localStorage
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;