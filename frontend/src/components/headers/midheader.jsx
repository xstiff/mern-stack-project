import './midheader.scss';


export const MidHeader = ({text, color = "black", optClass = ""}) => {


    const styles = {
        color: color
    }

    return(
        <div className={`mid-header-container ${optClass}`}>
            <h1 className='mid-header' style={styles}>
                { text }
            </h1>
        </div>
    )
}