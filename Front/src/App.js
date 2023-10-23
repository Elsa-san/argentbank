import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Dashboard";

// Importing routing functions from React Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    element: <Profile />,
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

