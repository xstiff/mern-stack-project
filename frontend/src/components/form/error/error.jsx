import './error.scss'
export const ErrorMessage = ({ message }) => {
    return(
        <div className="error-message-container">
            <p className="error-message"> { message } </p>
        </div>
    )
}