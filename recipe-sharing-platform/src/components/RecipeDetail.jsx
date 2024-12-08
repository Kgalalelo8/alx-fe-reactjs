import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
        } else {
          navigate("/"); // Redirect to Home if recipe is not found
        }
      })
      .catch((error) => console.error("Error fetching recipe data:", error));
  }, [id, navigate]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Cooking Instructions:</h2>
        <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
