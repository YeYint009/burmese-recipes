import { useEffect, useState } from "react";
import { RecipeState } from "../types/recipe.types";

const burmese_recipe_api =
  "https://raw.githubusercontent.com/sannlynnhtun-coding/Burmese-Recipes/main/BurmeseRecipes.json";

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [dataState, setDataState] = useState<RecipeState>({
    status: "idle",
    error: null,
  });

  useEffect(() => {
    (async () => {
      setDataState({ status: "loading", error: null });
      try {
        const res = await fetch(burmese_recipe_api);
        const data = await res.json();
        setRecipes(data);
        setDataState({ status: "succeeded", error: null });
      } catch (error) {
        setDataState({ status: "failed", error: "Failed to load" });
      }
    })();
  }, []);
  return { recipes, dataState };
};

export default useFetchRecipes;
