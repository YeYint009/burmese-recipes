import RecipeCard from "@/components/Card/RecipeCard";
import { Button } from "@/components/ui/button";
import { toggleFav } from "@/redux/features/recipes.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Recipe } from "@/types/recipe.types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FavoritePage = () => {
  const favRecipes = useAppSelector((state) => state.recipes.favRecipes);
  const dispatch = useAppDispatch();

  const favRecipesArr = Object.values(favRecipes);

  const nav = useNavigate();

  const handleToggleFav = (recipe: Recipe) => {
    dispatch(toggleFav(recipe));
  };

  return (
    <div className="flex flex-col-1  mt-24">
      <div className=" w-12 px-12">
        <Button onClick={() => nav(-1)}>Back</Button>
      </div>
      {favRecipesArr.length > 0 ? (
        favRecipesArr.map((recipe) => (
          <Link to={`/${recipe.Guid}`} key={recipe.Guid}>
            <RecipeCard
              isFav={Boolean(favRecipes[recipe.Guid])}
              recipe={recipe}
              onToggleFav={() => handleToggleFav(recipe)}
            />
          </Link>
        ))
      ) : (
        <div className=" h-screen w-full flex justify-center items-center">
          No Favorite Recipe
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
