import { LoginForm } from '../../components/form/form'
import { BigHeader } from '../../components/headers/bigheader'
import { GotAccount } from '../../components/form/gotAccount/gotaccount'


export const Login = () => {



    return(
        <>
            <BigHeader text="Login to existing account!" optClass="Login" />
            <LoginForm />
            <GotAccount url="../register" text="Register new account!"/>
        </>
    )
}