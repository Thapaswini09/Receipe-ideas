import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

const Favorites = () => {
  const { favorites, addFavorite, removeFavorite } = useOutletContext();
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  if (favorites.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        <p className="text-xl mb-4">No favorites yet.</p>
        <p>Start adding some delicious recipes to your favorites!</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">My Favorites ❤️</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={() => setSelectedRecipeId(recipe.idMeal)}
          />
        ))}
      </div>

      {selectedRecipeId && (
        <RecipeCard
          key={r.idMeal}
          recipe={r}
          favorites={favorites || []}
          onSelect={handleSelect}
          onFavorite={handleFavorite}
        />
      )}
    </div>
  );
};

export default Favorites;
