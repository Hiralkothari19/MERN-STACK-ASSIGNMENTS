import { useState } from "react";

const FormComponent = () => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", text);
    };

    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-md mx-auto bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Form Component</h2>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter text..."
                />
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
