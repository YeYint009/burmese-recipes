import { Recipe } from "@/types/recipe.types";
import imgNotFound from "../../imgNotFound/imgNotFound.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleFav } from "@/redux/features/recipes.slice";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface RecipeCardProps {
  recipe: Recipe;
  onToggleFav: (Guid: string) => void;
}

const RecipeCard = ({ recipe, onToggleFav }: RecipeCardProps) => {
  const dispatch = useAppDispatch();
  const favState = useAppSelector((state) => state.recipes.recipeData);
  const [isFav, setIsFav] = useState(false);

  const handleToggle = (e: React.MouseEvent, Guid: string) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFav(Guid));
    onToggleFav(Guid);
  };

  useEffect(() => {
    const favRecipe = favState.find(
      (favRecipe) => favRecipe.Guid === recipe.Guid
    );
    const savedFavRecipes = JSON.parse(
      localStorage.getItem("favRecipes") || "[]"
    );
    const isRed = savedFavRecipes.some(
      (favRecipe: Recipe) => favRecipe.Guid === recipe.Guid
    );
    setIsFav(favRecipe ? favRecipe.fav : isRed);
  }, [favState, recipe.Guid]);

  return (
    <section>
      <Card className="w-[90%] h-[90%] mx-auto shadow-xl overflow-hidden border">
        <CardHeader>
          <CardContent className="flex flex-col justify-center underline">
            <div className="relative">
              <img
                src={`/${recipe.Name}.jpg`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = imgNotFound;
                }}
                className=" object-cover w-full h-[200px] mb-2 object-center rounded-md"
              />
              <Heart
                size={24}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  cursor: "pointer",
                  fill: isFav ? "red" : "orange",
                  color: isFav ? "red" : "orange",
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => handleToggle(e, recipe.Guid)}
              />
            </div>
            <CardTitle className="leading-7 whitespace-pre overflow-ellipsis overflow-hidden">
              {recipe.Name}
            </CardTitle>
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  );
};

export default RecipeCard;
