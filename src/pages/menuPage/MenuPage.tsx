import { Recipe, RootState } from "../../types/recipe.types";
import RecipeCard from "@/components/Card/RecipeCard";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeData } from "@/redux/features/recipes.slice";
import useFetchRecipes from "@/hooks/useFetchRecipes";
import { AppDispatch } from "@/redux/store";

const MenuPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {recipes,state} = useFetchRecipes();
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

  const handlePreviousClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePageClick =
    (page: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      handlePageChange(page);
    };

    useEffect(() => {
      state.status === 'succeeded' ? dispatch(setRecipeData(recipes)) : null
    },[state,recipes,dispatch])

  return (
    <div className="mt-24">
      <div className="container">
        <div className="grid grid-cols-3 gap-3">
          {
            currentItems.map((recipe: Recipe) => (
              <RecipeCard recipe={recipe} key={recipe.Guid} />
            ))
          }
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={handlePreviousClick} />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink href="#" onClick={handlePageClick(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={handleNextClick} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default MenuPage;
