import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-orange-500 flex z-50 rounded-b-sm fixed top-0">
      <div className=" container flex items-center italic font-bold text-3xl text-gray-900">
        Burmese Recipe
      </div>
      <div className="flex items-center mr-10 w-72 gap-1">
        <Input type="text" placeholder="Search" />
        <Button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
