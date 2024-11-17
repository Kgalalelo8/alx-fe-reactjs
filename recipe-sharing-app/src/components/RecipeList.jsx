import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '20px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() =>
              isFavorite(recipe.id)
                ? removeFavorite(recipe.id)
                : addFavorite(recipe.id)
            }
            style={{
              padding: '5px 10px',
              backgroundColor: isFavorite(recipe.id) ? '#f44' : '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


