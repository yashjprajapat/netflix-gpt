import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Home from "./components/Home";
import SignInUp from "./components/SignInUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "./utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
