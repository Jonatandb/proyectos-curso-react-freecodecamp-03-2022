export default function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button
      className={esBotonDeClick === 'botonDeClick' ? 'boton-click' : 'boton-reiniciar'}
      onClick={manejarClick}
    >
      {texto}
    </button>
  )
}
