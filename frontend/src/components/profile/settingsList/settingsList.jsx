import './settingsList.scss';
import { SettingsEl } from '../settingsEl/settingsEl';
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../../redux/profile/profileSlice';

export const SettingsList = () => {
    const dispatch = useDispatch()

    return(
        <>
            <ul>
                <SettingsEl text='Profile'  onClickFunc={ () => dispatch(changePage("Profile"))  }/>
                <SettingsEl text='Change name'   onClickFunc={() => dispatch(changePage("Change name"))}/>
                <SettingsEl text='Change password'  onClickFunc={() => dispatch(changePage("Change password"))} />
                <SettingsEl text='Delete account' onClickFunc={() => dispatch(changePage("Delete account"))} />
            </ul>
        </>

    )
}