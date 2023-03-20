import { Outlet, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Deny } from "../../pages/deny/deny"
import { logOut, validateMe } from "../auth/authActions"
import { useEffect } from "react"
import { Spinner } from "../../components/spinner/spinner"


export const RequireAuth = () => {
    const dispatch = useDispatch();
    const authSelector = useSelector(state => state.auth)
    const location = useLocation()
    useEffect(() => {
        if (authSelector.userToken) dispatch(validateMe(authSelector.userToken))
    }, [location])
    
    if (authSelector.loading) return <Spinner />

    if (!authSelector.userToken) return <Deny />;
    
    return <Outlet />
}

export const RequireNoAuth = () => {
    const dispatch = useDispatch();
    const authSelector = useSelector(state => state.auth)
    
    useEffect(() => {
        if (authSelector.userToken || authSelector.userInfo) {
            console.log(authSelector.userToken)
            console.log((authSelector.userToken || authSelector.userInfo))
            dispatch(logOut())
        }
    }, [])
    
    if (authSelector.loading) return <Spinner />

    if (authSelector.userToken) return <Deny />;
    
    return <Outlet />
}


