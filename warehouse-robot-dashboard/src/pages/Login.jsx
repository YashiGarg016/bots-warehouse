import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const error = useSelector((state) => state.auth.error);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) return;
        dispatch(login({ email, password }));
    };

    return (
        <div className="min-h-screen flex">
            {/* left side image */}
            <div className="hidden md:flex w-2/3 bg-cover bg-center" style={{ backgroundImage: `url(${bg})`}}></div>

            {/* <div className="bg-black/40 w-full h-full flex flex-col jsutify-center px-10">
                <h1 className="text-white text-4xl font-bold mb-4">Welcome to Bot Warehouse!</h1>
            </div> */}

            <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-50">
                <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-5"
            >

            <h1 className="text-2xl font-semibold text-center"> Log In </h1>
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

            {error && (
                <p className="text-xs text-red-600 text-center">{error}</p>
            )}

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 text white font-medium py-2 rounded shadow-md"
            >
                Login
            </button>
            <p className="text-xs text-center text-gray-600 mt-2">
                Don't have an account?{" "}
                <Link to='/signup' className='text-indigo-600 hover:underline'>Sign up here</Link>
            </p>
        </form>
            </div>
            
    </div>
    );
}