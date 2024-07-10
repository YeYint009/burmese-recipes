import { useEffect, useState } from "react";
import { RecipeState } from "../types/recipe.types";

const burmese_recipe_api =
  "https://raw.githubusercontent.com/sannlynnhtun-coding/Burmese-Recipes/main/BurmeseRecipes.json";

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [state, setState] = useState<RecipeState>({
    status: "idle",
    error: null,
  });

  useEffect(() => {
    (async () => {
      setState({ status: "loading", error: null });
      try {
        const res = await fetch(burmese_recipe_api);
        const data = await res.json();
        setRecipes(data);
        setState({ status: "succeeded", error: null });
      } catch (error) {
        setState({ status: "failed", error: "Failed to load" });
      }
    })();
  }, []);
  return { recipes, state };
};

export default useFetchRecipes;
