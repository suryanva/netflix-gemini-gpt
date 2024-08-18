import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { USER_URL } from "../utils/constants";
const Form = () => {
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const fullNameValue = fullName.current ? fullName.current.value : null;

    const validationErrorMessage = checkValidData(emailValue, passwordValue);

    setErrorMessage(validationErrorMessage);

    if (!validationErrorMessage) {
      if (signUp) {
        if (!fullNameValue) {
          setErrorMessage("Full name is required for sign-up.");
          return;
        }
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: fullNameValue,
              photoURL: USER_URL,
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            });
          })
          .catch((error) => {
            setErrorMessage(error.code + "-" + error.message);
          });
      } else {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then(() => {})
          .catch((error) => {
            setErrorMessage(error.code + "-" + error.message);
          });
      }
    }
  };

  const toggleSignUp = () => {
    setSignUp(!signUp);
    setErrorMessage(null);
  };

  return (
    <div className="w-full bg-opacity-65 bg-black h-[800px] relative">
      <div className="w-[24.5%] h-[85%] bg-black bg-opacity-50   p-16 space-y-4 top-0 bottom-0 left-0 right-0 mx-auto  text-white rounded-md absolute z-10 ">
        <h1 className="font-bold text-3xl mt-2">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 text-center "
        >
          {signUp && (
            <input
              ref={fullName}
              className="p-4 w-full bg-gray-700  border border-gray-50 rounded-lg "
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-4 w-full bg-gray-700  border border-gray-50 rounded-lg "
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-4 w-full bg-gray-700  border border-gray-50 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={() => handleButtonClick()}
            className="block w-full p-2 bg-[#E50914]  hover:bg-opacity-60 "
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {!signUp && <h3 className="text-center">OR</h3>}

          {!signUp && (
            <button
              className={"block w-full p-2 bg-gray-600 hover:bg-opacity-60"}
            >
              Use a Sign-In Code
            </button>
          )}

          {!signUp && (
            <p className="text-center hover:underline ">
              <a href="#dummy">Forgot Password?</a>
            </p>
          )}
        </form>
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => toggleSignUp()}
        >
          {signUp
            ? "Already a User? Sign In Now"
            : "New to Netflix? Sign up now."}
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot. Learn more.
        </p>
      </div>
    </div>
  );
};

export default Form;
