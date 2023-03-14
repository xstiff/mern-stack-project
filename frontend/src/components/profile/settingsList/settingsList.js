import './settingsList.scss';
import { SettingsEl } from '../settingsEl/settingsEl';

export const SettingsList = () => {
    return(
        <>
            <ul>
                <SettingsEl text='Profile'/>
                <SettingsEl text='Change password' option='changepass'/>
                <SettingsEl text='Lorem' option='random'/>
                <SettingsEl text='Lorem' option='random'/>
                <SettingsEl text='Delete account' option='delete'/>
            </ul>
        </>

    )
}