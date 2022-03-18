import Formulario from '../Formulario/Formulario'
import Tarea from '../Tarea/Tarea'
import './ListaDeTareas.css'

export const ListaDeTareas = () => {
  return (
    <>
      <Formulario />
      <div className='tareas-lista-contenedor'>
        <Tarea completada texto='Aprender Javascript' />
        <Tarea texto='Aprender React' />
      </div>
    </>
  )
}
