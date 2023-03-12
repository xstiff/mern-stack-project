import './bigheader.scss';


export const BigHeader = ({text, optClass = ""}) => {
    return(
        <div className={`big-header-container ${optClass}`}>
            <h1 className='big-header'>
                { text }
            </h1>
        </div>
    )
}