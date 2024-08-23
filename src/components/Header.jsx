import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { toggleGptSearchView } from "../utils/redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unSubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black h-24 absolute z-10 w-full p-4 md:p-0">
      <img className="w-36 md:w-52 h-full" src={NETFLIX_LOGO_URL} alt="logo" />
      {user ? (
        <div className="flex flex-col md:flex-row items-center">
          <button
            onClick={handleGptSearch}
            className="py-2 px-4 m-2 md:m-4 bg-purple-800 text-white rounded text-sm md:text-base"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="user"
            className="w-10 md:w-12 m-2 md:m-0"
          />
          <button
            onClick={handleSignOut}
            className="py-2 px-4 m-2 md:m-4 text-white border border-black p-2 md:p-3 hover:bg-red-600 text-sm md:text-base"
          >
            Sign-Out
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Header;
