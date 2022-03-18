import Formulario from '../Formulario/Formulario'
import Tarea from '../Tarea/Tarea'
import './ListaDeTareas.css'
import { useState } from 'react'

export const ListaDeTareas = () => {
  const [tareas, setTareas] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem('tareas')) || []
    } catch (error) {
      console.error(error)
      return []
    }
  })

  const agregarTarea = tarea => {
    try {
      if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim()
        const tareasActualizadas = [tarea, ...tareas]
        setTareas(tareasActualizadas)
        window.localStorage.setItem('tareas', JSON.stringify(tareasActualizadas))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    try {
      setTareas(tareasActualizadas)
      window.localStorage.setItem('tareas', JSON.stringify(tareasActualizadas))
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {tareas.map(tarea => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  )
}
