import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../assets/Pages/Home/Home";

import Dashboard from "../assets/Pages/Dashborad/Dashboard";
import Footer from "../assets/Pages/Footer/Footer";

import Products from "../assets/Pages/Products/Products";
import SingleProduct from "../assets/Pages/SingleProduct/SingleProduct";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import ProfileUpdate from "../assets/Pages/ProfileUpdate/ProfileUpdate";
import Profile from "../assets/Pages/Profile/Profile";



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
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: "/singleProduct/:id",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
        element: <SingleProduct></SingleProduct>,
      },

      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element:<Dashboard></Dashboard>
          },
          {
            path: '/dashboard/profile',
            element:<Profile></Profile>

          },
          {
            path: '/dashboard/prfileUpdate',
            element:<ProfileUpdate></ProfileUpdate>
          }
        ],
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
    ],
  },
]);
export default myCreateRoute