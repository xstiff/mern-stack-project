import './actions.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faCheckCircle, faArrowsSplitUpAndLeft, faClose, faX, faCircleXmark, faUndo, faUndoAlt} from '@fortawesome/free-solid-svg-icons'
import {Tooltip} from "react-tooltip";
export const Actions = () => {


    return(
            

        <td>
            
            <div className="action-wrapper">
            <FontAwesomeIcon icon={faGear} data-tooltip-id="my-tooltip" 
  data-tooltip-content="Hello world!" 
  data-tooltip-place="top"/>
            <FontAwesomeIcon icon={faCircleXmark} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faUndoAlt} />



            </div>
        </td>
        )
}