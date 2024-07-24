import { Recipe, RootState, filterCategory } from '../../types/recipe.types';
import RecipeCard from "@/components/Card/RecipeCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeData } from "@/redux/features/recipes.slice";
import useFetchRecipes from "@/hooks/useFetchRecipes";
import { AppDispatch } from "@/redux/store";
import PaginationComp from "@/components/pagination/PaginationComp";


const MenuPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, dataState } = useFetchRecipes();
  const recipeData = useSelector(
    (state: RootState) => state.recipes.recipeData
  );
  console.log(recipeData)
  const selectedCategory = useSelector(
    (state : RootState) => state.filterRecipes.selectedCategory
  )
  
  const filterData = recipeData.filter(recipeData => recipeData.UserType === selectedCategory)

  console.log(filterData)
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  
  const currentItems = filterData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  useEffect(() => {
    dataState.status === "succeeded" ? dispatch(setRecipeData(recipes)) : null;
  }, [dataState, recipes, dispatch]);
  



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
