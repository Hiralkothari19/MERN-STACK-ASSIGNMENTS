import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login:", { email, password });
    };

    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-md mx-auto bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Login Form</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter email..."
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter password..."
                />
                <button type="submit" className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
