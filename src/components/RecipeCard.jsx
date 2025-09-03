import React, { useState } from "react";
import { fetchRecipeDetails } from "../utils/api";

const RecipeCard = ({ recipe, favorites, addFavorite, removeFavorite }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const isFavorite =
    favorites?.some((fav) => fav.idMeal === recipe.idMeal) || false;

  const toggleDetails = async () => {
    if (details) return setDetails(null); // collapse
    setLoading(true);
    const data = await fetchRecipeDetails(recipe.idMeal);
    if (data?.meals) setDetails(data.meals[0]);
    setLoading(false);
  };

  const ingredients = details
    ? Array.from({ length: 20 })
        .map((_, i) => {
          const name = details[`strIngredient${i + 1}`];
          const measure = details[`strMeasure${i + 1}`];
          if (!name) return null;
          return `${name} - ${measure || ""}`;
        })
        .filter(Boolean)
    : [];

  return (
    <div className="group cursor-pointer bg-white rounded-3xl shadow-lg overflow-hidden transition-all">
      <div
        onClick={toggleDetails}
        className="relative aspect-square overflow-hidden"
      >
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
        {recipe.strCategory && (
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full mt-2 text-sm">
            {recipe.strCategory}
          </span>
        )}
      </div>

      {loading && (
        <p className="text-center p-4 text-gray-600">Loading details...</p>
      )}

      {details && (
        <div className="p-4 border-t border-gray-200 text-left">
          <h4 className="font-semibold mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside mb-2">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h4 className="font-semibold mb-2">Instructions:</h4>
          <p className="whitespace-pre-line mb-2">{details.strInstructions}</p>

          {details.strYoutube && (
            <div className="mb-2">
              <h4 className="font-semibold mb-2">Video Tutorial:</h4>
              <iframe
                width="100%"
                height="200"
                src={details.strYoutube.replace("watch?v=", "embed/")}
                title="Recipe Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isFavorite) removeFavorite(recipe.idMeal);
              else addFavorite(recipe);
            }}
            className={`mt-2 px-4 py-2 rounded-full text-white ${
              isFavorite ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
