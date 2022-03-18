const Formulario = props => {
  return (
    <form>
      <input type='text' className='tarea-input' placeholder='Escribe una Tarea' name='texto' />
      <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  )
}

export default Formulario
