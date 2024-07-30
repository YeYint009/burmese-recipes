import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MenuPage from "./pages/menuPage/MenuPage";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MenuPage /> },
      { path: "/:id", element: <RecipeDetail /> },
    ],
  },
]);
