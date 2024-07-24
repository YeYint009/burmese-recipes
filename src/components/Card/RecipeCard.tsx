import { Recipe } from "@/types/recipe.types";
import imgNotFound from "../../imgNotFound/imgNotFound.jpg"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <section>
      <Card className="w-[90%] h-[90%] mx-auto shadow-xl overflow-hidden border">
        <CardHeader>
          <CardContent className="flex justify-center underline">
            <div>
              <img
                src={`/${recipe.Name}.jpg`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = imgNotFound;
                }}
                className=" object-cover w-full h-[200px] object-center rounded-md"
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
