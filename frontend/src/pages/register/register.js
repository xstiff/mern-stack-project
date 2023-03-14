import { BigHeader } from "../../components/headers/bigheader"
import { RegisterForm } from "../../components/form/form"
import { GotAccount } from "../../components/form/gotAccount/gotaccount"
export const Register = () => {
    return(
        <>
            <BigHeader text="Register new account!" optClass="Register" />
            <RegisterForm />
            <GotAccount />
            
        </>
    )
}