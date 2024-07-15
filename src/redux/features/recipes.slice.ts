import { Recipe } from "../../types/recipe.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : { recipeData : Recipe[], filterRecipe : Recipe []} = {
  recipeData : [],
  filterRecipe : []
}


export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
      setRecipeData  : (state,action : PayloadAction<Recipe[]>) => {
      state.recipeData = action.payload;
    }
  },
});

export const filterRecipesSlice = createSlice({
  name: "filterRecipes",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.filterRecipe = action.payload;
    },
  },
});

export const { setRecipeData } = recipesSlice.actions;

export const { setSelectedCategory } = filterRecipesSlice.actions;

const recipesReducer = recipesSlice.reducer;
const filterRecipesReducer = filterRecipesSlice.reducer;

export default { recipesReducer, filterRecipesReducer };