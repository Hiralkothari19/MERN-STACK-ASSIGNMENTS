const UserCard = () => {
  return (
      <div className="p-6 border border-gray-300 rounded-lg shadow-md max-w-sm mx-auto bg-white">
          <h2 className="text-2xl font-bold text-gray-700">User Card</h2>
          <p className="mt-2"><span className="font-semibold">Name:</span> John Doe</p>
          <p className="mt-1"><span className="font-semibold">Email:</span> johndoe@example.com</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">
              Click Me
          </button>
      </div>
  );
};

export default UserCard;
