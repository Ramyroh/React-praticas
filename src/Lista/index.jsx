import './style.css'
import {FiTrash} from 'react-icons/fi'

export default function Lista({ name, time, id, deletar}) {
    return (
        <div className='containerLista'>
            <div>
                <p>{name}</p>
                <p>{time}</p>
            </div>
            <FiTrash className='icon' onClick={() =>  deletar(id)}/>
        </div>
    )

}