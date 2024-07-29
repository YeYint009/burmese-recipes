import { createAsyncThunk } from "@reduxjs/toolkit";

const burmese_recipe_api =
  "https://raw.githubusercontent.com/sannlynnhtun-coding/Burmese-Recipes/main/BurmeseRecipes.json";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const res = await fetch(burmese_recipe_api);
    const recipeData = await res.json();
    return recipeData;
  }
);
