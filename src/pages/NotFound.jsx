import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* 404 Visual */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-gray-200 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl animate-bounce">🍳</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recipe Not Found!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Looks like this page went missing from our cookbook. Don't worry,
            there are plenty of delicious recipes waiting for you!
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Search Recipes
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Find recipes using ingredients you have at home
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Start Searching</span>
            </Link>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              My Favorites
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Check out your saved recipes and cooking inspiration
            </p>
            <Link
              to="/favorites"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>View Favorites</span>
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <p className="text-gray-600 italic">
            "The best recipes are the ones that bring people together. Let's get
            you back to cooking!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
