import { createBrowserRouter } from "react-router-dom";
import {  MenuPage } from "@/pages";
import { AppLayout } from "@/components/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>error</div>,
    children: [
      {
        element: <MenuPage />,
        index: true,
      },
    ],
  },
]);
