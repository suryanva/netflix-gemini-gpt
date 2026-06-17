import { NETFLIX_LOGO_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/redux/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).catch(() => {});
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-black absolute z-50 w-full p-4 top-0 left-0 md:p-0">
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
            className="px-4 py-2 m-2 md:m-4 text-white border border-black hover:bg-red-600 text-sm md:text-base"
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
