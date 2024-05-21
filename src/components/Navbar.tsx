import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/klogo.png"; // Adjust the path as necessary

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
    // Perform search or navigate to the search results page
    // For example: navigate(`/search?query=${searchQuery}`);
    handleSearchToggle(); // Close the search input after submitting
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Krelbuzz Tech Logo" className="h-10 w-10 mr-3" />
          <div className="text-white text-lg font-bold">Krelbuzz Tech</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
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
                className="text-white text-2xl cursor-pointer"
                onClick={handleSearchToggle}
              />
            )}
          </div>
          <div className="relative">
            <FaUserCircle
              className="text-white text-2xl cursor-pointer"
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
