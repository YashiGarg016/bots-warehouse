import { createSlice } from "@reduxjs/toolkit";
import { set } from "react-hook-form";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        allocation: [],
        queue: [],
    },
    reducers: {
        setAllocation(state, action){
            state.allocation = action.payload;
        },
        setQueue(state, action){
            state.queue = action.payload;
        }
    },
});

export const { setAllocation, setQueue } = tasksSlice.actions;
export default tasksSlice.reducer;