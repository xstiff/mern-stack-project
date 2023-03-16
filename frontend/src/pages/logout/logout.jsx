import { BigHeader } from "../../components/headers/bigheader";
import { useEffect } from "react";

export const Logout = () => {

    useEffect(() => {
        localStorage.clear()
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }, [])

    return(
        <>
            <BigHeader text={"You have been successfully logeed out."}/>
            {/* <BigHeader text={"You are not logged in."}/> */}
            
        </>
    )
}