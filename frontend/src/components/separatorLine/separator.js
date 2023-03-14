import './separator.scss';

export const Separator = ({height = "5px", color = "black", optClass = ""}) => {
    const styles = {
        height: height,
        backgroundColor: color
    }



    return(<div className={`separator-container ${optClass}`} style={styles} />)
        
}