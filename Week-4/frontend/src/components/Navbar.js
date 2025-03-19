// src/components/Navbar.js
function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">Store</a>
          <div className="space-x-6">
            <a href="/products" className="hover:text-blue-400">Products</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  