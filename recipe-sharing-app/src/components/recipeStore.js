import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) =>
    set((state) => {
      const lowerCaseTerm = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(lowerCaseTerm)
        ),
      };
    }),

  // Action to initialize or update recipes
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
