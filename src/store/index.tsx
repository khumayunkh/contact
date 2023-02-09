import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import authSlice from '../reducers/authSlice';

const store = configureStore({
  reducer: {
    user: authSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;