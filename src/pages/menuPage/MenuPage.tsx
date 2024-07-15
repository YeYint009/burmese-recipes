import { Recipe, RootState } from "../../types/recipe.types";
import RecipeCard from "@/components/Card/RecipeCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeData } from "@/redux/features/recipes.slice";
import useFetchRecipes from "@/hooks/useFetchRecipes";
import { AppDispatch } from "@/redux/store";
import PaginationComp from "@/components/pagination/pagination";

const MenuPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, state } = useFetchRecipes();
  const recipeData = useSelector(
    (state: RootState) => state.recipes.recipeData
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(recipeData.length / itemsPerPage);

  const currentItems = recipeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    state.status === "succeeded" ? dispatch(setRecipeData(recipes)) : null;
  }, [state, recipes, dispatch]);

  return (
    <div className="mt-24 ">
      <div className="container">
        <div className="grid grid-cols-3 gap-3">
          {currentItems.map((recipe: Recipe) => (
            
            <RecipeCard recipe={recipe} key={recipe.Guid} />
          ))}
        </div>
        <PaginationComp
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MenuPage;
