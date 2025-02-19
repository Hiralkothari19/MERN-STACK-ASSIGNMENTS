import { useState } from "react";

const TextUpdater = () => {
    const [text, setText] = useState("");

    return (
        <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-md mx-auto bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Text Updater</h2>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type something..."
            />
            <p className="mt-3 text-gray-600">You typed: <span className="font-semibold text-blue-500">{text}</span></p>
        </div>
    );
};

export default TextUpdater;
