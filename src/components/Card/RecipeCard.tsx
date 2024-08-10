import { Recipe } from "@/types/recipe.types";
import imgNotFound from "../../imgNotFound/imgNotFound.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Heart } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
  isFav: boolean;
  onToggleFav: (recipe: Recipe) => void;
}

const RecipeCard = ({ isFav, recipe, onToggleFav }: RecipeCardProps) => {
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFav(recipe);

    // const savedFavRecipes = JSON.parse(
    //   localStorage.getItem("favRecipes") || "{}"
    // );
    // if (savedFavRecipes[Guid]) {
    //   delete savedFavRecipes[Guid];
    // } else {
    //   savedFavRecipes[Guid] = { ...recipe, fav: true };
    // }
    // localStorage.setItem("favRecipes", JSON.stringify(savedFavRecipes));
  };

  // const isFav =
  //   recipe.fav ||
  //   !!JSON.parse(localStorage.getItem("favRecipes") || "[]").find(
  //     (favRecipe) => favRecipe.Guid === recipe.Guid
  //   );

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
                onClick={handleToggle}
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
