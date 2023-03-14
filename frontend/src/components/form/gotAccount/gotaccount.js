import './gotaccount.scss';
import { Link } from 'react-router-dom';
export const GotAccount = ({ url="../login", text="Already got an account ? "}) => 
    <div className={`got-account`}>
        <Link to={url}>{text}</Link>
     </div>
