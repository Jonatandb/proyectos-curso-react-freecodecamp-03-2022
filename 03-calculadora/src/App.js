import './App.css'
import freeCodeCampLogo from './images/freecodecamp-logo.png'
function App() {
  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freeCodeCamp-logo' alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'></div>
    </div>
  )
}

export default App
