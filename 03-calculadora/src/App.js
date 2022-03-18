import './App.css'
import Boton from './components/Boton/Boton'
import BotonClear from './components/BotonClear/BotonClear'
import Pantalla from './components/Pantalla/Pantalla'
import { useState } from 'react'
import { evaluate } from 'mathjs'
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp/LogoFreeCodeCamp'

function App() {
  const [input, setInput] = useState('')

  const agregarInput = value => {
    setInput(input => input + value)
  }

  const calcularResultado = () => {
    if (input) setInput(evaluate(input))
  }

  return (
    <div className='App'>
      <LogoFreeCodeCamp />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
