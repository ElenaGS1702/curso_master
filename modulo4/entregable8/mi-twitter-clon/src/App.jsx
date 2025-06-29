import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import './App.css'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if(username) {
      setUser(username);
    }
  }, []);

  const login = (username) => {
    localStorage.setItem('username', username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user}  logout={logout} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;