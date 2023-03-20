import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = '/api/users/';
// + login

export const loginUser = createAsyncThunk(
    'auth/login',
    async (USER_DATA, {rejectWithValue}) => {
        try {
            const response = await axios.post(API_URL + 'login/', USER_DATA)
            const { token, id, name, email } = response.data
            if (response.status === 201) {
                const USER_OBJECT = {
                    userInfo: {
                        email,
                        id,
                        name,
                    },
                    userToken: token
                }
                localStorage.setItem('user', JSON.stringify(USER_OBJECT))
                return USER_OBJECT
            }

        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)


export const logOut = createAsyncThunk(
    'auth/logout',
    async () => {
        return true
    });

export const validateMe = createAsyncThunk(
    'auth/validate',
    async (USER_TOKEN, {rejectWithValue}) => {
        const config = {
            headers: { Authorization: `Bearer ${USER_TOKEN}` }
        };
        try {
            const response = await axios.get(API_URL + 'me/', config)
            const { token, id, name, email } = response.data
            // console.log('[validation] ' + response.data)
            if (response.status === 201) {
                const USER_OBJECT = {
                    userInfo: {
                        email,
                        id,
                        name,
                    },
                    userToken: token
                }
                localStorage.setItem('user', JSON.stringify(USER_OBJECT))
                return USER_OBJECT
            }
            
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);

