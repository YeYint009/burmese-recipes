import useFetchRecipes from "@/hooks/useFetchRecipes";
import { Recipe } from "../../types/recipe.types";
import RecipeCard from "@/components/Card/RecipeCard";
const MenuPage = () => {
  const { recipes, state } = useFetchRecipes();
  return (
    <div className="grid grid-cols-3 gap-3">
      {state.status === "loading" ? (
        <h1>Loading...</h1>
      ) : state.status === "failed" ? (
        <h1>Error : {state.error}</h1>
      ) : (
        recipes.map((recipe: Recipe) => (
          <RecipeCard recipe={recipe} key={recipe.Guid} />
        ))
      )}
    </div>
  );
};

export default MenuPage;
