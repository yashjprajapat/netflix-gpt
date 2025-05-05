import React, { useState } from "react";
import Header from "./Header";
import { background } from "../utils/image";

 
const SignInUp = () => { 
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }   
                                                   
  return (
    <div className="">
      <Header />
      <img className="w-full h-full" src={background} alt="Background" />
      <form className="flex flex-col w-1/4 absolute h-auto top-30 rounded-lg mx-auto right-0 left-0 bg-black/80 p-2.5 m-2.5 text-white" action="">
      <h1 className="p-2 text-3xl font-bold mb-4">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
      { !isSignInForm && <input
          className="border m-4 p-4 rounded-md "
          type="text"
          placeholder="Full Name"
          name="name"
        />}
        <input
          className="border m-4 p-4 rounded-md "
          type="email"
          placeholder="Email or mobile number"
          name="Email"
        />
        <input
          className="border m-4 p-4 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-red-600 m-4 p-2  text-white rounded-md font-semibold opacity-100" type="submit">
        {isSignInForm ? "Sign In" : "Sign Up" }
        </button>
        <p className="pl-4 cursor-pointer mb-2 p-2" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up" : "Already a user ? Sign In" }</p>
      </form>
    </div>
  );
};

export default SignInUp;
