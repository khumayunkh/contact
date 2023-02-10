import { configureStore } from '@reduxjs/toolkit';
import { authReducers } from '../reducers/auth/authSlice';
import { usersReducers } from '../reducers/users/usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducers,
    users: usersReducers
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;