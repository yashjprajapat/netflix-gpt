import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { logo } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate(); //hook from react-router
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse"); //navigate on succesful authentication and state change
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/"); //navigate to login page
      }
    });
    return () => unsubscribe(); // unsubscribe to onAuthStateChange when Header unmounts
  }, []); /*navigate to browse page when the user is logged in/singed up once and didnt log out.
 Will check the Auth State everytime Header component is rendered using useEffect to direct the user 
 to the path authorized  */

  return (
    <div className="flex absolute w-full top-0 z-10 bg-gradient-to-b justify-between  from-black">
      <img className="w-[250px] h-[100px]  " src={logo} alt="Netflix Logo" />
      {user && (
        <div className="items-center flex">
          <img
            className="rounded-2xl p-2 m-2 h-[70px]"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            className="p-2 m-2 cursor-pointer text-white font-bold"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
