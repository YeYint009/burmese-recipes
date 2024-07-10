import { Recipe } from "@/types/recipe.types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const RecipeCard = ({ recipe }: {recipe:Recipe}) => {
  return (
    <div className="">
      <CardHeader>
        <img src="/public/ChickenPinsein.jpg" className="w-24 h-24" />
        <CardTitle>{recipe.Name}</CardTitle>
        <CardContent>
          <div className="mt-2 ">{recipe.CookingInstructions}</div>
        </CardContent>
      </CardHeader>
    </div>
  );
};

export default RecipeCard;
