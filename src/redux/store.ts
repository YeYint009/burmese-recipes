import { configureStore } from "@reduxjs/toolkit";
import reducers from "./features/recipes.slice";

const { recipesReducer, filterRecipesReducer } = reducers;

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    filterRecipes: filterRecipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
