import './menuElement.scss';
import { Link } from 'react-router-dom';


export const MenuElement = ( { url = "#", text = "Some Text", onclick = () => {} }) => {

    return(
        <li className={`menu-element-li ${url}`} onClick={onclick}>
            <Link to={ url }> { text } </Link>
        </li>
    )
}


