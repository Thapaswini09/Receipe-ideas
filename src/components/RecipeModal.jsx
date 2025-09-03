import React from "react";

const RecipeModal = ({
  recipe,
  onClose,
  addFavorite,
  removeFavorite,
  favorites,
}) => {
  const isFavorite = favorites.some((f) => f.idMeal === recipe.idMeal);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        name: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`] || "",
      });
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{recipe.strMeal}</h2>
          {recipe.strCategory && (
            <p className="mb-4">Category: {recipe.strCategory}</p>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ingredients */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Ingredients</h3>
              <ul className="list-disc list-inside">
                {ingredients.map((ing, i) => (
                  <li key={i}>
                    {ing.name} - {ing.measure}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Instructions</h3>
              <p className="whitespace-pre-line">{recipe.strInstructions}</p>
            </div>
          </div>

          {/* YouTube */}
          {recipe.strYoutube && (
            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-2">Video Tutorial</h3>
              <iframe
                width="100%"
                height="300"
                src={recipe.strYoutube.replace("watch?v=", "embed/")}
                title="Recipe Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={() => {
              if (isFavorite) removeFavorite(recipe.idMeal);
              else addFavorite(recipe);
            }}
            className={`mt-4 px-6 py-2 rounded-full text-white ${
              isFavorite ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
