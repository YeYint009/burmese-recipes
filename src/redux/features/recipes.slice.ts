import React from "react";
import { Recipe } from "../../types/recipe.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Recipe = {
  Guid: "",
  Name: "",
  Ingredients: "",
  CookingInstructions: "",
  UserType: "",
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setGuid: (state, action) => {
      state.Guid = action.payload;
    },
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setIngredients: (state, action) => {
      state.Ingredients = action.payload;
    },
    setCookingInstructions: (state, action) => {
      state.CookingInstructions = action.payload;
    },
    setUserType: (state, action) => {
      state.UserType = action.payload;
    },
  },
});

export const {
  setGuid,
  setName,
  setIngredients,
  setCookingInstructions,
  setUserType,
} = recipesSlice.actions;

export default recipesSlice.reducer;
