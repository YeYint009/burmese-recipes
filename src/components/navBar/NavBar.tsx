import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Dropdown from "../dropdown/Dropdown";
import { Search } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-orange-500 flex z-50 rounded-b-sm fixed top-0">
      <div className=" container flex items-center italic font-bold text-3xl text-gray-900">
        Burmese Recipe
      </div>
      <div className="flex items-center mr-10 w-72 gap-1">
        <Dropdown />
        <Input type="text" placeholder="Search" className="w-48" />
        <Button size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
