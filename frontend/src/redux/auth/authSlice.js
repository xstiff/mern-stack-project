import { createSlice } from '@reduxjs/toolkit';
import { loginUser, validateMe, logOut } from './authActions';
import { toast } from 'react-toastify';
const userObject = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null; 


const initialState = {
    userInfo: userObject ? userObject.userInfo : null,
    userToken: userObject ? userObject.userToken : null,
    error: null,
    loading: false,
    success: false,
    timeLeft: 0,
    timeLeftRunning: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reduceTime: (state) => {
            if (state.timeLeftRunning === true && state.timeLeft - 1 === 0 && state.loading === false) {
                state.userInfo = null;
                state.userToken = null;
                state.timeLeftRunning = false;
                state.loading = false;
                state.success = false;
                state.error = null;
                state.timeLeft = 0;
                localStorage.removeItem('user');
                toast("You have been logged out")
            }
            else if ( state.timeLeftRunning === true && state.loading === false ){
                state.timeLeft = state.timeLeft - 1
                if ( state.timeLeft === 10) toast("You will be logged out soon. Refresh your time")
            }
        },
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
            state.timeLeft = 120;
            state.timeLeftRunning  = true;
        })
        .addCase(loginUser.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload

        })

        // Validation

        .addCase(validateMe.pending, state => {
            state.loading = true
            state.error = null
            state.timeLeft = 120;
            state.timeLeftRunning  = false;
            console.log('Loading')
        })
        .addCase(validateMe.fulfilled, (state, {payload}) => {
            state.loading = false
            state.userInfo = payload.userInfo
            state.userToken = payload.userToken
            state.timeLeft = 120;
            state.timeLeftRunning  = true;
            console.log('Fulfiled')

        })
        .addCase(validateMe.rejected, (state, {payload}) => {
            localStorage.clear();
            state.userInfo = null;
            state.userToken = null;
            state.token = null;
            state.loading = false;
            state.success = false;
            state.error = null;
            state.timeLeft = 0;
            state.timeLeftRunning  = false;
            console.log('Rejected')
        })

        .addCase(logOut.fulfilled, (state) => {
            state.userInfo = null;
            state.userToken = null;
            state.token = null;
            state.loading = false;
            state.success = false;
            state.error = null;
            state.timeLeft = 0;
            state.timeLeftRunning  = false;
            localStorage.removeItem('user');
        })
    }
    
  })


export default authSlice.reducer;

export const {reduceTime} = authSlice.actions