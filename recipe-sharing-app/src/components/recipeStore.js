import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => {
    set((state) => {
      const filtered = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered
      };
    });
  },

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe].filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Include update and delete if already added
}));