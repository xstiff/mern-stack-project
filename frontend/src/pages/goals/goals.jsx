import { BigHeader } from "../../components/headers/bigheader"
import './goal.scss'
import { GoalElement } from "../../components/goals/goal-element/goalElement"
import { GoalForm } from "../../components/goals/goal-form/goalForm";



export const Goals = () => {



    return  (
        <div className="goals-wrapper">
            <BigHeader text="Manage your goals" color="black"/>
            <div className="goal-table-wrapper">
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
                        {/* <GoalElement /> */}

                    </tbody>
                </table>

                <GoalForm />
            </div>
        </div>
    )
}