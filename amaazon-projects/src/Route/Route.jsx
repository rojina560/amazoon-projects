import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../assets/Pages/Home/Home";
import Products from "../assets/Pages/Products/Products";
import Dashboard from "../assets/Pages/Dashborad/Dashboard";

const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
          path: "/products",
          element:<Products></Products>
      },
      {
        path: '/dashboard',
        element:<Dashboard></Dashboard>
        
      }
    ],
  },
]);
export default myCreateRoute