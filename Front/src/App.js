import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Dashboard";
import Error from "./pages/Error";
import React from 'react';
import store from "./redux/store";


// Importing routing functions from React Router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";


const ProtectedRoute = () => {
  const state = store.getState();
  const isAuthenticated = state.auth.token !== null;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Profile />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
    {
    path: "/profile",
    element: <ProtectedRoute />,
  },
 {
    path: "/*",
    element: <Error />,
  },

])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

