import { Recipe } from "../../types/recipe.types";
import RecipeCard from "@/components/Card/RecipeCard";
import { useEffect, useState } from "react";
import PaginationComp from "@/components/pagination/PaginationComp";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchRecipes } from "@/hooks/FetchRecipes";

const MenuPage = () => {
  const dispatch = useAppDispatch();
  const recipeData = useAppSelector((state) => state.recipes.recipeData);
  const searchValue = useAppSelector((state) => state.recipes.searchValue )
  const selectedCategory = useAppSelector(
    (state) => state.recipes.selectedCategory
  );

  const filterData = recipeData.filter(
    (recipeData) => recipeData.UserType === selectedCategory &&
    recipeData.Name.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(filterData);

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
    dispatch(fetchRecipes());
  }, [dispatch]);

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
