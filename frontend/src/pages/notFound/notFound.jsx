import { BigHeader } from "../../components/headers/bigheader";
import { useLocation } from "react-router-dom";
import './notFound.scss';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect( ()=> {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, [location])


    return(
        <>
            <BigHeader text={"Page not found."}/>
            <div className="notfound-container">
                <p className="notfound">
                    You will be redirected to home page within 3 second.
                </p>
                
            </div>
        </>
    )
}