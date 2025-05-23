import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Browse from "./components/Browse";
import Home from "./components/Home";
import SignInUp from "./components/SignInUp";


const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignInUp />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/sign",
      element: <SignInUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
