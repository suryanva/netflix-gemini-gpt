import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";
import Browse from "./Browse";
import Login from "./Login";

const AuthLayer = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [authLoading, setAuthLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, email, displayName, photoURL } = firebaseUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
      setAuthLoading(false);
    });
    return () => unSubscribe();
  }, [dispatch]);

  if (authLoading) return null;

  if (!user && location.pathname === "/browse") {
    return <Navigate to="/" replace />;
  }

  if (user && location.pathname === "/") {
    return <Navigate to="/browse" replace />;
  }

  return <Outlet />;
};

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="text-lg mb-4">Page not found</p>
    <a href="/" className="text-blue-500 hover:underline">Go to Home</a>
  </div>
);

const appRouter = createBrowserRouter([
  {
    element: <AuthLayer />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/browse", element: <Browse /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
