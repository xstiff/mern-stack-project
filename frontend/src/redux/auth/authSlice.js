import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

let user = {};

try {
    user = JSON.parse(localStorage.getItem('user'))
}
catch ( err ) {
    
    console.log(err)
    localStorage.clear();
    window.location.reload()
}



const initialState = {
    user: user ? user : null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
};


//
// Register
//
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            user.email = user.email.toLowerCase()
            return await authService.register(user)
        } catch (error) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          return thunkAPI.rejectWithValue(message)
        }})


//
// Register
//

export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            user.email = user.email.toLowerCase()
            return await authService.login(user)
        } catch (error) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          return thunkAPI.rejectWithValue(message)
        }})

        
export const whoami = createAsyncThunk(
    'auth/whoami',
    async (token, thunkAPI) => {
        try {
            return await authService.whoami(token)
        } catch (error) {
            const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        }})
        


export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
})


//
// Auth Slice
//
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
        },
    },
    extraReducers:(builder) => {
        builder

        // Register

        .addCase(
            register.pending,
            (state) => {
            state.isLoading = true;
        })
        .addCase(
            register.fulfilled,
            (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(
            register.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            }
        )

        // Login

        .addCase(
            login.pending,
            (state) => {
            state.isLoading = true;
        })
        .addCase(
            login.fulfilled,
            (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(
            login.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            }
        )


        // Whoami

        .addCase(
            whoami.pending,
            (state) => {
            state.isLoading = true;
        })
        .addCase(
            whoami.fulfilled,
            (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(
            whoami.rejected,
            (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            }
        )
    }
})


export const { reset } = authSlice.actions;
export default authSlice.reducer;