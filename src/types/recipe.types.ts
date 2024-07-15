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
  onPageChange: (page: number) => void;
  page: number;
  event: React.MouseEvent<HTMLAnchorElement>;
}

export interface RootState {
  recipes : {
    recipeData : Recipe[],
    filterRecipe : Recipe[]
  }
}