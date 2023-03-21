import { Button } from "../../form/button/button"
import { MidHeader } from "../../headers/midheader"
import './confirm.scss'
import { useDispatch } from "react-redux"
import { toggleDelete } from "../../../redux/profile/profileSlice"
import { toast } from 'react-toastify';

export const Confirm = () => {

    const dispatch = useDispatch();

    const closeWindow = () =>{
        
        dispatch(toggleDelete(false))
        toast("Account deletion is currently disabled")
    }

    return(
        <div className="confirm-container">
            <div className="confirm-box">
                <MidHeader text={"Your account will be deleted. This cannot be undone."}/>
                <MidHeader text={"Please click below to confirm"}/>
                <Button text="Confirm" clickFunc={() => closeWindow()}/>
            </div>
        </div>
    ) 
}