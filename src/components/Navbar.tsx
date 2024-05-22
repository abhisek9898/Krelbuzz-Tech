import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/klogo.png";

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);

    handleSearchToggle();
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="bg-indigo-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Krelbuzz Tech Logo" className="h-10 w-10 mr-3" />
          <div className="text-black text-lg font-bold">Krelbuzz Tech</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="font-bold text-black hover:text-gray-500">
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold text-black hover:text-gray-500"
          >
            About
          </Link>
          <Link
            to="/services"
            className="font-bold text-black hover:text-gray-500"
          >
            Services
          </Link>
          <div className="relative">
            {isSearchOpen ? (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center ml-2"
              >
                <input
                  type="text"
                  className="p-2 rounded-l-md focus:outline-none"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-700"
                >
                  Search
                </button>
                <IoClose
                  className="text-white ml-2 cursor-pointer"
                  onClick={handleSearchToggle}
                />
              </form>
            ) : (
              <IoSearch
                className="text-black text-3xl cursor-pointer"
                onClick={handleSearchToggle}
              />
            )}
          </div>
          <div className="relative">
            <FaUserCircle
              className="text-black text-3xl cursor-pointer"
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <div className="absolute top-7 -right-7 mt-6 w-48 bg-white rounded-md shadow-lg z-50 border-x-4 border-gray-300 ">
                <Link
                  to="/profile"
                  className="block px-16 py-2 text-black hover:bg-gray-400 font-bold"
                >
                  Profile
                </Link>
                <Link
                  to="/register"
                  className="block px-16 py-2 text-black hover:bg-gray-400 font-bold"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="block px-16 py-2 text-black hover:bg-gray-400 font-bold"
                >
                  Login
                </Link>
                <Link
                  to="/logout"
                  className="block px-16 py-2 text-black hover:bg-gray-400 font-bold"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
