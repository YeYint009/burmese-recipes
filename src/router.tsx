import { createBrowserRouter } from "react-router-dom";
import { HomePage, MenuPage } from "@/pages";
import { AppLayout } from "@/components/Layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>error</div>,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
]);
