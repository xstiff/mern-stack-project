import { Button } from './button/button';
import { Input } from './input/input';
import { ErrorMessage } from './error/error';
import {useEffect, useState} from 'react';
import { ValidatePassword, ValidateEmail, ValidateName, ValidateRePasswords } from './formValidations';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/authActions';
import { Spinner } from '../spinner/spinner';
import { useLocation } from 'react-router-dom';
export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const EmailValid = ValidateEmail(email);
        const NameValid = ValidateName(name);
        const PasswordValid = ValidatePassword(password);
        const rePasswordValid = ValidateRePasswords(password, rePassword);

        if (EmailValid.status === false) {
            return setError(EmailValid.message);
        }
        else if (NameValid.status === false) {
            return setError(NameValid.message);
        }
        else if (PasswordValid.status === false) {
            return setError(PasswordValid.message);
        }
        else if (rePasswordValid.status === false) {
            return setError(rePasswordValid.message);
        }

        const userData = {
            name,
            email,
            password,
          }

        setEmail('');
        setName('');
        setPassword('');
        setRePassword('');
        setError('');
        alert('[Register] Success! ( not really )');
        return true
    }


    return( 
        <form className='register-form-container' onSubmit={(e) => handleSubmit(e)}>

            <Input type='email' placeholder='Email' inputFunc={ (inputElement) => {
                setEmail(inputElement.target.value) 
            }}
            value={email}
            required
            />

            <Input type='text' placeholder='Name' inputFunc={ (inputElement) => {
                setName(inputElement.target.value) 
            }}
            value={name}
            required
            />

            <Input type='password' placeholder='Password' inputFunc={ (inputElement) => {
                setPassword(inputElement.target.value) 
            }}
            value={password}
            required={true}
            />

            <Input type='password' placeholder='Re-Password' inputFunc={ (inputElement) => {
                setRePassword(inputElement.target.value) 
            }}
            value={rePassword}
            required={true}
            />


            {
                error ? <ErrorMessage message={error}/> : null
            }

            <Button text='Register' type='submit' clickFunc={ () => null }/>
        </form>
    )
}


export const LoginForm = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation()
    const authSelector = useSelector(state => state.auth);
    const dispatch = useDispatch();


    useEffect(() => {
        if(authSelector.error) {
            setError(authSelector.error);
            setPassword('');
        }
    }, [authSelector])

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const EmailValid = ValidateEmail(email);
        const PasswordValid = ValidatePassword(password);
        if (EmailValid.status === false) {
            return setError(EmailValid.message);
        }
        else if (PasswordValid.status === false) {
            return setError(PasswordValid.message);
        }


        const USER_DATA = {
            email: email.toLowerCase(),
            password: password
        }

        dispatch(loginUser(USER_DATA))
    }

    if (authSelector.loading) return <Spinner/>


    return(
        <form className='login-form-container' onSubmit={(e) => handleSubmit(e)}>
            <Input type='email' placeholder='Email' inputFunc={ (inputElement) => {
                setEmail(inputElement.target.value) 
            }}
            value={email}
            required
            />
 
            <Input type='password' placeholder='Password' inputFunc={ (inputElement) => {
                setPassword(inputElement.target.value) 
            }}
            value={password}
            required={true}
            />


            {
                error ? <ErrorMessage message={error}/> : null
            }

            <Button text='Login' type='submit' clickFunc={ () => null }/>
        </form>
    )
}