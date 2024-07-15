export interface Recipe {
  Guid: string;
  Name: string;
  Ingredients: string;
  CookingInstructions: string;
  UserType: string;
}

export interface Category {
  selectedCategory: "001" | "002";
}

export interface SearchBox {
  searchValue: string;
}

export interface RecipeState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page:number) => void;
}

export interface RootState {
  recipes : {
    recipeData : Recipe[],
    filterRecipe : Recipe[]
  }
}