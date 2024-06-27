export interface RecipeType {
  map(arg0: (dish: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  Guid: string;
  Name: string;
  Ingredients: string;
  CookingInstructions: string;
  UserType: string;
}

export interface RecipeState {
  dishes: RecipeType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error : string | null;
}
