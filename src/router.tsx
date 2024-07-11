import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MenuPage from "./pages/menuPage/MenuPage";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'',element:<MenuPage/>},
    ]
  }
])