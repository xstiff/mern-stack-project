import './settingsEl.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const SettingsEl = ({onClickFunc = ()=>{}, text = "Lorem ipsum", arrow = true}) => {
    return(
        <>
            <li className='settings-el' onClick={onClickFunc}>
                <a>
                    {arrow && <FontAwesomeIcon icon={faArrowRight}/> }
                    {text}</a>
            </li>
        </>

    )
}