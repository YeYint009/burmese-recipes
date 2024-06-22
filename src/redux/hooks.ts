import type { TypedUseSelectorHook } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useEffect } from "react";

useEffect(() => {
  const fetchDish =   async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/sannlynnhtun-coding/Burmese-Recipes/main/BurmeseRecipes.json"
    );
    const data = await res.json();
    console.log(data);
  }

  fetchDish();
}, []);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
