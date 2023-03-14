import { MenuContainer } from "./menuContainer/menuContainer"
import { MenuElement } from "./menuElement/menuElement"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { MenuResetAll, MenuSetActive } from "./functions/menuFunctions";
import { useSelector } from "react-redux";
export const Menu = () => {

    const location = useLocation()

    const authSelector = useSelector(state => state.auth);
    const { user } = authSelector;


    useEffect( () => {
        let path = location.pathname.slice(1);
        MenuResetAll();
        if (path) MenuSetActive(path);
        else MenuSetActive("home");
    }, [location])

    
    return(
        
        <MenuContainer>
            {/* <MenuElement url="" text="Toggle Logged in / out" onclick={()=>setIsLogged(!IsLogged)}/> */}
            
            { user ? (

            // LOGGED IN
            <>
                <MenuElement url="logout" text="Logout"/>
                <MenuElement url="goals" text="My goals"/>
                <MenuElement url="profile" text={`Hi, ${user.name}`}/>
                
            </>


            ) : (
            <>
                <MenuElement url="login" text="Login"/>
                <MenuElement url="register" text="Register"/>
            </>
            )}
            
        </MenuContainer>
        
    )
}