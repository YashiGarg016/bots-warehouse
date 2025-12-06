import { configureStore } from '@reduxjs/toolkit';
import botsReducer from './botsSlice';
import tasksReducer from './tasksSlice';
import authReducer from './authSlice';


export const store = configureStore({
  reducer: {
    bots: botsReducer,
    tasks: tasksReducer,
    auth: authReducer,
  },
});
