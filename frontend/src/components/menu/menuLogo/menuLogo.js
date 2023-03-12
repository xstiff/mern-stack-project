import './menuLogo.scss'
import { Link } from 'react-router-dom'
export const MenuLogo = () => {
    return (
        
        <div className="menu-logo-container">
            <Link to={"/"}>
            <h1 className="menu-logo">
                Goal Setter
            </h1>
            </Link>
        </div>
        
    )
}