import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup(state, action) {
            state.isAuthenticated = true;
            state.user = { email: action.payload.email };
        },
        login(state, action) {
            state.isAuthenticated = true;
            state.user = { email: action.payload.email };
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { signup, login, logout } =  authSlice.actions;
export default authSlice.reducer;