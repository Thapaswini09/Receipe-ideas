import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipesByIngredient, fetchRecipeDetails } from "../utils/api";

const Home = () => {
  const { favorites, addFavorite, removeFavorite } = useOutletContext();

  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState(""); // 'quick', 'medium', 'heavy'

  const handleSearch = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    setError("");
    try {
      const ingArray = ingredients
        .split(",")
        .map((i) => i.trim().toLowerCase());
      let allResults = [];

      for (let ing of ingArray) {
        const data = await fetchRecipesByIngredient(ing);
        if (data?.meals) allResults.push(data.meals);
      }

      if (allResults.length === 0) {
        setRecipes([]);
        setError("No recipes found for these ingredients.");
        setLoading(false);
        return;
      }

      // Flatten and filter recipes that include ALL ingredients
      const combined = allResults.flat();
      const groupedById = combined.reduce((acc, meal) => {
        if (!acc[meal.idMeal]) acc[meal.idMeal] = { ...meal, count: 1 };
        else acc[meal.idMeal].count += 1;
        return acc;
      }, {});

      // Only keep recipes that appear for all ingredients (count === ingArray.length)
      const filtered = Object.values(groupedById).filter(
        (meal) => meal.count === ingArray.length
      );

      if (filtered.length > 0) setRecipes(filtered);
      else setError("No recipes found containing all these ingredients.");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const applyFilter = (recipe) => {
    if (!filter) return true;
    if (filter === "quick") return recipe.cookTime <= 10;
    if (filter === "medium") return recipe.cookTime <= 20;
    if (filter === "heavy") return recipe.cookTime > 20;
    return true;
  };

  const displayedRecipes = recipes.filter(applyFilter);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        <input
          type="text"
          placeholder="Enter ingredients (e.g. egg, onion, chilli)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="flex-1 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter("quick")}
          className={`px-4 py-2 rounded-full ${
            filter === "quick" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Under 10 min
        </button>
        <button
          onClick={() => setFilter("medium")}
          className={`px-4 py-2 rounded-full ${
            filter === "medium" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Under 20 min
        </button>
        <button
          onClick={() => setFilter("heavy")}
          className={`px-4 py-2 rounded-full ${
            filter === "heavy" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Heavy Meals
        </button>
        <button
          onClick={() => setFilter("")}
          className={`px-4 py-2 rounded-full ${
            filter === "" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedRecipes.map((r) => (
          <RecipeCard
            key={r.idMeal}
            recipe={r}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
