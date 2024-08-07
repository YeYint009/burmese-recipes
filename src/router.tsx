import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MenuPage from "./pages/menuPage/MenuPage";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import FavoritePage from "./pages/favourite/FavoritePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MenuPage /> },
      { path: "/:id", element: <RecipeDetail /> },
      {path: "/savedRecipe", element: <FavoritePage/>}
    ],
  },
]);
