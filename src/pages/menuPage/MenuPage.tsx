import useFetchRecipes from "@/hooks/useFetchRecipes";
import { Recipe } from "../../types/recipe.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecipeCard from "@/components/Card/RecipeCard";
const MenuPage = () => {
  const { recipes, state } = useFetchRecipes();
  return (
    <div>
      {state.status === "loading" ? (
        <h1>Loading...</h1>
      ) : state.status === "failed" ? (
        <h1>Error : {state.error}</h1>
      ) : (
        recipes.map((recipe: Recipe) => (
          <div key={recipe.Guid} className="container">
            <RecipeCard recipe={recipe} />
          </div>
        ))
      )}
    </div>
  );
};

export default MenuPage;
