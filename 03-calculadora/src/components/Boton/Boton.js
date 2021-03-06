import './Boton.css'
export default function Boton(props) {
  const esOperador = children => {
    return isNaN(children) && children !== '.' && children !== '='
  }
  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  )
}
