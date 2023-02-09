import { configureStore } from '@reduxjs/toolkit';
import { authReducers } from '../reducers/auth/authSlice';

const store = configureStore({
  reducer: {
    user: authReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;