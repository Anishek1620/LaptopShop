import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="border-b shadow-sm bg-cyan-400">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold">
          Laptop<span className="text-blue-600">Shop</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center 
        text-xl leading-8">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/laptops" className="hover:text-blue-600">
            Laptops
          </Link>
          <Link to="/cart" className="hover:text-blue-600 font-medium">
            Cart ({cartItems.length})
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 bg-white shadow">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="border-b pb-2"
          >
            Home
          </Link>

          <Link
            to="/laptops"
            onClick={() => setMenuOpen(false)}
            className="border-b pb-2"
          >
            Laptops
          </Link>

          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="font-medium"
          >
            Cart ({cartItems.length})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
