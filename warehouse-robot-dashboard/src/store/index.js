import { configureStore } from '@reduxjs/toolkit';
import botsReducer from './botsSlice';
import tasksReducer from './tasksSlice';


export const store = configureStore({
  reducer: {
    bots: botsReducer,
    tasks: tasksReducer,
  },
});
