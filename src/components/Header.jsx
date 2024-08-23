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
    <div className="flex justify-around items-center bg-gradient-to-b from-black h-24 absolute z-10 w-full">
      <img
        className="p-2 m-2 w-52 h-full  "
        src={NETFLIX_LOGO_URL}
        alt="logo"
      />
      {user ? (
        <div className="flex">
          <button
            onClick={handleGptSearch}
            className="py-2 px-4 m-4 bg-purple-800 text-white rounded"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img src={user?.photoURL} alt="useralt" className="w-12" />
          <button
            onClick={handleSignOut}
            className=" font-bold py-2 px-4 m-4 text-white border border-black p-3 hover:bg-red-600"
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
