import './button.scss';

export const Button = ({ type = 'submit', text = 'send', optClass = ""}) => {
    return(
        <div className="button-container">
        <button type={ type } className="button">
            { text }
        </button>
        </div>
    )
}