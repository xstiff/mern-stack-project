import './settingsEl.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const SettingsEl = ({option = "profile", text = "Lorem ipsum"}) => {
    return(
        <>
            <li className='settings-el'>
                <Link  to={`?category=${option}`}>
                    <FontAwesomeIcon icon={faArrowRight}/> {text}
                </Link>
            </li>
        </>

    )
}