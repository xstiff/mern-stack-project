import { BigHeader } from "../../components/headers/bigheader";
import { useEffect } from "react";

export const Logout = () => {

    useEffect(() => {
        localStorage.clear()
    }, [])

    return(
        <>
            <BigHeader text={"You have been successfully logeed out."}/>
            {/* <BigHeader text={"You are not logged in."}/> */}
            
        </>
    )
}