import { Recipe } from "@/types/recipe.types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const RecipeCard = ({ recipe }: {recipe:Recipe}) => {
  return (
    <section className="mt-24">
      <Card className="w-auto h-96 shadow-xl overflow-hidden">
      <CardHeader>
        <CardContent>
        <img src={`/public/${recipe.Name}.jpg`} className=" aspect-square w-[300px] mb-4" />
        <CardTitle className="leading-9">{recipe.Name}</CardTitle>
          <div className="mt-2">{recipe.CookingInstructions}</div>
        </CardContent>
      </CardHeader>
      </Card>
    </section>
  );
};

export default RecipeCard;
