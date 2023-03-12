import './input.scss';


export const Input = ({ type = 'text', placeholder = '', optClass = '', label = placeholder}) => {
    return(
        <div className="input-container">
            <p className="label"> {label}: </p>
            <input type={type} placeholder={ placeholder } className={`input ${optClass}`}/>
        </div>
    )
}