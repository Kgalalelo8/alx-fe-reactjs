import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  recommendations: [],

  // Action to generate recommendations
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(
      (recipe) => 
        state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
