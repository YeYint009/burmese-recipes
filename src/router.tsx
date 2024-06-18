import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home.page";
import NavComponent from "./components/ui/NavBar/Nav.component";
import MenuPage from "./pages/Menu.page";

export const router = createBrowserRouter([
  {
    element: <NavComponent />,
    errorElement: <div>error</div>,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      }
    ],
  },

]);
