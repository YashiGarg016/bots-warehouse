import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) return;
        dispatch(login({ email }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4"
            >

            <h1 className="text-xl font-semibold text-center"> Log In </h1>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="email"
                    className="mt-1 w-full border rounded px-3 py-2 text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    type="password"
                    className="mt-1 w-full border rounded px-3 py-2 text-sm" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 text white font-medium py-2 rounded shadow-md"
            >
                Login
            </button>
        </form>
    </div>
    );
}