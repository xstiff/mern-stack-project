import { BigHeader } from "../../components/headers/bigheader"
import { MidHeader } from "../../components/headers/midheader"
import { Separator } from "../../components/separatorLine/separator"
import { SettingsList } from "../../components/profile/settingsList/settingsList"
import { useSelector } from "react-redux"



import './profile.scss'
export const Profile = () => {
    const authSelector = useSelector(state => state.auth);
    const { user } = authSelector;

    console.log(authSelector)

    return(
        
            <div className="profile-page-wrapper">
                <BigHeader  text={`Welcome, ${user.name}`}/>
                <Separator height="3px"/>


                <div className="profile-page-container">

                    <div className="profile-left-container">
                            <MidHeader text={"Settings"}/>
                            <SettingsList />
                    </div>

                    <div className="profile-right-container">
                            <MidHeader text={"Profile"}/>
                            <p> Expires in: xyz</p>
                    </div>


                </div>
            </div>
        
    )
}