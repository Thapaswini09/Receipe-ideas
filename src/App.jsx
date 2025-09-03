import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function Layout({ favorites, addFavorite, removeFavorite }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet context={{ favorites, addFavorite, removeFavorite }} />
      </div>
    </>
  );
}

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(stored);
    } catch (error) {
      console.error("Error loading favorites:", error);
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    if (!favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (idMeal) => {
    setFavorites(favorites.filter((fav) => fav.idMeal !== idMeal));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          favorites={favorites}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "favorites", element: <Favorites /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
