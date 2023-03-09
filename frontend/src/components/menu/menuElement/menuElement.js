import './menuElement.scss';

export const MenuElement = ( { url = "#", text = "Some Text", onclick = () => {} }) => {
    return(
        <li className="menu-element-li" onClick={onclick}>
            <a href={url}>{ text }</a>
        </li>
    )
}


