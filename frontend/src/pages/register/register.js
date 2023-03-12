import { BigHeader } from "../../components/headers/bigheader"
import { RegisterForm } from "../../components/form/form"
export const Register = () => {
    return(
        <div>
            <BigHeader text="Register new account!" optClass="Register" />
            <RegisterForm />
        </div>
    )
}