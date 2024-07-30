import { Input } from "../ui/input";
import Dropdown from "../dropdown/Dropdown";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchValue } from "@/redux/features/recipes.slice";

const NavBar = () => {
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <div className="w-full h-20 bg-orange-500 flex z-50 rounded-b-sm fixed top-0">
      <div className=" container flex items-center italic font-bold text-3xl text-gray-900">
        Burmese Recipe
      </div>
      <div className="flex items-center mr-10 w-72 gap-1">
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
