import { Button } from './button/button';
import './form.scss';
import { Input } from './input/input';
import { ErrorMessage } from './error/error';
import {useEffect} from 'react';
export const RegisterForm = () => {
    useEffect(
        () => {
            
        }, []
    );

    return(
        <form className='register-form-container'>
            <Input type='text' placeholder='Email'/>
            <Input type='text' placeholder='Name'/>
            <Input type='password' placeholder='Password'/>
            <Input type='password' placeholder='Re-Password'/>
            <ErrorMessage message="Please fill all fields."/>

            <Button text='Send'/>
        </form>
    )
}


export const LoginForm = () => {
    return(
        <form className='login-form-container'>
            <Input type='text' placeholder='Email'/>
            <Input type='password' placeholder='Password'/>
            <ErrorMessage message="Please fill all fields."/>

        <Button text='Send'/>
        </form>
    )
}