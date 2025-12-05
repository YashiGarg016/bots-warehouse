import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //add validation later

        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4"
            >

            <h1 className="text-xl font-semibold text-center"> Login </h1>
            <input
                className="w-full border p-2 rounded"
                placeholder="Email"
            />

            <input
                type="password"
                className="w-full border p-2 rounded"
                placeholder="Password"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text white font-medium py-2 rounded shadow-md"
            >
                Login
            </button>
        </form>
    </div>
    );
}