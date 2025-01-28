import React from "react";
import { Link } from "react-router-dom";
import { MdFastfood } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <nav
        className="bg-orange-600 shadow-lg flex item-center 
        justify-around py-3 px-32 flexed top-0 left-0 w-full"
      >
        <Link to="/">
          <span className="font-semibold text-lg flex item-center gap-3 text-orange-900">
            <MdFastfood  className="text-4xl " />
            <span className="font-semibold text-2xl">React Router</span>
          </span>
        </Link>

        <div className="flex item-center gap-5 text-black ">
          <Link
            to="/"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            Home
          </Link>

          <Link
            to="/about"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            About
          </Link>

          <Link
            to="/contact"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="py-1 px-3 text-lg font-light text-white hover:text-orange-300 rounded-2xl
            hover:bg-orange-700 transition duration-300 "
          >
            Products
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
