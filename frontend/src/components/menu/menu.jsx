import { MenuContainer } from "./menuContainer/menuContainer"
import { MenuElement } from "./menuElement/menuElement"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { MenuResetAll, MenuSetActive } from "./functions/menuFunctions";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from "../../redux/auth/authActions";
import { TimeLeft } from "./timeleft/timeleft";
export const Menu = () => {
    const location = useLocation()
    const authSelector = useSelector( state => state.auth)
    const userName = authSelector.userInfo?.name
    const dispatch = useDispatch()

    useEffect( () => {
        let path = location.pathname.split("/")[1];
        MenuResetAll();
        if (path) MenuSetActive(path);
        else MenuSetActive("home");
    }, [location, authSelector])

    if (authSelector.loading) return <MenuContainer></MenuContainer>
    
    return(
        <MenuContainer>
            { userName ? (
            <>
                <TimeLeft />
                <MenuElement url="/" text="Logout" onclick={() => dispatch(logOut())}/>
                <MenuElement url="goals" text="My goals"/>
                <MenuElement url="profile" text={`Hi, ${userName}`} />
            </>
            ) : 
            <>
                <MenuElement url="login" text="Login"/>
                <MenuElement url="register" text="Register"/>
            </>
        }
        </MenuContainer>
        
    )
}