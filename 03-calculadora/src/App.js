import './App.css'
import Boton from './components/Boton/Boton'
import Pantalla from './components/Pantalla/Pantalla'
import freeCodeCampLogo from './images/freecodecamp-logo.png'
function App() {
  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freeCodeCamp-logo' alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={'Error'} />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <Boton>Clear</Boton>
        </div>
      </div>
    </div>
  )
}

export default App
