import React, { useRef, useState } from "react";
import Header from "./Header";
import { background } from "../utils/image";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignInUp = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate(); //useNavigate hook from react-router
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    //toggle between sign in and sign up form
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;

    //Sign In/Up Logic with auth, current emailid and password using firebase auth
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;  //get latest user/updated value
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/122102790?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse"); //navigate to browse page after successful signup
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse"); //navigate to browse page after successful sign in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorMessage = "";
          if (errorCode !== "") {
            errorMessage = "Invalid Credentials, please try again";
          }
          setErrMessage(errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <img className="w-full h-full" src={background} alt="Background" />
      <form
        className="flex flex-col w-1/4 absolute h-auto top-30 rounded-lg mx-auto right-0 left-0 bg-black/80 p-2.5 m-2.5 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="p-2 text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="border m-4 p-4 rounded-md "
            type="text"
            placeholder="Full Name"
            name="name"
          />
        )}
        <input
          ref={email}
          className="border m-4 p-4 rounded-md "
          type="email"
          placeholder="Email or mobile number"
          name="Email"
        />
        <input
          ref={password}
          className="border m-4 p-4 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
        />
        <p className="ml-4 p-2 font-sans font-semibold text-red-500">
          {errMessage}
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-red-600 m-4 p-2 text-white rounded-md font-semibold opacity-100"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="pl-4 cursor-pointer mb-2 p-2" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already a user ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default SignInUp;
