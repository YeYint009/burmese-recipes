import { useDispatch } from "react-redux";
import { RecipeType } from "../../redux/recipeTypes.ts";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks.ts";
import { RootState } from "../../redux/store.ts";
import {
  setLoading,
  setDishes,
  setError,
} from "../../redux/features/dishes/dishSlice.tsx";


const burmese_recipes_api =
  "https://raw.githubusercontent.com/sannlynnhtun-coding/Burmese-Recipes/main/BurmeseRecipes.json";

const RecipeApi = () => {
  const dispatch = useDispatch();
  const { dishes, status, error } = useAppSelector(
    (state: RootState) => state.dishes
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading());
      try {
        const res = await fetch(burmese_recipes_api);
        if (!res.ok) {
          throw new Error("failed to fetch ");
        }
        const data: RecipeType[] = await res.json();
        dispatch(setDishes(data));
      } catch (error) {
        dispatch(setError(String(error)));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? (
        <div>Loading ...</div>
      ) : status === "failed" ? (
        <div>Error {error} </div>
      ) : (
        dishes.map((dish) =>(
          <div key={dish.Guid}>
            
          </div>
        ) 
          
        )
      )}
    </>
  );
};

export default RecipeApi;
