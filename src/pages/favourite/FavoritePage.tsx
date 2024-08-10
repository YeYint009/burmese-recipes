import RecipeCard from "@/components/Card/RecipeCard";
import { Button } from "@/components/ui/button";
import { toggleFav } from "@/redux/features/recipes.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Recipe } from "@/types/recipe.types";
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
    <div className="mt-24">
        <div className=" w-12 px-10 mb-4">
          <Button onClick={() => nav(-1)}>Back</Button>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3 gap-2 ">
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
          <div className="md:h-[500px] h-[450px] w-screen flex justify-center items-center">
            No Favorite Recipe
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
