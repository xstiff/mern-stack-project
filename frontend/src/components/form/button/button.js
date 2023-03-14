import './button.scss';

export const Button = ({ type = 'submit', text = 'send', optClass = "", clickFunc = () => console.log('Please specify clickFunc') }) => {
    return(
        <div className="button-container">
        <button type={ type } className="button" onClick={clickFunc}>
            { text }
        </button>
        </div>
    )
}