import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Main spinner */}
      <div className="relative">
        {/* Outer ring */}
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-orange-200"></div>
        {/* Inner spinning dot */}
        <div className="absolute top-2 left-2 animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-orange-500"></div>
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading text */}
      <div className="mt-6 text-center">
        <div className="flex items-center space-x-2 text-gray-600">
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "0ms" }}
          >
            🍳
          </span>
          <span className="text-lg font-medium">
            Cooking up some delicious recipes...
          </span>
          <span
            className="text-2xl animate-bounce"
            style={{ animationDelay: "200ms" }}
          >
            ✨
          </span>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-3">
          <div
            className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
