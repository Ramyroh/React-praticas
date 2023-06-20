import React, { useState, useEffect } from 'react'
import './App.css'
import Lista from './Lista'

function App() {

  const [typed, setTyped] = useState('')
  const [registro, setRegistro] = useState([])
  const [busca, setBusca] = useState('')
  const [pesquisado, setPesquisado] = useState([])
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState('')

 
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

  function openModal() {
    setModal(true)
  }

  function closeModal(){
    setModal(!modal)
  }

  function save(id){
    if(newList.id == id){

    }
  }

  return (
    <div className='containerPrimary'>
      <input className='input' type="text" onChange={e => {
        setTyped(e.target.value)
      }} />

      <button className='btnSub' onClick={handleClick}>
        Adicionar
      </button>

      {registro == '' ? null : <div className='containerSearch'>
        <input type="text"
          className='seach'
          placeholder='pesquisar por nome'
          value={busca}
          onChange={ev => {
            setBusca(ev.target.value)
            pesquisa(ev.target.value)
          }}
        />
      </div>}

      <div className='containerListSeach'>
        {
          busca == '' ? registro.map(item => <Lista key={item.id} name={item.nome} time={item.time} deletar={Delete} id={item.id} abrir={openModal} />)
            :
            pesquisado.map(item => <Lista key={item.id} name={item.nome} time={item.time} deletar={Delete} id={item.id} abrir={openModal} />)
        }
      </div>

    { modal? <div className='containerModal'>
        <label htmlFor="name">Altere o nome</label>
        <input 
          type="text"
          id='name'  
          value={edit}
          onChange={e => setEdit(e.target.value)}
          />
        <div>
          <div>
            <button className='btnCancel' onClick={closeModal}>Cancelar</button>
          </div>
          <div>
            <button className='btnSave'>Salvar</button>
          </div>
        </div>
      </div>: null}
    </div>
  )
}

export default App
