import { BigHeader } from "../../components/headers/bigheader"
import './goal.scss'
import { GoalElement } from "../../components/goals/goal-element/goalElement"
import {Tooltip} from "react-tooltip";



export const Goals = () => {

    return(
        <div className="goals-wrapper">
            <BigHeader text="Manage your goals" color="black"/>
            <div className="goal-table-wrapper">
            <Tooltip id="my-tooltip" />
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Progress</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <GoalElement title="Goal no. 1" description="fix session expire xd" progress={false} />
                        <GoalElement title="Goal no. 2" description="go outside" progress={true} />
                    </tbody>

                </table>
            </div>
        </div>
    )
}