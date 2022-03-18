import './App.css'
import Boton from './components/Boton/Boton'
import freeCodeCampLogo from './images/freecodecamp-logo.png'
function App() {
  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freeCodeCamp-logo' alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  )
}

export default App
