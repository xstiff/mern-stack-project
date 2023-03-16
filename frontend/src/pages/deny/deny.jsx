import { BigHeader } from "../../components/headers/bigheader";
import { useLocation } from "react-router-dom";
import './deny.scss';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Deny = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.slice(1);
    const messages = {
        "login": "You are already logged in.",
        "register": "You are already logged in.",
        "profile": "You need to be logged in to access this page.",
        "goals": "You need to be logged in to access this page.",
        "logout": "You need to be logged in to access this page.",
    }

    useEffect( ()=> {
        setTimeout(() => {
            navigate("/");
        }, 500);
    }, [location])
    return(
        <>
            <BigHeader text={"Access denied."}/>
            <div className="deny-container">
                <p className="deny">
                    {`${messages[path]}`}
                </p>
            </div>
        </>
    )
}