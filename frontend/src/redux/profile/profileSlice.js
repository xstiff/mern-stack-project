import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    current_page: "Profile"
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changePage: (state, {payload}) => {
            state.current_page = payload
        }
    }
});


export const { changePage } = profileSlice.actions


export default profileSlice.reducer