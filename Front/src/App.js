import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Dashboard";
import Error from "./pages/Error";

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

