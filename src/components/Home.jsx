import React from "react";
import Header from "./Header";
import { background } from "../utils/image";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <img className="w-full h-full" src={background} alt="Background" />
      <div className="text-white place-content-center absolute top-0 bg-black/70 inset-0 mx-auto right-0 left-0">
        <div className="flex flex-col top-1/5  text-center ">
          <span className="text-6xl font-bold m-2 p-2">
            Unlimited movies,
            <br /> TV shows and more
          </span>
          <span className="mx-2 p-2 text-lg font-semibold">Starts at ₹149. Cancel at any time.</span>
          <span className="mx-2 p-2">Ready to watch? Enter your email to create or restart your membership.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
