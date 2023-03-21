import './timeleft.scss';
import {useSelector, useDispatch} from 'react-redux';
import { validateMe } from '../../../redux/auth/authActions';
import { toast } from 'react-toastify';

export const TimeLeft = () => {
    const dispatch = useDispatch()
    const authSelector = useSelector( state => state.auth) 
    const timeLeft = authSelector.timeLeft

    
    const refreshTime = () => {
        dispatch(validateMe(authSelector.userToken))
        if (!authSelector.error) toast("Time refreshed.")
    }
    if (authSelector.timeLeftRunning) return(
        <div className='time-left-container' onClick={refreshTime}>
            <p className='time-text'>
            Time left: {timeLeft}s
            </p>
            <div className='lower-text-container'>
                <span className='lower-text'>
                    (Click to refresh time)
                </span>
            </div>
        </div>
    )
}

