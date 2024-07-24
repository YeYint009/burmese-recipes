import { filterCategory, Recipe } from "../../types/recipe.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { recipeData: Recipe[] } = {
  recipeData: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipeData: (state, action: PayloadAction<Recipe[]>) => {
      state.recipeData = action.payload;
    },
  },
});

const filterRecipeInitialState: filterCategory = {
  selectedCategory: "001",
};

export const filterRecipesSlice = createSlice({
  name: "filterRecipes",
  initialState: filterRecipeInitialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<"001" | "002">) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setRecipeData } = recipesSlice.actions;

export const { setSelectedCategory } = filterRecipesSlice.actions;

const recipesReducer = recipesSlice.reducer;
const filterRecipesReducer = filterRecipesSlice.reducer;

export default { recipesReducer, filterRecipesReducer };
