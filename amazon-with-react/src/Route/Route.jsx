import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Pages/Home/Home";
import Products from "../Products/Products";
import MainLayout from "../Layouts/MainLayout";
import Product from "../Product/Product";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Layouts/Pages/Home/Dashboard/Dashboard";
import Profile from "../Layouts/Pages/Profile/Profile";
import EditProfile from "../Layouts/Pages/EditProfile/EditProfile";

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
        loader: () => fetch(`https://dummyjson.com/products`),
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
        loader: (Object) => fetch(`https://dummyjson.com/products/${Object.params.id}`)
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
          },
          {
            path: '/dashboard/profile',
            element: <Profile></Profile>,
          },
          {
            path: '/dashboard/editProfile',
            element: <EditProfile></EditProfile>
          }

        ]
      },
    ],
  },
]);
export default myCreateRoute