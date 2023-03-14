import './settingsList.scss';
import { SettingsEl } from '../settingsEl/settingsEl';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export const SettingsList = () => {
    const location = useLocation();
    const [path, setPath] = useState("profile");
    useEffect( () => { 
        const locParam = location.search.split('category=')[1];
        if (locParam) setPath(locParam);
        
    }, [location])
    
    return(
        <>
            <ul>
                <SettingsEl text='Profile'/>
                <SettingsEl text='Change password' option='changepass'/>
                <SettingsEl text='Lorem' option='random'/>
                <SettingsEl text='Lorem' option='random'/>
                <SettingsEl text='Delete account' option='delete'/>
                <button onClick={() => console.log(path)}>Check path</button>
            </ul>
        </>

    )
}