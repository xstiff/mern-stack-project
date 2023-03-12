import { MenuContainer } from "./menuContainer/menuContainer"
import { MenuElement } from "./menuElement/menuElement"
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { MenuResetAll, MenuSetActive } from "./functions/menuFunctions";
export const Menu = () => {
    const [IsLogged, setIsLogged] = useState(false);
    const location = useLocation()

    useEffect( () => {
        let path = location.pathname.slice(1);
        MenuResetAll();
        if (path) MenuSetActive(path);
    }, [location])

    
    return(
        
        <MenuContainer>
            <MenuElement url="howitworks" text="How it works?" onclick={()=>setIsLogged(!IsLogged)}/>
            
            { IsLogged ? (

            // LOGGED IN
            <>
                <MenuElement url="goals" text="My goals"/>
                <MenuElement url="profile" text="Profile"/>
                <MenuElement url="logout" text="Logout"/>
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