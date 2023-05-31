import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DetailsMenu from "../Pages/OurMenu/OurMenu/DetailsMenu";
import OurFood from "../Pages/OurFood/OurFood/OurFood";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <DetailsMenu />,
      },
      {
        path: "/ourfood",
        element: (
          <PrivateRoutes>
            <OurFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
    ],
  },
]);
