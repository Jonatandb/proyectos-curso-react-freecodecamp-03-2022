import './App.css'
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp/LogoFreeCodeCamp'
import Tarea from './components/Tarea/Tarea'

function App() {
  return (
    <div className='aplicacion-tareas'>
      <LogoFreeCodeCamp />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea completada texto='Aprender Javascript' />
        <Tarea texto='Aprender React' />
      </div>
    </div>
  )
}

export default App
