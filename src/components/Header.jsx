import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className="flex absolute w-full top-0 z-10 bg-gradient-to-b justify-between  from-black">
      <img className="w-[250px] h-[100px]  "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && (<div className="items-center flex">
        <img className="rounded-2xl p-2 m-2 h-[70px]" src={user?.photoURL} alt="usericon" />
        <button className="p-2 m-2 cursor-pointer text-white font-bold" onClick={handleSignOut}>(Sign Out)</button>
      </div>)}
    </div>
  );
};

export default Header;
