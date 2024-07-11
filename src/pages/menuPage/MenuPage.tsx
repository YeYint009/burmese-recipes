import useFetchRecipes from "@/hooks/useFetchRecipes";
import { Recipe } from "../../types/recipe.types";
import RecipeCard from "@/components/Card/RecipeCard";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const MenuPage = () => {
  const { recipes, state } = useFetchRecipes();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const currentItems = recipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(recipes.length);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    } else {
      currentPage;
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

  return (
    <div className="mt-24">
      <div className="container">
        <div className="grid grid-cols-3 gap-3">
          {state.status === "loading" ? (
            <h1>Loading...</h1>
          ) : state.status === "failed" ? (
            <h1>Error : {state.error}</h1>
          ) : (
            currentItems.map((recipe: Recipe) => (
              <RecipeCard recipe={recipe} key={recipe.Guid} />
            ))
          )}
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
