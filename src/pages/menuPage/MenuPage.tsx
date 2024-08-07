import { Recipe } from "../../types/recipe.types";
import RecipeCard from "@/components/Card/RecipeCard";
import { useEffect, useMemo, useState } from "react";
import PaginationComp from "@/components/pagination/PaginationComp";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchRecipes } from "@/hooks/FetchRecipes";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const dispatch = useAppDispatch();
  const recipeData = useAppSelector((state) => state.recipes.recipeData);
  const searchValue = useAppSelector((state) => state.recipes.searchValue);
  const selectedCategory = useAppSelector(
    (state) => state.recipes.selectedCategory
  );

  const [debounceSearchValue, setDebounceSearchValue] = useState(searchValue);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebounceSearchValue(searchValue);
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, [searchValue]);
  console.log(debounceSearchValue);

  const filterData = useMemo(
    () =>
      recipeData.filter(
        (recipeData) =>
          recipeData.UserType === selectedCategory &&
          recipeData.Name.includes(debounceSearchValue)
      ),
    [recipeData, selectedCategory, debounceSearchValue]
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

  const handleToggleFav = (Guid: string) => {
    const updateFav = recipeData.map((recipe) =>
      recipe.Guid === Guid ? { ...recipe, fav: !recipe.fav } : recipe
    );
  };

  return (
    <div className="mt-24 ">
      <div className="container">
        <div className="grid grid-cols-3 gap-3">
          {currentItems.map((recipe: Recipe) => (
            <Link to={`/${recipe.Guid}`} key={recipe.Guid}>
              <RecipeCard
                recipe={recipe}
                onToggleFav={() => handleToggleFav(recipe.Guid)}
              />
            </Link>
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
