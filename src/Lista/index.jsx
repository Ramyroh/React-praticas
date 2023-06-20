import './style.css'
import {FiTrash} from 'react-icons/fi'
import {RxUpdate} from 'react-icons/rx'

export default function Lista({ name, time, id, deletar, abrir}) {
    return (
        <div className='containerLista'>
            <div className='containerDados'>
                <p>{name}</p>
                <p>{time}</p>
            </div>
            <div className='containerIcons'>
            <RxUpdate className='iconUpdate' onClick={() => abrir(true)}/>
            <FiTrash className='iconRemove' onClick={() =>  deletar(id)}/>
            </div>
        </div>
    )

}