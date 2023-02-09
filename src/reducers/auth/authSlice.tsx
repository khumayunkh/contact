import {createSlice} from '@reduxjs/toolkit';


// -------------------------------------- INITIAL STATE -----------------------------------------------------
const initialState = {
    email: '',
    token: null,
    id: null
};


// -------------------------------------- REDUCERS -----------------------------------------------------
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = '';
            state.token = null;
            state.id = null;
        },
    },
});

export const authActions = authSlice.actions
export const authReducers = authSlice.reducer

export default authSlice.reducer;