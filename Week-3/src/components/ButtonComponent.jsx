const ButtonComponent = () => {
  const handleClick = () => {
      console.log("Button clicked!");
  };

  return (
      <div className="p-4 border border-gray-300 rounded shadow-lg max-w-sm mx-auto bg-white">
          <button onClick={handleClick} 
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Click Me
          </button>
      </div>
  );
};

export default ButtonComponent;
