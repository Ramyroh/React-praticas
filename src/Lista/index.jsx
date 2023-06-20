import './style.css'
import {FiTrash} from 'react-icons/fi'
import {GrUpdate} from 'react-icons/gr'

export default function Lista({ name, time, id, deletar}) {
    return (
        <div className='containerLista'>
            <div>
                <p>{name}</p>
                <p>{time}</p>
            </div>
            <div>
            <GrUpdate />
            <FiTrash className='icon' onClick={() =>  deletar(id)}/>
            </div>
        </div>
    )

}