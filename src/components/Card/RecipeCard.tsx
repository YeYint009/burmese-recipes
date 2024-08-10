import { Recipe } from "@/types/recipe.types";
import imgNotFound from "../../imgNotFound/imgNotFound.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Heart } from "lucide-react";
import Swal from "sweetalert2";

interface RecipeCardProps {
  recipe: Recipe;
  isFav: boolean;
  onToggleFav: (recipe: Recipe) => void;
}

const RecipeCard = ({ isFav, recipe, onToggleFav }: RecipeCardProps) => {
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    Swal.fire({
      title: isFav? "Remove from Favorites" : "Add to Favorite",
      text: isFav? "it is gonna remove from fav" : "Added to Favorite",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: isFav?"Yes, Remove it!": "Yes,add it!"
    }).then((result) => {
      if (result.isConfirmed) {
        onToggleFav(recipe);
        Swal.fire(
          isFav ? "Removed" : "Added!",
          isFav ? 'The Recipe is Removed' : "The Recipe is Added"
        );
      }
    });

  };

  return (
    <section>
      <Card className="md:w-[90%] md:h-[90%] w-[90%] h-[80%] hover:bg-orange-100 duration-300 shadow-xl overflow-hidden border">
        <CardHeader>
          <CardContent className="flex flex-col justify-center underline">
            <div className="relative">
              <img
                src={`/${recipe.Name}.jpg`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = imgNotFound;
                }}
                className=" object-cover aspect-square w-full mb-2 object-center rounded-md"
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
