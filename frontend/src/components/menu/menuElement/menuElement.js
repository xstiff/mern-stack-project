import './menuElement.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MenuElement = ( { url = "#", text = "Some Text", onclick = () => {} }) => {



    return(
        <li className={`menu-element-li ${url}`} onClick={onclick}>
            <Link to={ url }> { text } </Link>
        </li>
    )
}


