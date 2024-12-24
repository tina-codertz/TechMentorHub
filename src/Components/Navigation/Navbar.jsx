import React from "react";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#F4F4F4] border-b ">
      <div className="container mx-auto justify-end px-4 py-3 flex  items-center">
        {/* logo should be here */}
        <div className=" md:flex items-center  space-x-6 ">
          <ul className="flex text-xl font-bold  p-5 ">
            <li className="text-gray-600 block px-4 hover:text-[#0077CC] transition duration-300">
              <Link to="/be mentor">Be a mentor</Link>
            </li>
            <li className="text-gray-600 block px-4 hover:text-[#0077CC] transition duration-300">
              <Link to="/ find mentor">Find a mentor</Link>
            </li>
          </ul>
        </div>
        {/* Buttons */}
        <div className=" md:flex space-x-4">
          <a
            href="#sign-up"
            className="px-5 py-2 bg-[#0077CC] text-white rounded-full hover:bg-blue-500 transition duration-300"
          >
            Sign Up
          </a>
          <a
            href="#login"
            className="px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
