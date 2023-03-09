import './alert.scss';

export const Alert = ({header = "Alert header!", text = "Some text"}) => {
    return(
        <div className='alert-container'>
            <div className='alert-header-container'>
                <h1 className='alert-header'>{header}</h1>
            </div>
            <div className='alert-sub-container'>
                <p className='alert-sub'>{text}</p>
            </div>
        </div>
    )
}