import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-20 bg-gray-200 px-6 flex justify-between items-center shadow-xl">
      <h1 className="text-2xl font-bold text-blue-600">
        Nova Mart
      </h1>

      <div className="flex gap-8 text-lg ml-130 text-blue-900 font-medium">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/products" className="hover:text-blue-600">
          Products
        </Link>

        <Link to="/cart" className="hover:text-blue-600">
          Cart
        </Link>

        <Link to="/login" className="hover:text-blue-600">
          Login
        </Link>
      </div>

      <div className="ml-auto">
        <input
          type="text"
          placeholder="Search products..."
          className="w-48 px-4 py-2 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </nav>
  );
}

export default Navbar;