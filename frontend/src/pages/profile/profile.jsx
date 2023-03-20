import { BigHeader } from "../../components/headers/bigheader"
import { MidHeader } from "../../components/headers/midheader"
import { Separator } from "../../components/separatorLine/separator"
import { SettingsList } from "../../components/profile/settingsList/settingsList"
import { useSelector, useDispatch } from 'react-redux'
import './profile.scss'
import { RightProfile } from "./rightProfile"


export const Profile = () => {
    const authSelector = useSelector(state => state.auth)
    const profileSelector = useSelector( state => state.profile )
    const currentPage = profileSelector.current_page
    return(
        
            <div className="profile-page-wrapper">
                <BigHeader  text={`Welcome, ${authSelector.userInfo.name}`}/>
                <Separator height="3px"/>


                <div className="profile-page-container">

                    <div className="profile-left-container">
                            <MidHeader text={"Settings"}/>
                            <SettingsList />
                    </div>

                    <div className="profile-right-container">
                        <MidHeader text={currentPage}/>
                        <RightProfile type={"text 2"} />
                    </div>

                </div>
            </div>
        
    )
}