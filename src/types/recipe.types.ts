export interface Recipe {
  Guid: string;
  Name: string;
  Ingredients: string;
  CookingInstructions: string;
  UserType: string;
}

export interface filterCategory {
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
  handlePageChange: (page: number) => void;
}

export interface RootState {
  filterRecipes: any;
  recipes: {
    recipeData: Recipe[];
    filterRecipes: Recipe[];
    selectedCategory: "001" | "002";
  };
}
