import './App.css'
import Boton from './components/Boton/Boton'
import Contador from './components/Contador/Contador'
import freeCodeCampLogo from './images/freecodecamp-logo.png'

function App() {
  const manejarClick = () => {
    console.log('Click!')
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={5} />
        <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador} />
      </div>
    </div>
  )
}

export default App
