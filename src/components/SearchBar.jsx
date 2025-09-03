import React from "react";

const SearchBar = ({ ingredients, setIngredients, onSearch }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Enter ingredients (e.g. egg, onion, chilli)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="flex-1 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-400"
      />
      <button
        onClick={onSearch}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
