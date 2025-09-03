const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipesByIngredient = async (ingredient) => {
  const res = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);
  return await res.json();
};

export const fetchRecipeDetails = async (idMeal) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${idMeal}`);
  return await res.json();
};
