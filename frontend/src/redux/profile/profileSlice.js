import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    current_page: "Profile",
    show_delete: false,
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changePage: (state, {payload}) => {
            state.current_page = payload
        },
        toggleDelete: (state, {payload}) => {
            state.show_delete = payload
        },
        
    }
});


export const { changePage, toggleDelete } = profileSlice.actions


export default profileSlice.reducer