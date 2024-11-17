import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Recipe Results</h2>
      {filteredRecipes.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>No recipes found. Try another search!</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#fdfdfd' }}>
            <h3 style={{ margin: '0 0 10px', color: '#555' }}>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                {recipe.title}
              </Link>
            </h3>
            <p style={{ margin: '0', color: '#666' }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;

