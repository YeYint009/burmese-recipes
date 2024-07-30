import { fetchRecipes } from "@/hooks/FetchRecipes";
import { Recipe, RecipeState, SearchBox } from '../../types/recipe.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  recipeData: Recipe[];
  selectedCategory: string;
  RecipeState: RecipeState;
  searchValue : string;
} = {
  recipeData: [],
  selectedCategory: "001",
  RecipeState: {
    status: "idle",
    error: null,
  },
  searchValue: ''
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipeData: (state, action: PayloadAction<Recipe[]>) => {
      state.recipeData = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<"001" | "002">) => {
      state.selectedCategory = action.payload;
    },

    setSearchValue : (state, action : PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.RecipeState.status = "loading";
    }),
      builder.addCase(fetchRecipes.fulfilled, (state, action) => {
        state.RecipeState.status = "succeeded";
        state.recipeData = action.payload;
      }),
      builder.addCase(fetchRecipes.rejected, (state, action) => {
        state.RecipeState.status = "failed";
        state.RecipeState.error = action.error.message || null;
      });
  },
});

export const { setRecipeData, setSelectedCategory,setSearchValue } = recipesSlice.actions;

const recipesReducer = recipesSlice.reducer;

export default recipesReducer;
