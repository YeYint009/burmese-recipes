import { fetchRecipes } from "@/hooks/FetchRecipes";
import { Recipe, RecipeState} from "../../types/recipe.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedFavRecipes = JSON.parse(localStorage.getItem("favRecipes") || "{}");

const initialState: {
  recipeData: Recipe[];
  favRecipes: { [key: string]: Recipe };
  selectedCategory: string;
  RecipeState: RecipeState;
  searchValue: string;
  savedFavCount: number;
} = {
  recipeData: [],
  favRecipes: JSON.parse(localStorage.getItem("favRecipes") || "{}"),
  selectedCategory: "000",
  RecipeState: {
    status: "idle",
    error: null,
  },
  searchValue: "",
  savedFavCount: Object.values(savedFavRecipes).length,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipeData: (state, action: PayloadAction<Recipe[]>) => {
      state.recipeData = action.payload;
    },
    setSelectedCategory: (
      state,
      action: PayloadAction<"000" | "001" | "002">
    ) => {
      state.selectedCategory = action.payload;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    toggleFav: (state, action: PayloadAction<Recipe>) => {
    
      const recipe = action.payload;
      const isRecipeFav = state.favRecipes[recipe.Guid];
      if (isRecipeFav) delete state.favRecipes[recipe.Guid];
      else state.favRecipes[recipe.Guid] = recipe;

      localStorage.setItem("favRecipes", JSON.stringify(state.favRecipes));
    },
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

export const { setRecipeData, setSelectedCategory, setSearchValue, toggleFav } =
  recipesSlice.actions;

const recipesReducer = recipesSlice.reducer;

export default recipesReducer;
