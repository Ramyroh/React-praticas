import React, { useState } from 'react'
import './App.css'
import Lista from './Lista'

function App() {

  const [typed, setTyped] = useState('')
  const [registro, setRegistro] = useState([])
  const [busca, setBusca] = useState('')
  const [pesquisado, setPesquisado] = useState([])

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

  function pesquisa(nome) {
    const filtro = registro.filter(r => r.nome.toLowerCase().includes(nome.toLowerCase()))
    setPesquisado(filtro)
  } 

  return (
    <div className='containerPrimary'>
      <input className='input' type="text" onChange={e => {
        setTyped(e.target.value)
      }} />

      <button className='btnSub' onClick={handleClick}>
        Adicionar
      </button>

     { registro==''? null:<div className='containerSearch'>
        <input type="text"
        className='seach'
        placeholder='pesquisar por nome'
        value={busca}
        onChange={ev => {setBusca(ev.target.value)
        pesquisa(ev.target.value)
        }} 
        />
      </div>}

      <div className='containerListSeach'>
        {
         busca==''? registro.map(item => <Lista key={item.id} name={item.nome} time={item.time} deletar={Delete} id={item.id} />)
         :
         pesquisado.map(item => <Lista key={item.id} name={item.nome} time={item.time} deletar={Delete} id={item.id} /> )
        }
      </div>
    </div>
  )
}

export default App
