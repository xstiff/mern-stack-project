import { BigHeader } from "../../components/headers/bigheader"
import { MidHeader } from "../../components/headers/midheader"
import { Separator } from "../../components/separatorLine/separator"
import { SettingsList } from "../../components/profile/settingsList/settingsList"

import './profile.scss'
export const Profile = () => {
    return(
        
            <div className="profile-page-wrapper">
                <BigHeader  text={"Welcome, Joe"}/>
                <Separator height="3px"/>


                <div className="profile-page-container">

                    <div className="profile-left-container">
                            <MidHeader text={"Settings"}/>
                            <SettingsList />
                    </div>

                    <div className="profile-right-container">
                            <MidHeader text={"Profile"}/>
                    </div>


                </div>
            </div>
        
    )
}