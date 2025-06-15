import React from "react";
import Header from "./Header";
import { background } from "../utils/constants";

/*Login page with a form with two input fields and Sign In button.
Header component is used to render the Netflix logo on top*/ 
const Login = () => { 
  const handleClick = () => {
  }                                                  
  return (
    <div className="">
      <Header />
      <img className="w-full h-full" src={background} alt="Background" />
      <form className="flex flex-col w-1/4 absolute h-2/3 top-30 rounded-lg mx-auto right-0 left-0 bg-black/80 p-2.5 m-2.5 text-white" action="">
      <h1 className="p-2 text-3xl font-bold mb-4">Sign In</h1>
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
        <button onClick={()=>handleClick} className="bg-red-600 m-4 p-2  text-white rounded-md font-semibold opacity-100" type="submit">
          Sign In
        </button>
        <p className="pl-4">New to Netflix ? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
