import { MenuContainer } from "./menuContainer/menuContainer"
import { MenuElement } from "./menuElement/menuElement"
import { useState } from 'react';

export const Menu = () => {
    const [IsLogged, setIsLogged] = useState(false);
    
    
    
    return(
        
        <MenuContainer>
            <MenuElement url="#" text="How it works?" onclick={()=>setIsLogged(!IsLogged)}/>
            
            { IsLogged ? (

            // LOGGED IN
            <>
                <MenuElement url="#" text="My goals"/>
                <MenuElement url="#" text="Profile"/>
                <MenuElement url="#" text="Logout"/>
            </>


            ) : (
            <>
                <MenuElement url="#" text="Login"/>
                <MenuElement url="#" text="Register"/>
            </>
            )}
            
        </MenuContainer>
        
    )
}