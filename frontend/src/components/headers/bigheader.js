import './bigheader.scss';


export const BigHeader = ({text, color = "black", optClass = ""}) => {

    const styles = {
        color: color
    }

    return(
        <div className={`big-header-container ${optClass}`}>
            <h1 className='big-header' style={styles}>
                { text }
            </h1>
        </div>
    )
}