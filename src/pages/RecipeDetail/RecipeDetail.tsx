import { fetchRecipes } from "@/hooks/FetchRecipes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imgNotFound from "../../imgNotFound/imgNotFound.jpg";
import { Button } from "@/components/ui/button";

const RecipeDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const recipeSlug = useAppSelector((state) => state.recipes.recipeData);
  const recipeState = useAppSelector((state) => state.recipes.RecipeState);
  const recipeAll = recipeSlug.find((recipe) => recipe.Guid === id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchRecipes());
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id, dispatch]);
  return (
    <div>
      {loading || recipeState.status === "loading" ? (
        <div className="h-screen flex justify-center items-center animate-spin">
          <Loader />
        </div>
      ) : (
        <div className=" container min-h-screen flex flex-col p-10">
          <div className="mt-12">
            <Button onClick={() => nav(-1)}>Back</Button>
          </div>
          <div className="h-full md:flex p-10 gap-3">
            <img
              src={`/${recipeAll?.Name}.jpg`}
              onError={(e) =>
                ((e.target as HTMLImageElement).src = imgNotFound)
              }
              className="object-cover w-full h-[500px] mb-2 object-center rounded-md"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl underline mb-4 whitespace-nowrap">
                {recipeAll?.Name}
              </h1>
              <h1 className="font-bold text-2xl underline">Ingredients</h1>
              <pre className="leading-6">{recipeAll?.Ingredients}</pre>
              <h2 className="mt-2 mb-2 underline text-2xl">ချက်ပြုတ်နည်း</h2>
              <p className="text-neutral-500">
                {recipeAll?.CookingInstructions}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
