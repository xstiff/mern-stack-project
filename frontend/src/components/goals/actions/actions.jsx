import './actions.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faCheckCircle, faArrowsSplitUpAndLeft, faClose, faX, faCircleXmark, faUndo, faUndoAlt} from '@fortawesome/free-solid-svg-icons'
export const Actions = () => {


    return(
        <td>
            <div className="action-wrapper">
            <FontAwesomeIcon icon={faCheckCircle} />
            
            <FontAwesomeIcon icon={faCircleXmark} />
            <FontAwesomeIcon icon={faGear} />

            </div>
        </td>
        )
}