import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const AuthenticatedHeader = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  return (
    <div>
      <div className="flex justify-around items-center bg-opacity-65 bg-black h-24">
        <img
          className="p-2 m-2 w-52 h-full  "
          src={NETFLIX_LOGO_URL}
          alt="logo"
        />
        <div className="flex">
          <img src={user.photoURL} alt="useralt" className="w-12" />
          <button
            onClick={handleSignOut}
            className=" font-bold  text-white border border-black p-3 hover:bg-red-600"
          >
            Sign-Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedHeader;
