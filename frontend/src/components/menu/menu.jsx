import { MenuContainer } from "./menuContainer/menuContainer"
import { MenuElement } from "./menuElement/menuElement"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { MenuResetAll, MenuSetActive } from "./functions/menuFunctions";


export const Menu = () => {
    const location = useLocation()



    useEffect( () => {
        let path = location.pathname.slice(1);
        MenuResetAll();
        if (path) MenuSetActive(path);
        else MenuSetActive("home");
    }, [location])


    
    return(
        
        <MenuContainer>
            {/* { userName ? (

            // LOGGED IN
            
            <>
                
                <MenuElement url="logout" text="Logout"/>
                <MenuElement url="goals" text="My goals"/>
                <MenuElement url="profile" text={`Hi, None`} />
                
            </>


            ) :  */}
            
            <>
                <MenuElement url="login" text="Login"/>
                <MenuElement url="register" text="Register"/>
            </>
            
            
        </MenuContainer>
        
    )
}