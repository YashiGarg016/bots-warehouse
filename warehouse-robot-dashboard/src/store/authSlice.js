import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    registeredUser: null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signup(state, action) {
            state.registeredUser = {
                email: action.payload.email,
                password: action.payload.password,
            };
            state.isAuthenticated = true;
            state.user = { email: action.payload.email };
            state.error = null;
        },
        login(state, action) {
            const { email, password } = action.payload;
            if(
                state.registeredUser &&
                state.registeredUser.email === email &&
                state.registeredUser.password === password
            ) {
                state.isAuthenticated = true;
                state.user = { email };
                state.error = null;
            } else {
                state.isAuthenticated = false;
                state.user = null;
                state.error = "Invalid credentials";
            }
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
    },
});

export const { signup, login, logout } =  authSlice.actions;
export default authSlice.reducer;