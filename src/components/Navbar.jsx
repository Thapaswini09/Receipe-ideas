import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-xl sticky top-0 z-50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/30 backdrop-blur-lg rounded-full p-3 hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🍳</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-yellow-300 transition-colors duration-300">
              Recipe<span className="text-yellow-200">Finder</span>
            </h1>
          </div>

          {/* Links */}
          <div className="flex space-x-3">
            <Link
              to="/"
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 transform ${
                location.pathname === "/"
                  ? "bg-white/25 backdrop-blur-lg text-white shadow-lg scale-105"
                  : "text-white/80 hover:text-white hover:bg-white/20 hover:scale-105"
              }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform ${
                location.pathname === "/favorites"
                  ? "bg-white/25 backdrop-blur-lg text-white shadow-lg scale-105"
                  : "text-white/80 hover:text-white hover:bg-white/20 hover:scale-105"
              }`}
            >
              <span>Favorites</span>
              <span className="text-red-400 animate-pulse">❤️</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
