import './App.css'
import Tarjeta from './components/Tarjeta'
import Description from './components/Description'

function App() {

  return (
    <div style={{ placeItems: 'center' }}>
      <h1>Tarjeta de Presentación</h1>
      <Tarjeta />
      <Description />
    </div>
  )
}

export default App
