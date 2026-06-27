import { FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [isOpen, SetisOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const menuHandler = () => {
    SetisOpen(!isOpen);
  };
  return (
    <nav className=" bg-[#3b5d50]">
      <div className="max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-5  flex justify-between items-center">
        <Link to="/" className="text-white text-4xl font-bold cursor-pointer">
          Furni<span className="text-gray-400">.</span>
        </Link>
        <ul className="hidden lg:flex gap-8 cursor-pointer text-white/70  text-sm font-medium">
          <NavLink to="/" className="hover:text-white transition duration-300">
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="hover:text-white transition duration-300"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-white transition duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-white transition duration-300"
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className="hover:text-white transition duration-300"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-white transition duration-300"
          >
            Contact Us
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <FiUser className="text-xl text-white cursor-pointer" />
            <Link to="/cart" className="relative">
              <FiShoppingCart className="text-xl text-white cursor-pointer" />

              <span className="absolute -top-3 -right-3 bg-[#f9bf29] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </div>

          {isOpen ? (
            <FiX
              onClick={menuHandler}
              className="text-2xl text-white cursor-pointer lg:hidden"
            />
          ) : (
            <FiMenu
              onClick={menuHandler}
              className="text-2xl text-white cursor-pointer lg:hidden "
            />
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-4 px-4 pb-6 text-white ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-xl text-white cursor-pointer" />

            <span className="absolute -top-3 -right-3 bg-[#f9bf29] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
