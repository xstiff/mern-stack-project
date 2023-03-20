import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import profileReducer from "../profile/profileSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer
    }
})

export default store;