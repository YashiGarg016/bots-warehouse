import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../store/authSlice';
import { Link } from 'react-router-dom';
import bg from "../assets/bg.jpg";


export default function Signup() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || password.length < 8) return;
        dispatch(signup({ email, password })); //auto login after signup
    };

    return (

    <div className='min-h-screen flex'>
                    {/* left side image */}
                    <div className="hidden md:flex w-2/3 bg-cover bg-center" style={{ backgroundImage: `url(${bg})`}}></div>

        <div className='w-full md:w-1/3 flex items-center justify-center bg-gray-50"'>
            <form onSubmit={handleSubmit}
        className='bg-white border rounded p-6 shadow-sm w-full max-w-sm space-y-4'>
            <h1 className='text-xl font-semibold text-center'>Sign Up</h1>

            <div>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input 
                    type="email"
                    className='mt-1 w-full border rounded px-3 py-2 text-sm'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'>
                    Password (min 8 chars)
                </label>
                <input 
                    type="password"
                    className='mt-1 w-full border rounded px-3 py-2 text-sm'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                />
            </div>

            <button
                type='submit'
                className='w-full bg-indigo-600 text-white rounded py-2 text-sm font-medium hover:bg-indigo-700'>
                Create account
            </button>
            <p className='text-xs text-center text-gray-600 mt-2'>
                Already have an account?{" "}
                <Link to='/login' className='text-indigo-600 hover:underline'>Log in here</Link>
            </p>

        </form></div>            
        
    </div>
    );
}
