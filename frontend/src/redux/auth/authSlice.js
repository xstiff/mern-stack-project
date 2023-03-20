import { createSlice } from '@reduxjs/toolkit';
import { loginUser, validateMe } from './authActions';
import {useDispatch} from 'react-redux';

const userObject = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null; 

const initialState = {
    userInfo: userObject ? userObject.userInfo : null,
    userToken: userObject ? userObject.userToken : null,
    error: null,
    loading: false,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            localStorage.clear();
            state.userInfo = null;
            state.token = null;
            state.loading = false;
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: 
    (builder) => {
        builder
        .addCase(loginUser.pending, state => {
            state.loading = true
            state.error = null
            console.log('Loading')
        })
        .addCase(loginUser.fulfilled, (state, {payload}) => {
            state.loading = false
            state.userInfo = payload.userInfo
            state.userToken = payload.userToken
            console.log('Fulfiled')

        })
        .addCase(loginUser.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload
            console.log(payload)
        })

        // Validation

        .addCase(validateMe.pending, state => {
            state.loading = true
            state.error = null
            console.log('Loading')
        })
        .addCase(validateMe.fulfilled, (state, {payload}) => {
            state.loading = false
            state.userInfo = payload.userInfo
            state.userToken = payload.userToken
            console.log('Fulfiled')

        })
        .addCase(validateMe.rejected, (state, {payload}) => {
            localStorage.clear();
            state.userInfo = null;
            state.token = null;
            state.loading = false;
            state.success = false;
            state.error = null;
            console.log(payload)
        })
    }
    
  })

export const {logOut} = authSlice.actions;

export default authSlice.reducer;