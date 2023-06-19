import './style.css'

export default function Input(props) {
    return (
        <div className='containerInput'>
            <input
                
                className='input'
                // eslint-disable-next-line react/prop-types
                value={props.name}
                type="text"
            />
        </div>
    )
}