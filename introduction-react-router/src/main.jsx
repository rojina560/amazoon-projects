import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Users from "./Components/Users/Users.jsx";
import UserDetails from "./Components/userDetails/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";
import Albums from "./Components/Albums/Albums.jsx";
import AlbumDetails from "./Components/AlbumDetails/AlbumDetails.jsx";
import Todos from "./Components/Todos/Todos.jsx";
import TotosDetails from "./Components/TodosDetails/TotosDetails.jsx";
import ErrorPge from "./Components/ErroPage/ErrorPge.jsx";
import MealBds from "./Components/mealsBd/MealBds.jsx";
import Recipes from "./Components/Recipes/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPge></ErrorPge>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },

      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/albums",
        loader: () => fetch("https://jsonplaceholder.typicode.com/albums"),
        element: <Albums></Albums>,
      },
      {
        path: "/album/:albumId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
          ),
        element: <AlbumDetails></AlbumDetails>,
      },
      {
        path: "/todos",
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
        element: <Todos></Todos>,
      },
      {
        path: "/todo/:todoId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/todos/
          ${params.todoId}`),
        element: <TotosDetails></TotosDetails>,
      },
      {
        path: "/meals",
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
        element: <MealBds></MealBds>,
      },
      {
        path: "/recipes",
        loader: () => fetch("https://dummyjson.com/recipes"),
        element:<Recipes></Recipes>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
