import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./features/dishes/dishSlice.tsx";

const store = configureStore({
  reducer: {
    dishes: dishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
