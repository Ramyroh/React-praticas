import React, { useState } from 'react'
import './App.css'
import Lista from './Lista'
import { CiSearch } from 'react-icons/ci'

function App() {

  const [typed, setTyped] = useState('')
  const [registro, setRegistro] = useState([])

  function handleClick() {

    if (typed != 0) {
      const newList = {
        id: registro.length + 1,
        nome: typed,
        time: new Date().toLocaleDateString('pt-br', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      }
      setRegistro([...registro, newList])

    } else {
      alert('Invalido')
    }
  }

  function Delete(id) {
    let listaFiltrada = registro.filter(item => item.id != id)
    setRegistro(listaFiltrada)
  }
  return (
    <div className='containerPrimary'>
      <input className='input' type="text" onChange={e => {
        setTyped(e.target.value)
      }} />

      <button className='btnSub' onClick={handleClick}>
        Adicionar
      </button>
      <div className='containerSearch'>
        <input type="text" className='seach' placeholder='pesquisar por nome' />
        {/* <CiSearch /> */}
      </div>

      <div className='containerListSeach'>
        {
          registro.map(item => <Lista key={item.id} name={item.nome} time={item.time} deletar={Delete} id={item.id} />)
        }
      </div>
    </div>
  )
}

export default App
