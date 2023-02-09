import {createSlice} from '@reduxjs/toolkit';


// -------------------------------------- INITIAL STATE -----------------------------------------------------
const initialState = {
    email: '',
    token: null,
    id: null,
    isAuth: false
};


// -------------------------------------- REDUCERS -----------------------------------------------------
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.isAuth = true
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.isAuth = false 
            state.email = '';
            state.token = null;
            state.id = null;
        },
    },
});

export const authActions = authSlice.actions
export const authReducers = authSlice.reducer

export default authSlice.reducer;