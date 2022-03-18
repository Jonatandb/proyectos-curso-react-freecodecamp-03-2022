import Formulario from '../Formulario/Formulario'
import Tarea from '../Tarea/Tarea'
import './ListaDeTareas.css'
import { useState } from 'react'

export const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([])

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim()
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }
  }

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {tareas.map(tarea => (
          <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} />
        ))}
      </div>
    </>
  )
}
