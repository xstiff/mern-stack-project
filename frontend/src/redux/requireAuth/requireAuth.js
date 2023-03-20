import { useLocation, Navigate, Route, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Deny } from "../../pages/deny/deny"
import { validateMe } from "../auth/authActions"
import { useEffect } from "react"

export const RequireAuth = () => {
    const dispatch = useDispatch();
    const authSelector = useSelector(state => state.auth)
    
    useEffect(() => {
        dispatch(validateMe(authSelector.userToken))
    }, [])
    
    if (authSelector.loading) return <h1>Validating your token...</h1>

    if (!authSelector.userToken) return <Deny />;
    
    return <Outlet />
}

