import './input.scss';


export const Input = ({
type = 'text',
placeholder = '',
optClass = '',
label = placeholder,
value,
inputFunc = () => console.log('Please define inputFunc'),
...other // required, disabled, etc

 }) => {
    return(
        <div className="input-container">
            <p className="label"> {label}: </p>
            <input type={type} placeholder={ placeholder } className={`input ${optClass}`} onInput={ inputFunc } value={ value } {...other}/>
            
        </div>
    )
}