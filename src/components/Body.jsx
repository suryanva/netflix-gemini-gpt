import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";
import Browse from "./Browse";
import Login from "./Login";

const AuthLayer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, [dispatch, navigate]);

  return <Outlet />;
};

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <h1 className="text-4xl font-bold mb-4">Oops!</h1>
    <p className="text-lg mb-8">Something went wrong.</p>
    <a href="/" className="text-blue-500 hover:underline">Go to Home</a>
  </div>
);

const appRouter = createBrowserRouter([
  {
    element: <AuthLayer />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
  { path: "/error", element: <ErrorPage /> },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
