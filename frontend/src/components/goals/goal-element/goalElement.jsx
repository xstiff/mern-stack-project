import { Actions } from '../actions/actions';
import './goalElement.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons"


export const GoalElement = ({title = "Lorem ipsum", description = "Some description", progress = false}) => {
    const Incomplete = () => <td><FontAwesomeIcon icon={faCircleXmark} color="rgb(238, 78, 78)"/></td>
    const Complete = () => <td><FontAwesomeIcon icon={faCircleCheck} color="rgb(157, 204, 64)" /></td>

    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            {progress === true ? <Complete /> : <Incomplete />}
            <Actions />
        </tr>
    )
}