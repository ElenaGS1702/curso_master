import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Citas from './components/Citas'
import CitaDetalle from './components/CitaDetalle'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link style={{ margin: "10px" }} to="/">Inicio</Link>
        <Link style={{ margin: "10px" }} to="/citas">Ver Citas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
