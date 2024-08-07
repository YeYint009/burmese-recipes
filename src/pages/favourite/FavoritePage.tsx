import RecipeCard from "@/components/Card/RecipeCard";
import { Button } from "@/components/ui/button";
import { Recipe } from "@/types/recipe.types";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FavoritePage = () => {
  const [favRecipes, setFavRecipes] = useState<Recipe[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    const storeFav = localStorage.getItem("favRecipes");
    if (storeFav) {
      setFavRecipes(JSON.parse(storeFav));
    }
  }, []);

  const handleToggleFav = (Guid: String) => {
    const updateFav = favRecipes.filter((recipe) => recipe.Guid !== Guid);
    setFavRecipes(updateFav);
    localStorage.setItem("favRecipes", JSON.stringify(updateFav));
  };

  return (
    <div className="flex flex-col-1  mt-24">
      <div className=" w-12 px-12">
        <Button onClick={() => nav(-1)}>Back</Button>
      </div>
      {favRecipes.length > 0 ? (
        favRecipes.map((recipe) => (
          <Link to={`/${recipe.Guid}`} key={recipe.Guid}>
            <RecipeCard recipe={recipe} onToggleFav={() => handleToggleFav(recipe.Guid)}/>
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
