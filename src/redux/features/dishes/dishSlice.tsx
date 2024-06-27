import { RecipeState } from "@/redux/recipeTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeType } from "../../recipeTypes";

const initialState: RecipeState = {
  dishes: [],
  status: "idle",
  error: null,
};

const dishSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setDishes: (state, action: PayloadAction<RecipeType[]>) => {
      state.dishes = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    setLoading: (state) => {
      state.status = "loading";
    },

    setError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setDishes, setLoading, setError } = dishSlice.actions;
export default dishSlice.reducer;
