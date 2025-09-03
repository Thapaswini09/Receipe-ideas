// src/components/Filters.jsx
import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-4 mb-6">
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="Beef">Beef</option>
        <option value="Chicken">Chicken</option>
        <option value="Dessert">Dessert</option>
        <option value="Seafood">Seafood</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>

      <select
        name="prepTime"
        value={filters.prepTime}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">All Prep Times</option>
        <option value="10 min">10 min</option>
        <option value="20 min">20 min</option>
        <option value="30 min">30 min</option>
        <option value="45 min">45 min</option>
      </select>
    </div>
  );
};

export default Filters;
