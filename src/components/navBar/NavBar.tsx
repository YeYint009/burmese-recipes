import { Input } from "../ui/input";
import Dropdown from "../dropdown/Dropdown";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearchValue } from "@/redux/features/recipes.slice";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const favRecipes = useAppSelector((state) => state.recipes.favRecipes);

  const favRecipesCount = Object.values(favRecipes).length;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div className="w-full h-20 bg-orange-500 flex z-50 rounded-b-sm fixed top-0">
      <div className=" container flex items-center italic font-bold text-3xl text-gray-900">
        <Link to="/">Burmese Recipe</Link>
      </div>

      <div className="flex items-center mr-10 w-72 gap-3">
        <Link to="/savedRecipe">
          <div className="relative">
            <Heart size={32} />
            <span className=" absolute -top-2 -right-2 bg-black flex items-center w-5 h-5 justify-center text-white rounded-full">
              {favRecipesCount}
            </span>
          </div>
        </Link>
        <Dropdown />
        <Input
          type="text"
          placeholder="Search"
          className="w-48"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default NavBar;
