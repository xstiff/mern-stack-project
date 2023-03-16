import { MenuContainer } from "./menuContainer/menuContainer"
import { MenuElement } from "./menuElement/menuElement"
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { MenuResetAll, MenuSetActive } from "./functions/menuFunctions";
import { useSelector } from "react-redux";
import { whoami } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

export const Menu = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const authSelector = useSelector(state => state.auth);
    const userName = authSelector.user;

    const [timeLeft, setTimeLeft] = useState(120);


    useEffect( () => {
        setTimeLeft(120);
        let path = location.pathname.slice(1);
        MenuResetAll();
        if (path) MenuSetActive(path);
        else MenuSetActive("home");
    }, [location])


    useEffect( () => {

        try {
            const token = JSON.parse(localStorage.getItem("user")).token
            if (token) dispatch(whoami(token));
            console.log("Token: ", token)
        }
        catch(e) {
            console.log('No token')
            // window.location.reload();
        }
    }, [])

    useEffect(() => {
        if (timeLeft === 0) {
            dispatch(logout());
        }
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    


    
    return(
        
        <MenuContainer>
            { userName ? (

            // LOGGED IN
            
            <>
                <p className="countdown">Session expire in: <span className="time-left">{timeLeft}</span> s</p>
                <MenuElement url="logout" text="Logout"/>
                <MenuElement url="goals" text="My goals"/>
                <MenuElement url="profile" text={`Hi, ${userName.name}`} />
                
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