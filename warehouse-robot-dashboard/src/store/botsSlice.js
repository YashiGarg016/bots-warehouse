import { createSlice } from "@reduxjs/toolkit"

const botsSlice = createSlice({
    name: 'bots',
    initialState: {
        list: [],
    },
    reducers: {
        setBots(state, action){
            state.list = action.payload;
        },
    },
})

export const { setBots } = botsSlice.actions;
export default botsSlice.reducer;