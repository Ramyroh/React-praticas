
import React, { useState } from 'react'
import './App.css'
import Lista from './Lista/index'

function App() {

  const [typed, setTyped] = useState('')

  function HandleClick() {
    
  }
  
  return (
    <div className='containerPrimary'>
      <input className='input' type="text" onChange={e => {
        setTyped(e.target.value)
        console.log(typed);
        }}/>


      <button className='btnSub' onClick={HandleClick}>
        Adicionar
      </button>
      
      <Lista />
    </div>
  )
}

export default App
